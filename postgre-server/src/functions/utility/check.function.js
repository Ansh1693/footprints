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
      select: { id: true },
    });

    if (!foundUsername) {
      return { availabilityStatus: true };
    } else {
      return {
        availabilityStatus: false,
        user: {
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
      select: { email: true, id: true },
    });

    if (foundEmail) {
      return {
        foundUser: true,
        user: {
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
export const checkAccess = async (userId, modelType, modelId) => {
  try {
    if (modelType === "tag") {
      const tag = await Tag.findUnique({
        where: { id: modelId },
        include: {
          User: {
            select: {
              id: true,
              username: true,
            },
          },
        },
      });

      if (userId !== tag.User.id) {
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
              id: true,
              username: true,
            },
          },
        },
      });

      if (userId !== blok.userId) {
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
              id: true,
              username: true,
            },
          },
        },
      });

      if (userId !== document.User.userId) {
        throw new Error(
          "User doesn't have permissions to make modifications to this document.",
        );
      }
    } else if (modelType === "user") {
      const user = await User.findUnique({
        where: { id: modelId },
        select: {
          id: true,
          username: true,
        },
      });

      if (userId !== user.id) {
        throw new Error(
          "User doesn't have permissions to make modifications to this user.",
        );
      }
    }
  } catch (error) {
    throw error;
  }
};
