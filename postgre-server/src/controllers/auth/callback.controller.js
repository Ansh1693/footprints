import { cache } from "../../utils/initializers/cache.initializer.js";

import {
  emailCallback,
  googleCallback,
} from "../../functions/auth/callback.function.js";

/**
 * A controller to handle the auth callback requests
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
const callbackAuth = async (req, res) => {
  try {
    const { platform } = req.params;
    const { state, code } = req.query;

    const auth_params = cache.get(state);

    if (!auth_params) {
      throw new Error("Authorization token expired, please try again.");
    }

    if (platform === "email") {
      if (!req.body.userObject) {
        throw new Error("User object missing.");
      }

      const { profile_id, user_id } = await emailCallback(
        state,
        req.body.userObject,
      );

      const session_token = await res.jwtSign({ profile_id, user_id });

      res.status(200).send({ data: { session_token } });
    } else if (platform === "google") {
      const { profile_id, user_id } = await googleCallback(
        state,
        code,
        auth_params,
      );

      const session_token = await res.jwtSign({ profile_id, user_id });

      res
        .status(302)
        .redirect(
          `${process.env.CLIENT}/auth/callback?session_token=${session_token}`,
        );
    }
  } catch (error) {
    throw error;
  }
};

export default callbackAuth;
