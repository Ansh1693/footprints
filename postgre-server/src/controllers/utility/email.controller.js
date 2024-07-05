import { sendOTP } from "../../functions/utility/send.function.js";

/**
 * A controller to handle the email request for a client
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
const email = async (req, res) => {
  try {
    const { query_type } = req.query;

    let data;

    if (!req.body.userObject) {
      throw new Error("User object missing.");
    }

    if (query_type === "otp") {
      data = await sendOTP(req.body.userObject.email);
    }

    res.code(200).send({ data });
  } catch (error) {
    throw error;
  }
};

export default email;
