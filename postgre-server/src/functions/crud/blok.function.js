import {
  Blok,
  BlokFollowers,
  BlokMetadata,
  BloksDocument,
  User,
} from "../../utils/initializers/prisma.initializer";
/**
 * A function that will create a new blok
 *
 */
export const create = async (blokObject) => {
  try {
    const createdBlok = await Blok.create({
      data: {
        create: {
          ...blokObject,
          BlokMetadata: {
            create: {
              ...blokObject.BlokMetadata,
            },
          },
        },
      },
    });

    for (const Doc of blokObject.Documents) {
      await BloksDocument.create({
        data: {
          documentId: Doc.id,
          blokId: createdBlok.id,
        },
      });
    }

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
    return await Blok.findUnique({
      where: {
        ...blokObject,
      },
      include: {
        BlokMetadata: true,
        BloksDocument: {
          include: {
            Document: true,
          },
        },
        BlokFollowers: {
          include: {
            User: true,
          },
        },
      },
    });
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
      update: {
        ...blokObject,
        BlokMetadata: {
          update: {
            ...blokObject.BlokMetadata,
          },
        },
      },
    };

    return await Blok.update({
      where: {
        ...blokObject,
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
 * @param {import("../../../types/schema/blok.schema").blokDocument} blokObject
 */
export const del = async (blokObject) => {
  try {
    BloksDocument.deleteMany({
      where: {
        blokId: blokObject.id,
      },
    });

    BlokFollowers.deleteMany({
      where: {
        blokId: blokObject.id,
      },
    });

    return await Blok.delete({
      where: {
        ...blokObject,
      },
      include: {
        BlokMetadata: true,
      },
    });
  } catch (error) {
    throw error;
  }
};
