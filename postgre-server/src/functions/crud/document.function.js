import {
  BloksDocument,
  Document,
  // Blok,
  User,
  Comments,
  DocumentMetadata,
  RedditData,
  TagsDocument,
} from "../../utils/initializers/prisma.initializer.js";

/**
 * A function that will create a new document
 *
 *
 */
export const create = async (documentObject, blokObject = undefined) => {
  try {
    const createDoc = {
      data: {
        ...documentObject,
        DocumentMetadata: {
          create: {
            ...documentObject.DocumentMetadata,
          },
        },
      },
    };

    if (documentObject.RedditData) {
      createDoc.data.RedditData = {
        create: {
          ...documentObject.RedditData,
        },
      };
    }

    if (documentObject.PinterestData) {
      createDoc.data.PinterestData = {
        create: {
          ...documentObject.PinterestData,
        },
      };
    }

    const createdDocument = await Document.create(createDoc);

    if (blokObject?.id) {
      const BlokDoc = await BloksDocument.create({
        data: {
          documentId: createdDocument.id,
          blokId: blokObject.id,
        },
      });

      // await Document.update({
      //   where: {
      //     id: createdDocument.id,
      //   },
      //   data: {
      //     BloksDocument: {
      //       connect: {
      //         id: BlokDoc.id,
      //       },
      //     },
      //   },
      // });

      // await Blok.update({
      //   where: {
      //     id: blokObject.id,
      //   },
      //   data: {
      //     BloksDocument: {
      //       connect: {
      //         id: BlokDoc.id,
      //       },
      //     },
      //   },
      // });
    } else {
      await User.update({
        where: {
          id: documentObject.userId,
        },
        data: {
          Document: {
            connect: {
              id: createdDocument.id,
            },
          },
        },
      });
    }

    return createdDocument;
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will read a document(s)
 *
 */
export const read = async (documentObject) => {
  try {
    return await Document.findUnique({
      where: {
        ...documentObject,
      },
      include: {
        User: true,
        Comments: true,
        DocumentMetadata: true,
        RedditData: true,
        PinterestData: true,
        TagsDocument: true,
        BloksDocument: true,
      },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will update a document
 *
 * @param {import("../../../types/schema/document.schema").documentDocument} documentObject
 */
export const update = async (documentObject) => {
  try {
    const docToBeUpdated = await Document.findUnique({
      where: {
        ...documentObject,
      },
      include: {
        DocumentMetadata: true,
        RedditData: true,
        PinterestData: true,
      },
    });

    const updatedDocument = {
      heading: documentObject?.heading || docToBeUpdated?.heading || "",
      body: documentObject?.heading || docToBeUpdated?.heading || "",
      Status: documentObject?.Status || docToBeUpdated?.Status,
      DocumentMetadata: {
        update: {
          documentType:
            documentObject?.DocumentMetadata?.documentType ||
            docToBeUpdated.DocumentMetadata.documentType,
          bodyImageUrl:
            documentObject?.DocumentMetadata?.bodyImageUrl ||
            docToBeUpdated?.DocumentMetadata?.bodyImageUrl ||
            "",
          sourceUrl:
            documentObject?.DocumentMetadata?.sourceUrl ||
            docToBeUpdated?.DocumentMetadata?.sourceUrl ||
            "",
        },
      },
    };

    if (documentObject.RedditData) {
      updatedDocument.RedditData = {
        update: {
          ...documentObject.RedditData,
        },
      };
    }

    if (documentObject.PinterestData) {
      updatedDocument.PinterestData = {
        update: {
          ...documentObject.PinterestData,
        },
      };
    }

    return await Document.update({
      where: {
        id: docToBeUpdated.id,
      },
      data: updatedDocument,
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will delete a document
 *
 * @param {import("../../../types/schema/document.schema").documentDocument} documentObject
 */
export const del = async (documentObject) => {
  try {
    const docToBeDeleted = await Document.findUnique({
      where: {
        ...documentObject,
      },
      include: {
        User: true,
        Comments: true,
        DocumentMetadata: true,
        RedditData: true,
        PinterestData: true,
        TagsDocument: true,
        BloksDocument: true,
      },
    });

    await Promise.all([
      Comments.deleteMany({
        where: {
          documentId: docToBeDeleted.id,
        },
      }),
      DocumentMetadata.delete({
        where: {
          id: docToBeDeleted.DocumentMetadata.id,
        },
      }),
      docToBeDeleted.RedditData
        ? RedditData.delete({
            where: {
              id: docToBeDeleted.RedditData.id,
            },
          })
        : Promise.resolve(),
      docToBeDeleted.PinterestData
        ? PinterestData.delete({
            where: {
              id: docToBeDeleted.PinterestData.id,
            },
          })
        : Promise.resolve(),
      TagsDocument.deleteMany({
        where: {
          documentId: docToBeDeleted.id,
        },
      }),
      BloksDocument.deleteMany({
        where: {
          documentId: docToBeDeleted.id,
        },
      }),
    ]);

    return await Document.delete({
      where: {
        ...documentObject,
      },
    });
  } catch (error) {
    throw error;
  }
};
