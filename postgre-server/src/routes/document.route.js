import {
  create,
  del,
  read,
  update,
} from "../controllers/crud/document.controller.js";

import { importDocument } from "../controllers/imports/document.controller.js";

/**
 * A route handler for document requests
 *
 * @param {import("fastify").FastifyInstance} fastify
 * @param {import("fastify").FastifyPluginOptions} _options
 * @param {import("fastify").DoneFuncWithErrOrRes} done
 */
const document = (fastify, _options, done) => {
  fastify.post(
    "/create",
    {
      onRequest: [fastify.userAuth],
    },
    create,
  );
  fastify.get(
    "/read",
    {
      onRequest: [fastify.userAuth],
    },
    read,
  );
  fastify.patch(
    "/update",
    {
      onRequest: [fastify.userAuth],
    },
    update,
  );
  fastify.delete(
    "/delete",
    {
      onRequest: [fastify.userAuth],
    },
    del,
  );
  fastify.get(
    "/import/:platform",
    {
      onRequest: [fastify.userAuth],
    },
    importDocument,
  );

  done();
};

export default document;
