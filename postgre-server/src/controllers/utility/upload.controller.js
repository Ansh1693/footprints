import {
  uploadAudio,
  uploadImage,
} from "../../functions/utility/upload.function.js";

/**
 * A controller to handle the upload request for a client
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
const upload = async (req, res) => {
  try {
    const { queryType } = req.query;
    const { profileId } = req.user;

    if (!profileId) {
      throw new Error("Unauthorized user.");
    }

    let data;

    if (queryType === "image") {
      data = await uploadImage(await req.file(), profileId);
    } else if (queryType === "audio") {
      data = await uploadAudio(await req.file(), profileId);
    }

    res.code(200).send({ data });
  } catch (error) {
    throw error;
  }
};

export default upload;
