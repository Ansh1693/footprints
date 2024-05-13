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
 * @param {import('../../../types/schema/user.schema.js').userDocument} userObject
 */
export const read = async (userObject) => {
  try {
    return await User.find(userObject).exec();
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will update a user
 *
 * @param {import('../../../types/schema/user.schema.js').userDocument} userObject
 */
export const update = async (userObject) => {
  try {
    return await User.findByIdAndUpdate(userObject._id, userObject, {
      new: true,
    }).exec();
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will delete a user
 *
 * @param {import('../../../types/schema/user.schema.js').userDocument} userObject
 */
export const del = async (userObject) => {
  try {
    return await User.findByIdAndDelete(userObject._id).exec();
  } catch (error) {
    throw error;
  }
};
