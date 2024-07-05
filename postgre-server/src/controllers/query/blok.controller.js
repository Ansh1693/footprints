import {
  readBloks,
  readBlok,
  followBlok,
  unfollowBlok,
  addDocument,
  removeDocument,
} from "../../functions/query/blok.function.js";

/**
 * A controller to handle the generator request for bloks
 *
 * @param {import("fastify/types/request").FastifyRequest} req
 * @param {import("fastify/types/reply").FastifyReply} res
 */
export const generator = async (req, res) => {
  try {
    const { queryType } = req.query;

    let data;

    if (queryType === "readBloks") {
      if (!req.query.profileId) {
        throw new Error("Profile ID is not defined.");
      }

      data = await readBloks(req.query.profileId);
    } else if (queryType === "readBlok") {
      if (!req.query.blok_id) {
        throw new Error("Blok ID is not defined.");
      }

      if (!req.user) {
        data = await readBlok(req.query.blokId);
      } else {
        data = await readBlok(req.query.blokId, req.user.userId);
      }
    }

    res.code(200).send({ data });
  } catch (error) {
    throw error;
  }
};

/**
 * A controller to handle the mutator requests for a blok
 *
 * @param {import("fastify/types/request").FastifyRequest} req
 * @param {import("fastify/types/reply").FastifyReply} res
 */
export const mutator = async (req, res) => {
  try {
    const { queryType } = req.query;
    const { userId } = req.user;

    let data;

    if (queryType === "followBlok") {
      if (!req.body.blokObject) {
        throw new Error("Blok object missing.");
      }

      if (req.body.blokObject.userId === req.user.userId) {
        throw new Error("You cannot follow your own blok.");
      }

      data = await followBlok(userId, req.body.blokObject);
    } else if (queryType === "unfollowBlok") {
      if (!req.body.blokObject) {
        throw new Error("Blok object missing.");
      }

      if (req.body.blokObject.userId === req.user.userId) {
        throw new Error("You cannot follow your own blok.");
      }

      data = await unfollowBlok(userId, req.body.blokObject);
    } else if (queryType === "addDocument") {
      if (!req.body.blokObject) {
        throw new Error("Blok ID is missing.");
      }

      if (!req.query.documentId) {
        throw new Error("Document ID is missing.");
      }

      if (req.user.userId !== req.body.blokObject.userId) {
        throw new Error("Unauthorized access");
      }

      data = await addDocument(req.body.blokObject, req.query.documentId);
    } else if (queryType === "removeDocument") {
      if (!req.body.blokObject) {
        throw new Error("Blok ID is missing.");
      }

      if (!req.query.documentId) {
        throw new Error("Document ID is missing.");
      }

      if (req.user.userId !== req.body.blokObject.userId) {
        throw new Error("Unauthorized access");
      }

      data = await removeDocument(req.body.blokObject, req.query.documentId);
    }

    res.code(200).send({ data });
  } catch (error) {
    throw error;
  }
};
