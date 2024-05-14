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
      profileId: uuidv4(),
      UserMetadata: {
        create: {
          ...userObject.UserMetadata,
        },
      },
      UserAuth: {
        create: {},
      },
    };

    if (userObject.UserAuth.google) {
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
            GoogleAuth: userObject.userAuth.google ? true : false,
            RedditAuth: userObject.userAuth.reddit ? true : false,
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
    const userToUpdate = await prisma.user.findUnique({
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

    return await prisma.user.update({
      where: { id: userObject.id },
      data: {
        firstName: updatedUserObject.firstName || userToUpdate.firstName,
        lastName: updatedUserObject.lastName || userToUpdate.lastName,
        UserMetadata: {
          update: {
            ...userToUpdate.UserMetadata,
            ...updatedUserObject.UserMetadata,
          },
        },
        UserAuth: {
          update: {
            GoogleAuth: {
              update: {
                ...(userToUpdate.UserAuth.GoogleAuth || {}),
                ...(updatedUserObject.UserAuth.google || {}),
              },
            },
            RedditAuth: {
              update: {
                ...(userToUpdate.UserAuth.RedditAuth || {}),
                ...(updatedUserObject.UserAuth.reddit || {}),
              },
            },
          },
        },
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
          Document: true,
          Comments: true,
          Tags: true,
          Blok: true,
          BlokFollowers: true,
        },
      },
    });
  } catch (error) {
    throw error;
  }
};
