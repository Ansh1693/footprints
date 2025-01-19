import { User } from "../../utils/initializers/prisma.initializer.js";

import { v4 as uuidv4 } from "uuid";
/**
 * A function that will create a new user
 *
 *
 */
export const create = async (userObject) => {
  try {
    const newUser = {
      ...userObject,
      UserMetadata: {
        create: {
          ...userObject.UserMetadata,
        },
      },
      UserAuth: {
        create: {},
      },
    };

    if (userObject?.UserAuth?.google) {
      newUser.UserAuth.create.GoogleAuth = {
        create: {
          ...userObject.UserAuth.google,
        },
      };
    }

    return await User.create({
      data: newUser,
      include: {
        UserMetadata: true,
        UserAuth: {
          include: {
            GoogleAuth: userObject?.userAuth?.google ? true : false,
            RedditAuth: userObject?.userAuth?.reddit ? true : false,
          },
        },
      },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will read a user(s)
 *
 *
 */
export const read = async (userObject) => {
  try {
    return await User.findUnique({
      where: {
        ...userObject,
      },
      include: {
        UserMetadata: true,
        UserAuth: {
          include: {
            GoogleAuth: true,
            RedditAuth: true,
          },
        },
        Document: true,
        Blok: true,
        Comments: true,
        Tags: true,
        BlokFollowers: true,
      },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will update a user
 *
 *
 */
export const update = async (userObject) => {
  try {
    const userToUpdate = await User.findUnique({
      where: { id: userObject.id },
      include: {
        UserMetadata: true,
        UserAuth: {
          include: {
            GoogleAuth: true,
            RedditAuth: true,
          },
        },
      },
    });

    if (!userToUpdate) {
      throw new Error(`User with ID ${userObject.id} not found`);
    }

    const updatedUser = {
      name: userObject?.name,

      UserMetadata: {
        update: {
          ...userObject?.UserMetadata,
        },
      },
    };

    if (userObject?.description) {
      updatedUser.description = userObject.description;
    }

    if (userObject?.username) {
      updatedUser.username = userObject.username;
    }

    if (userObject?.UserAuth?.google) {
      updatedUser.UserAuth = {
        update: {
          GoogleAuth: {},
        },
      };

      updatedUser.UserAuth.update.GoogleAuth = {
        upsert: {
          create: {
            ...userObject.UserAuth.google,
          },
          update: {
            ...userObject.UserAuth.google,
          },
        },
      };
    }

    if (userObject?.UserAuth?.reddit) {
      updatedUser.UserAuth = {
        update: {
          RedditAuth: {},
        },
      };

      updatedUser.UserAuth.update.RedditAuth = {
        upsert: {
          create: {
            ...userObject.UserAuth.reddit,
          },
          update: {
            ...userObject.UserAuth.reddit,
          },
        },
      };
    }
    return await User.update({
      where: { id: userObject.id },
      data: {
        ...updatedUser,
      },
      include: {
        UserMetadata: true,
        UserAuth: {
          include: {
            GoogleAuth: true,
            RedditAuth: true,
          },
        },
      },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will delete a user
 *
 *
 */
export const del = async (userObject) => {
  try {
    return await User.delete({
      where: {
        ...userObject,
      },
      include: {
        UserMetadata: true,
        UserAuth: {
          include: {
            GoogleAuth: true,
            RedditAuth: true,
          },
          // Document: true,
          // Comments: true,
          // Tags: true,
          // Blok: true,
          // BlokFollowers: true,
        },
      },
    });
  } catch (error) {
    throw error;
  }
};
