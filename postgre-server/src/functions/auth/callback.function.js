// import { google as googleAPI } from "googleapis";

// import { generateUsername } from "../utility/generate.function.js";
// import { checkEmail } from "../utility/check.function.js";
// import { create, read, update } from "../crud/user.function.js";
// import prisma from "../../utils/initializers/prisma.initializer.js";

// import google from "../../utils/api/google.js";
// import Snoowrap from "snoowrap";
// import redditAuth from "../../utils/api/reddit.js";

// /**
//  * A function that handles the callback request for Google
//  *
//  * @param {string} state
//  * @param {string} code
//  * @param {object} authParams
//  */
// export const googleCallback = async (state, code, { state: sessionState }) => {
//   try {
//     if (!state || !sessionState || !code) {
//       throw new Error("You denied the app or your session expired.");
//     }

//     if (state !== sessionState) {
//       throw new Error("Stored tokens didn't match.");
//     }

//     const { tokens } = await google.getToken(code);

//     google.setCredentials(tokens);

//     const { data } = await googleAPI
//       .people({
//         version: "v1",
//         auth: google,
//       })
//       .people.get({
//         resourceName: "people/me",
//         personFields: "names,emailAddresses,photos",
//       });

//     const google_id = data.resourceName.match("[0-9]+$")[0];

//     /**
//      * @type {import('../../../types/schema/user.schema.js').userDocument}
//      */
//     let user = {
//       name: data.names[0].displayName,
//       email: data.emailAddresses[0].value,
//       username: generateUsername(data.emailAddresses[0].value),
//       auth: {
//         google: {
//           googleId: google_id,

//           accessToken: tokens.access_token,
//           refreshToken: tokens.refresh_token,
//         },
//       },
//       userMetadata: {
//         profileImage: data.photos[0].url,
//       },
//     };

//     const checkUser = await checkEmail(data.emailAddresses[0].value);

//     if (checkUser.foundUser) {
//       const oldUser = await read({
//         profile_id: checkUser.user.profile_id,
//       });
//       user = {
//         ...user,
//         _id: checkUser.user._id,
//         auth: {
//           ...user.auth,
//           ...oldUser[0]?.auth?._doc,
//         },
//       };

//       console.log(user);
//       console.log(oldUser);

//       await update(user);

//       return {
//         profile_id: checkUser.user.profile_id,
//         user_id: checkUser.user._id,
//       };
//     }

//     const newUser = await create(user);

//     return { profile_id: newUser.profile_id, user_id: newUser._id };
//   } catch (error) {
//     throw error;
//   }
// };

// /**
//  * A function that handles the callback request for Email
//  *
//  * @param {string} state
//  * @param {import('../../../types/schema/user.schema.js').userDocument} userObject
//  */
// export const emailCallback = async (state, userObject) => {
//   try {
//     if (!state) {
//       throw new Error("You denied the app or your session expired.");
//     }

//     const checkUser = await checkEmail(userObject.email);

//     if (checkUser.foundUser) {
//       return {
//         profile_id: checkUser.user.profile_id,
//         user_id: checkUser.user._id,
//       };
//     }

//     /**
//      * @type {import('../../../types/schema/user.schema.js').userDocument}
//      */
//     const user = {
//       name: userObject.name,
//       email: userObject.email,
//       username: userObject.username || generateUsername(userObject.email),
//     };

//     const newUser = await create(user);

//     return { profile_id: newUser.profile_id, user_id: newUser._id };
//   } catch (error) {
//     throw error;
//   }
// };

// export const redditCallback = async (profile_id, sessionState, state, code) => {
//   try {
//     if (!state || !sessionState || !code)
//       throw new Error("You denied the app or your session expired!");

//     if (state !== sessionState) throw new Error("Stored tokens didn't match!");

//     console.log(profile_id, "gg");

//     const client = await Snoowrap.fromAuthCode({
//       code: code,
//       userAgent: "Reddit client for Slipbox",
//       clientId: process.env.REDDIT_CLIENT_ID,
//       clientSecret: process.env.REDDIT_CLIENT_SECRET,
//       redirectUri: `${process.env.REDDIT_HOST}`,
//     });

//     const redditUserClient = redditAuth(client.refreshToken);

//     const data = JSON.parse(JSON.stringify(await redditUserClient.getMe()));

//     //   console.log(data , "151");

//     const checkedUser = await read({
//       profile_id,
//     });

