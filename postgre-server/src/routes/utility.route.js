import check from "../controllers/utility/check.controller.js";
import email from "../controllers/utility/email.controller.js";
import upload from "../controllers/utility/upload.controller.js";

/**
 * A route handler for utility requests
 *
 * @param {import("fastify").FastifyInstance} fastify
 * @param {import("fastify").FastifyPluginOptions} _options
 * @param {import("fastify").DoneFuncWithErrOrRes} done
 */
const utility = (fastify, _options, done) => {
  fastify.post(
    "/check",
    {
      onRequest: [fastify.clientAuth],
    },
    check
  );
  fastify.post(
    "/upload",
    {
      onRequest: [fastify.userAuth],
    },
    upload
  );

  done();
};

export default utility;
