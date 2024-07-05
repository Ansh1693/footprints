import {
  Blok,
  BlokFollowers,
  BloksDocument,
} from "../../utils/initializers/prisma.initializer.js";

/**
 * A function that will return a user specific blok
 *
 */
export const readBlok = async (blokId, userId = undefined) => {
  try {
    const foundBlok = await Blok.findUnique({
      where: {
        id: blokId,
      },
      include: {
        BlokMetadata: true,
        User: {
          include: {
            UserMetadata: true,
          },
        },
        BloksDocument: {
          include: {
            Document: {
              include: {
                DocumentMetadata: true,
                Comments: true,
                RedditData: true,
                PinterestData: true,
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

    if (foundBlok.public === false) {
      if (userId !== foundBlok.userId) {
        throw new Error("Blok is not public.");
      }
    }

    return foundBlok;
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will return the public bloks of a particular user
 *
 */
export const readBloks = async (profileId) => {
  try {
    return await Blok.findMany({
      where: {
        profileId: profileId,
        public: true,
      },
      include: {
        BlokMetadata: true,
        BlokFollowers: true,
      },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will make a user follow a specific blok
 *
 */
export const followBlok = async (userId, blokObject) => {
  try {
    await BlokFollowers.create({
      data: {
        blokId: blokObject.id,
        userId,
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
 * A function that will make a user unfollow a specific blok
 *
 */
export const unfollowBlok = async (userId, blokObject) => {
  try {
    await BlokFollowers.deleteMany({
      where: {
        blokId: blokObject.id,
        userId: userId,
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
 * A function that add bookmark to blok
 *
 */

export const addDocument = async (blokObject, documentId) => {
  try {
    await BloksDocument.create({
      data: {
        documentId,
        blokId: blokObject.id,
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
 * A function that remove bookmark from blok
 *
 */

export const removeDocument = async (blokObject, documentId) => {
  try {
    await BloksDocument.deleteMany({
      where: {
        documentId,
        blokId: blokObject.id,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    throw error;
  }
};