//     let user = {
//       profile_id: profile_id,
//       _id: checkedUser[0]._id,
//       auth: {
//         ...checkedUser[0]?.auth?._doc,
//         reddit: {
//           reddit_id: data.id,
//           reddit_username: data.name,
//           tokens: {
//             access_token: client.accessToken,
//             refresh_token: client.refreshToken,
//           },
//         },
//       },
//     };

//     if (checkedUser) {
//       await update(user);
//     }

//     return user;
//   } catch (error) {
//     throw error;
//   }
// };
import { generateUsername } from "../utility/generate.function.js";
import { checkEmail } from "../utility/check.function.js";
import prisma from "../../utils/initializers/prisma.initializer.js";
import { google as googleAPI } from "googleapis";
import google from "../../utils/api/google.js";
import Snoowrap from "snoowrap";
import redditAuth from "../../utils/api/reddit.js";

// Function to handle Google callback
export const googleCallback = async (state, code, { state: sessionState }) => {
  try {
    // Check if necessary parameters are provided
    if (!state || !sessionState || !code) {
      throw new Error("You denied the app or your session expired.");
    }

    // Verify stored state matches incoming state
    if (state !== sessionState) {
      throw new Error("Stored tokens didn't match.");
    }

    // Retrieve tokens from Google
    const { tokens } = await google.getToken(code);
    google.setCredentials(tokens);

    // Fetch user data from Google API
    const { data } = await googleAPI
      .people({
        version: "v1",
        auth: google,
      })
      .people.get({
        resourceName: "people/me",
        personFields: "names,emailAddresses,photos",
      });

    // Extract Google ID from resource name
    const google_id = data.resourceName.match("[0-9]+$")[0];

    // Prepare user object
    let user = {
      name: data.names[0].displayName,
      email: data.emailAddresses[0].value,
      username: generateUsername(data.emailAddresses[0].value),
      auth: {
        create: {
          google: {
            create: {
              googleId: google_id,
              accessToken: tokens.access_token,
              refreshToken: tokens.refresh_token,
            },
          },
        },
      },
      userMetadata: {
        create: {
          profileImage: data.photos[0].url,
        },
      },
    };

    // Check if user exists by email
    const checkUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    // If user exists, update user data
    if (checkUser) {
      user = {
        ...user,
        auth: {
          update: {
            google: {
              update: {
                accessToken: tokens.access_token,
                refreshToken: tokens.refresh_token,
              },
            },
          },
        },
      };

      await prisma.user.update({
        where: { id: checkUser.id },
        data: user,
      });

      return {
        profile_id: checkUser.profileId,
        user_id: checkUser.id,
      };
    }

    // If user doesn't exist, create new user
    const newUser = await prisma.user.create({
      data: user,
    });

    return { profile_id: newUser.profileId, user_id: newUser.id };
  } catch (error) {
    throw error;
  }
};

// Function to handle Reddit callback
export const redditCallback = async (profile_id, sessionState, state, code) => {
  try {
    // Check if necessary parameters are provided
    if (!state || !sessionState || !code)
      throw new Error("You denied the app or your session expired!");

    // Verify stored state matches incoming state
    if (state !== sessionState) throw new Error("Stored tokens didn't match!");

    // Initialize Snoowrap client using Reddit authentication code
    const client = await Snoowrap.fromAuthCode({
      code: code,
      userAgent: "Reddit client for Slipbox",
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      redirectUri: `${process.env.REDDIT_HOST}`,
    });

    // Get authenticated Reddit user client
    const redditUserClient = redditAuth(client.refreshToken);

    // Retrieve Reddit user data
    const data = JSON.parse(JSON.stringify(await redditUserClient.getMe()));

    // Check if user exists by profile ID
    const checkedUser = await prisma.user.findUnique({
      where: { profileId },
    });

    // Prepare user object with updated Reddit authentication details
    let user = {
      profileId,
      _id: checkedUser.id,
      auth: {
        update: {
          reddit: {
            create: {
              redditId: data.id,
              redditUsername: data.name,
              accessToken: client.accessToken,
              refreshToken: client.refreshToken,
            },
          },
        },
      },
    };

    // If user exists, update user data
    if (checkedUser) {
      await prisma.user.update({
        where: { id: checkedUser.id },
        data: user,
      });
    }

    return user;
  } catch (error) {
    throw error;
  }
};
