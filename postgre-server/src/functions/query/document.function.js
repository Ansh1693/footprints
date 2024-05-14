import {
  Comments,
  Document,
} from "../../utils/initializers/prisma.initializer";

/**
 * A function that will send return a specific document
 *
 */
export const readDocument = async (documentId, profileId = undefined) => {
  try {
    const foundDocument = await Document.findUnique({
      where: {
        id: documentId,
      },
      include: {
        DocumentMetadata: true,
        Comments: {
          include: {
            User: {
              select: {
                id: true,
                username: true,
                name: true,
              },
            },
          },
        },

        RedditData: true,
        PinterestData: true,
        TagsDocument: {
          include: {
            Tag: true,
          },
        },
      },
    });

    if (foundDocument.public === false) {
      if (profileId !== foundDocument.userId) {
        throw new Error("Document is not public.");
      }
    }

    return foundDocument;
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will post a comment for a specific document
 *
 */
export const postComment = async (documentObject, commentObject) => {
  try {
    await Comments.create({
      data: {
        body: commentObject.comment,
        documentId: documentObject.id,
        userId: commentObject.userId,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will delete a comment for a specific document
 *
 */
export const deleteComment = async (documentObject, commentObject) => {
  try {
    await Comments.delete({
      where: {
        id: commentObject.id,
        documentId: documentObject.id,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    throw error;
  }
};
