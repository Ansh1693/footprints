import {
  User,
  Tag,
  Blok,
  Document,
} from "../../utils/initializers/prisma.initializer.js";

/**
 * A function that will check the availability of a username
 *
 */
export const checkUsername = async (username) => {
  try {
    if (
      process.env.BLACKLISTEDUSERNAMES.split(",").some(
        (blacklistedUsername) => blacklistedUsername === username,
      )
    ) {
      return { availabilityStatus: false };
    }

    const foundUsername = await User.findUnique({
      where: { username: username },
      select: { profileId: true, id: true },
    });

    if (!foundUsername) {
      return { availabilityStatus: true };
    } else {
      return {
        availabilityStatus: false,
        user: {
          profileId: foundUsername.profileId,
          id: foundUsername.id,
        },
      };
    }
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {string} email
 */
export const checkEmail = async (email) => {
  try {
    const foundEmail = await User.findUnique({
      where: { email: email },
      select: { email: true, profileId: true, id: true },
    });

    if (foundEmail) {
      return {
        foundUser: true,
        user: {
          profileId: foundEmail.profileId,
          id: foundEmail.id,
        },
      };
    } else {
      return {
        foundUser: false,
      };
    }
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will check access to different models for a particular user
 *
 */
export const checkAccess = async (profileId, modelType, modelId) => {
  try {
    if (modelType === "tag") {
      const tag = await Tag.findUnique({
        where: { id: modelId },
        include: {
          User: {
            select: {
              profileId: true,
              id: true,
              username: true,
            },
          },
        },
      });

      if (profileId !== tag.User.profileId) {
        throw new Error(
          "User doesn't have permissions to make modifications to this tag.",
        );
      }
    } else if (modelType === "blok") {
      const blok = await Blok.findUnique({
        where: { id: modelId },
        include: {
          User: {
            select: {
              profileId: true,
              id: true,
              username: true,
            },
          },
        },
      });

      if (profileId !== blok.profileId) {
        throw new Error(
          "User doesn't have permissions to make modifications to this blok.",
        );
      }
    } else if (modelType === "document") {
      const document = await Document.findUnique({
        where: { id: modelId },
        include: {
          User: {
            select: {
              profileId: true,
              id: true,
              username: true,
            },
          },
        },
      });

      if (profileId !== document.User.profileId) {
        throw new Error(
          "User doesn't have permissions to make modifications to this document.",
        );
      }
    } else if (modelType === "user") {
      const user = await User.findUnique({
        where: { id: modelId },
        select: {
          profileId: true,
          id: true,
          username: true,
        },
      });

      if (profileId !== user.profileId) {
        throw new Error(
          "User doesn't have permissions to make modifications to this user.",
        );
      }
    }
  } catch (error) {
    throw error;
  }
};
