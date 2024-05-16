import { User } from "../../utils/initializers/prisma.initializer.js";
/**
 * A function that will return a profile
 *
 */
export const readProfile = async (username) => {
  try {
    return await User.findUnique({
      where: {
        username,
      },
      include: {
        UserMetadata: true,
      },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will return all the personal documents of a profile
 *
 */
export const readProfileDocuments = async (profileId) => {
  try {
    return await User.findUnique({
      where: {
        profileId,
      },
      include: {
        Documents: {
          include: {
            DocumentMetadata: true,
          },
        },
      },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will return the bloks followed by a profile
 *
 */
export const readProfileFollowing = async (profileId) => {
  try {
    return await User.findUnique({
      where: {
        profileId,
      },
      include: {
        BlokFollowers: {
          Blok: {
            include: {
              BlokMetadata: true,
              User: {
                include: {
                  UserMetadata: true,
                },
              },
            },
          },
        },
      },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will return bloks of a specific profile
 *
 */
export const readProfileBloks = async (profileId, user) => {
  try {
    let bloks;
    if (user && user.profileId === profileId) {
      bloks = await User.findUnique({
        where: {
          profileId,
        },
        include: {
          Bloks: {
            include: {
              BlokMetadata: true,
              User: {
                include: {
                  UserMetadata: true,
                },
              },
            },
          },
        },
      });
    } else {
      // bloks = await User.findOne({ profile_id: profile_id })
      //   .select(["bloks"])
      //   .populate({
      //     path: "bloks",
      //     match: { "status.public": true },
      //     populate: {
      //       path: "user_id",
      //       populate: { path: "userMetadata" },
      //     },
      //     populate: {
      //       path: "blokMetadata",
      //     },
      //   })
      //   .lean()
      //   .exec();

      bloks = await User.findUnique({
        where: {
          profileId,
        },
        include: {
          Bloks: {
            where: {
              public: true,
            },
            include: {
              BlokMetadata: true,
              User: {
                include: {
                  UserMetadata: true,
                },
              },
            },
          },
        },
      });
    }
    return bloks;
  } catch (error) {
    throw error;
  }
};
