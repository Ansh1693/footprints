import { google as googleAPI } from "googleapis";

import { generateUsername } from "../utility/generate.function.js";
import { checkEmail } from "../utility/check.function.js";
import { create, read, update } from "../crud/user.function.js";
// import { User } from "../../utils/initializers/prisma.initializer.js";

import google from "../../utils/api/google.js";
import Snoowrap from "snoowrap";
import redditAuth from "../../utils/api/reddit.js";

/**
 * A function that handles the callback request for Google
 *
 */
export const googleCallback = async (state, code, { state: sessionState }) => {
  try {
    if (!state || !sessionState || !code) {
      throw new Error("You denied the app or your session expired.");
    }

    if (state !== sessionState) {
      throw new Error("Stored tokens didn't match.");
    }

    const { tokens } = await google.getToken(code);

    google.setCredentials(tokens);

    const { data } = await googleAPI
      .people({
        version: "v1",
        auth: google,
      })
      .people.get({
        resourceName: "people/me",
        personFields: "names,emailAddresses,photos",
      });

    const googleId = data.resourceName.match("[0-9]+$")[0];

    let user = {
      name: data.names[0].displayName,
      email: data.emailAddresses[0].value,
      username: generateUsername(data.emailAddresses[0].value),
      auth: {
        google: {
          googleId: googleId,
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token,
        },
      },
      userMetadata: {
        profileImage: data.photos[0].url,
      },
    };

    const checkUser = await checkEmail(data.emailAddresses[0].value);

    if (checkUser.foundUser) {
      const oldUser = await read({
        profileId: checkUser.user.profileId,
      });
      user = {
        ...user,
        id: checkUser.user.id,
        // auth: {
        //   ...user.auth,
        //   ...oldUser[0]?.auth?._doc,
        // },
      };

      console.log(user);
      console.log(oldUser);

      await update(user);

      return {
        profileId: checkUser.user.profileId,
        userId: checkUser.user.id,
      };
    }

    const newUser = await create(user);

    return { profileId: newUser.profileId, userId: newUser.id };
  } catch (error) {
    throw error;
  }
};

/**
 * A function that handles the callback request for Email
 *
 */
export const emailCallback = async (state, userObject) => {
  try {
    if (!state) {
      throw new Error("You denied the app or your session expired.");
    }

    const checkUser = await checkEmail(userObject.email);

    if (checkUser.foundUser) {
      return {
        profileId: checkUser.user.profileId,
        userId: checkUser.user.id,
      };
    }

    /**
     */
    const user = {
      name: userObject.name,
      email: userObject.email,
      username: userObject.username || generateUsername(userObject.email),
    };

    const newUser = await create(user);

    return { profileId: newUser.profileId, userId: newUser.id };
  } catch (error) {
    throw error;
  }
};

export const redditCallback = async (profileId, sessionState, state, code) => {
  try {
    if (!state || !sessionState || !code)
      throw new Error("You denied the app or your session expired!");

    if (state !== sessionState) throw new Error("Stored tokens didn't match!");

    console.log(profileId, "gg");

    const client = await Snoowrap.fromAuthCode({
      code: code,
      userAgent: "Reddit client for Slipbox",
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      redirectUri: `${process.env.REDDIT_HOST}`,
    });

    const redditUserClient = redditAuth(client.refreshToken);

    const data = JSON.parse(JSON.stringify(await redditUserClient.getMe()));

    //   console.log(data , "151");

    const checkedUser = await read({
      profileId,
    });

    let user = {
      profileId: profileId,
      id: checkedUser[0]._id,
      auth: {
        ...checkedUser[0]?.auth,
        reddit: {
          redditId: data.id,
          redditUsername: data.name,
          accessToken: client.accessToken,
          refreshToken: client.refreshToken,
        },
      },
    };

    if (checkedUser) {
      await update(user);
    }

    return user;
  } catch (error) {
    throw error;
  }
};
