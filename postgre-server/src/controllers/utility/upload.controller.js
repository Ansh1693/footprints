import {
	uploadAudio,
	uploadImage,
} from '../../functions/utility/upload.function.js'

/**
 * A controller to handle the upload request for a client
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
const upload = async (req, res) => {
	try {
		const { query_type } = req.query
		const { profile_id } = req.user

		if (!profile_id) {
			throw new Error('Unauthorized user.')
		}

		let data

		if (query_type === 'image') {
			data = await uploadImage(await req.file(), profile_id)
		} else if (query_type === 'audio') {
			data = await uploadAudio(await req.file(), profile_id)
		}

		res.code(200).send({ data })
	} catch (error) {
		throw error
	}
}

export default upload
