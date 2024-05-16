import { cache } from "../../utils/initializers/cache.initializer.js";

import { redditLogin } from "../../functions/auth/initialize.function.js";

/**
 * A controller to handle the auth initialization requests
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
const initialiseConnect = async (req, res) => {
  try {
    const { queryType } = req.query;
    const { profileId } = req.user;

    if (queryType === "reddit") {
      const { state, url } = redditLogin();

      const saved = { state, profileId };

      cache.set(state, saved, 60 * 4);

      res.status(302).send(url);
    }
  } catch (error) {
    throw error;
  }
};

export default initialiseConnect;
