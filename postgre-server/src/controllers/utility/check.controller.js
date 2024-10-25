import {
  checkEmail,
  checkUsername,
} from "../../functions/utility/check.function.js";

/**
 * A controller to handle the check request for a client
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
const check = async (req, res) => {
  try {
    const { queryType } = req.query;

    let data;

    if (queryType === "username") {
      if (!req.body.userObject.username) {
        throw new Error("Username is not defined.");
      }

      data = await checkUsername(req.body.userObject.username);
    } else if (queryType === "email") {
      if (!req.body.userObject.email) {
        throw new Error("Email is not defined.");
      }

      data = await checkEmail(req.body.userObject.email);
    }

    res.code(200).send(data);
  } catch (error) {
    throw error;
  }
};

export default check;
