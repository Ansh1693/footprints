import { Tag } from "../../utils/initializers/prisma.initializer.js";

/**
 *
 */
export const create = async (tagObject) => {
  try {
    const createdTag = await Tag.create({
      data: {
        ...tagObject,
        TagsDocument: {
          create: tagObject?.TagsDocument.map((doc) => {
            return {
              Document: {
                connect: {
                  id: doc.id,
                },
              },
            };
          }),
        },
      },
    });
    return createdTag;
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will read a tag(s)
 *
 */
export const read = async (tagObject) => {
  try {
    if (tagObject?.tagId) {
      return await Tag.findUnique({
        where: {
          ...tagObject,
        },
        include: {
          TagsDocument: {
            include: {
              Document: {
                include: {
                  DocumentMetadata: true,
                  RedditData: true,
                  PinterestData: true,
                },
              },
            },
          },
        },
      });
    } else {
      return await Tag.findMany({
        where: {
          ...tagObject,
        },
        include: {
          TagsDocument: {
            include: {
              Document: {
                include: {
                  DocumentMetadata: true,
                },
              },
            },
          },
        },
      });
    }
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will update a tag
 *
 */
export const update = async (tagObject) => {
  try {
    const updatedTag = {
      ...tagObject,
      TagsDocument: {
        create: tagObject?.TagsDocument?.connect.map((doc) => {
          return {
            Document: {
              connect: {
                id: doc.id,
              },
            },
          };
        }),
        deleteMany: tagObject?.TagsDocument?.disconnect.map((doc) => {
          return { documentId: doc.id, tagId: tagObject.id };
        }),
      },
    };

    return await Tag.update({
      where: {
        id: tagObject.id,
      },
      data: updatedTag,
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will delete a tag
 *
 */
export const del = async (tagObject) => {
  try {
    await Tag.update({
      where: {
        id: tagObject.id,
      },
      data: {
        TagsDocument: {
          deleteMany: {
            tagId: tagObject.id,
          },
        },
      },
    });

    return await Tag.delete({
      where: {
        ...tagObject,
      },
    });
  } catch (error) {
    throw error;
  }
};
