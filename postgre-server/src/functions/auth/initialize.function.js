import google from "../../utils/api/google.js";

import { generateString } from "../utility/generate.function.js";
import { sendOTP } from "../utility/send.function.js";
import { checkEmail } from "../utility/check.function.js";
import Snoowrap from "snoowrap";
import randomstring from "randomstring";

/**
 * A function that takes care of the email login method
 *
 */
export const emailLogin = async (userObject) => {
  try {
    const state = generateString();
    let newUser = true;

    const checkUser = await checkEmail(userObject.email);

    if (checkUser.foundUser) {
      newUser = false;
    }

    const { otp } = await sendOTP(userObject.email);

    return { otp, state, newUser };
  } catch (error) {
    throw error;
  }
};

/**
 * A function that will generate a redirect URL for Google auth
 */
export const googleLogin = () => {
  const state = generateString();

  const url = google.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
    state: state,
  });

  return { state, url };
};

export const redditLogin = () => {
  try {
    const state = randomstring.generate(7);

    const url = Snoowrap.getAuthUrl({
      clientId: process.env.REDDIT_CLIENT_ID,
      redirectUri: `${process.env.REDDIT_HOST}`,
      state: state,
      permanent: true,
      scope: ["identity", "history", "read"],
    });

    return { state, url };
  } catch (error) {
    throw error;
  }
};
