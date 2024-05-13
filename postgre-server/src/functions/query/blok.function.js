import prisma from "../../utils/initializers/prisma.initializer.js";

/**
 * A function that will return a user specific blok
 *
 * @param {string} blok_id
 * @param {string} profile_id
 */
export const readBlok = async (blok_id, profile_id = undefined) => {
  try {
    // Fetch blok with specified ID and populate related data
    const foundBlok = await prisma.blok.findUnique({
      where: { id: blok_id },
      include: {
        user: { include: { userMetadata: true } },
        documents: { include: { documentMetadata: true } },
        blokMetadata: true,
      },
    });

    // Check blok status and ownership
    if (foundBlok.status === "Public" || foundBlok.profileId === profile_id) {
      return foundBlok;
    } else {
      throw new Error("Blok is not public");
    }
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will return the public bloks of a particular user
 *
 * @param {string} profile_id
 */
export const readBloks = async (profile_id) => {
  try {
    // Fetch public bloks of a user
    return await prisma.blok.findMany({
      where: {
        AND: [{ profileId: profile_id }, { status: "Public" }],
      },
      select: {
        id: true,
        blokName: true,
        description: true,
        status: true,
        user: { include: { userMetadata: true } },
        blokMetadata: true,
      },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will make a user follow a specific blok
 *
 * @param {string} user_id
 * @param {import('../../../types/schema/blok.schema.js').blokDocument} blokObject
 */
export const followBlok = async (user_id, blokObject) => {
  try {
    const foundBlok = await prisma.blok.findUnique({
      where: { id: blokObject.id },
      select: { status: true },
    });

    if (!foundBlok.status.public) {
      throw new Error("Blok is not public.");
    }

    // Update blok to add user as follower
    await prisma.blok.update({
      where: { id: blokObject.id },
      data: { followers: { connect: { id: user_id } } },
    });

    // Update user to add blok as following
    await prisma.user.update({
      where: { id: user_id },
      data: { following: { connect: { id: blokObject.id } } },
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
 * @param {string} user_id
 * @param {import('../../../types/schema/blok.schema.js').blokDocument} blokObject
 */
export const unfollowBlok = async (user_id, blokObject) => {
  try {
    // Update blok to disconnect follower
    await prisma.blok.update({
      where: { id: blokObject.id },
      data: { followers: { disconnect: { id: user_id } } },
    });

    // Update user to disconnect following
    await prisma.user.update({
      where: { id: user_id },
      data: { following: { disconnect: { id: blokObject.id } } },
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
 * @param {import('../../../types/schema/blok.schema.js').blokDocument} blokObject
 * @param {string} document_id
 */
export const addDocument = async (blokObject, document_id) => {
  try {
    // Add document to blok
    await prisma.blok.update({
      where: { id: blokObject.id },
      data: { documents: { connect: { id: document_id }, new: true } },
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
 * @param {import('../../../types/schema/blok.schema.js').blokDocument} blokObject
 * @param {string} document_id
 */
export const removeDocument = async (blokObject, document_id) => {
  try {
    // Remove document from blok
    await prisma.blok.update({
      where: { id: blokObject.id },
      data: { documents: { disconnect: { id: document_id } } },
    });

    return {
      success: true,
    };
  } catch (error) {
    throw error;
  }
};
