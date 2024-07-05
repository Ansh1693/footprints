import {
  readProfile,
  readProfileFollowing,
  readProfileBloks,
  readProfileDocuments,
} from "../../functions/query/user.function.js";

/**
 * A controller to handle the generator request for the user
 *
 * @param {import("fastify/types/request").FastifyRequest} req
 * @param {import("fastify/types/reply").FastifyReply} res
 */
export const generator = async (req, res) => {
  try {
    const { queryType } = req.query;

    let data;

    if (queryType === "readProfile") {
      if (!req.query.profileId) {
        throw new Error("Profile ID is not defined.");
      }

      data = await readProfile(req.query.profileId);
    } else if (queryType === "readProfileBloks") {
      let profileId = "";

      profileId = req.query.profileId;

      data = await readProfileBloks(profileId, req.user);
    } else if (queryType === "readProfileDocuments") {
      if (!req.user) {
        throw new Error("User is not authorized.");
      }

      data = await readProfileDocuments(req.user.profileId);
    } else if (queryType === "readProfileFollowing") {
      if (!req.user) {
        throw new Error("User is not authorized.");
      }

      data = await readProfileFollowing(req.user.profileId);
    }

    res.code(200).send({ data });
  } catch (error) {
    throw error;
  }
};
