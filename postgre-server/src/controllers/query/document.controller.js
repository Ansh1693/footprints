import {
  deleteComment,
  postComment,
  readDocument,
  readDocuments,
} from "../../functions/query/document.function.js";

/**
 * A controller to handle the generator request for the document
 *
 * @param {import("fastify/types/request").FastifyRequest} req
 * @param {import("fastify/types/reply").FastifyReply} res
 */
export const generator = async (req, res) => {
  try {
    const { queryType } = req.query;

    let data;

    if (queryType === "readDocument") {
      if (!req.query.documentId) {
        throw new Error("Document ID is not defined.");
      }

      if (!req.user) {
        data = await readDocument(req.query.documentId);
      } else {
        data = await readDocument(req.query.documentId, req.user.userId);
      }
    } else if (queryType === "readDocuments") {
      if (!req.query.profileId) {
        throw new Error("Profile ID is not defined.");
      }

      data = await readDocuments(req.query.profileId);
    }

    res.code(200).send({ data });
  } catch (error) {
    throw error;
  }
};

/**
 * A controller to handle the mutator request for the document
 *
 * @param {import("fastify/types/request").FastifyRequest} req
 * @param {import("fastify/types/reply").FastifyReply} res
 */
export const mutator = async (req, res) => {
  try {
    const { query_type } = req.query;

    let data;

    if (query_type === "postComment") {
      if (!req.body.documentObject && !req.body.commentObject) {
        throw new Error("Document & Comment object missing.");
      }

      data = await postComment(req.body.documentObject, req.body.commentObject);
    } else if (query_type === "deleteComment") {
      if (!req.body.documentObject && !req.body.commentObject) {
        throw new Error("Document & Comment object missing.");
      }

      data = await deleteComment(
        req.body.documentObject,
        req.body.commentObject
      );
    }

    res.code(200).send({ data });
  } catch (error) {
    throw error;
  }
};
