import {
  Blok,
  BlokFollowers,
  BlokMetadata,
  BloksDocument,
  User,
} from "../../utils/initializers/prisma.initializer.js";
/**
 * A function that will create a new blok
 *
 */
export const create = async (blokObject) => {
  try {
    const createdBlok = await Blok.create({
      data: {
        ...blokObject,
        BlokMetadata: {
          create: {
            ...blokObject.BlokMetadata,
          },
        },

        BloksDocument: {
          create: blokObject.BloksDocument.map((doc) => {
            if (doc?.id) {
              return {
                Document: {
                  connect: {
                    id: doc.id,
                  },
                },
              };
            } else {
              return {
                Document: {
                  create: {
                    ...doc,
                    DocumentMetadata: {
                      create: {
                        ...doc.DocumentMetadata,
                      },
                    },
                  },
                },
              };
            }
          }),
        },
      },
    });

    return createdBlok;
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will read a blok(s)
 *
 */
export const read = async (blokObject) => {
  try {
    if (blokObject?.id) {
      return await Blok.findUnique({
        where: {
          ...blokObject,
        },
        include: {
          BlokMetadata: true,
          BloksDocument: {
            include: {
              Document: {
                include: {
                  DocumentMetadata: true,
                  TagsDocument: {
                    include: {
                      Tag: true,
                    },
                  },
                },
              },
            },
          },
          BlokFollowers: {
            include: {
              User: true,
            },
          },
        },
      });
    } else {
      return await Blok.findMany({
        where: {
          ...blokObject,
        },
        include: {
          BlokMetadata: true,
          BloksDocument: {
            include: {
              Document: {
                include: {
                  DocumentMetadata: true,
                  TagsDocument: {
                    include: {
                      Tag: true,
                    },
                  },
                },
              },
            },
          },
          BlokFollowers: {
            include: {
              User: true,
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
 * A function that will update a blok
 *
 */
export const update = async (blokObject) => {
  try {
    const updatedBlok = {
      ...blokObject,
      BlokMetadata: {
        update: {
          ...blokObject.BlokMetadata,
        },
      },
      BloksDocument: {
        create: blokObject?.BloksDocument?.connect.map((doc) => {
          if (doc?.id) {
            return {
              Document: {
                connect: {
                  id: doc.id,
                },
              },
            };
          } else {
            return {
              Document: {
                create: {
                  ...doc,
                  DocumentMetadata: {
                    create: {
                      ...doc.DocumentMetadata,
                    },
                  },
                },
              },
            };
          }
        }),
        deleteMany: blokObject?.BloksDocument?.disconnect.map((doc) => {
          return { documentId: doc.id, blokId: blokObject.id };
        }),
      },
    };

    return await Blok.update({
      where: {
        id: blokObject.id,
      },
      data: updatedBlok,
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will delete a blok
 *
 */
export const del = async (blokObject) => {
  try {
    await Blok.update({
      where: {
        id: blokObject.id,
      },
      data: {
        BlokFollowers: {
          deleteMany: blokObject?.BlokFollowers?.map((follower) => {
            return {
              blokId: blokObject.id,
              userId: follower.userId,
            };
          }),
        },
        BloksDocument: {
          deleteMany: blokObject?.BloksDocument?.map((doc) => {
            return {
              blokId: blokObject.id,
              documentId: doc.id,
            };
          }),
        },
      },
    });

    return await Blok.delete({
      where: {
        id: blokObject.id,
      },
      include: {
        BlokMetadata: true,
      },
    });
  } catch (error) {
    throw error;
  }
};
