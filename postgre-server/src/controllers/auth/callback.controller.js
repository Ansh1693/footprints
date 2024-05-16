import { cache } from "../../utils/initializers/cache.initializer.js";

import {
  emailCallback,
  googleCallback,
} from "../../functions/auth/callback.function.js";

/**
 * A controller to handle the auth callback requests
 *
 */

const callbackAuth = async (req, res) => {
  try {
    const { platform } = req.params;
    const { state, code } = req.query;

    const authParams = cache.get(state);

    if (!authParams) {
      throw new Error("Authorization token expired, please try again.");
    }

    if (platform === "email") {
      if (!req.body.userObject) {
        throw new Error("User object missing.");
      }

      const { profileId, userId } = await emailCallback(
        state,
        req.body.userObject,
      );

      const session_token = await res.jwtSign({ profileId, userId });

      res.status(200).send({ data: { session_token } });
    } else if (platform === "google") {
      const { profileId, userId } = await googleCallback(
        state,
        code,
        authParams,
      );

      const sessionToken = await res.jwtSign({ profileId, userId });

      res
        .status(302)
        .redirect(
          `${process.env.CLIENT}/auth/callback?session_token=${sessionToken}`,
        );
    }
  } catch (error) {
    throw error;
  }
};

export default callbackAuth;
