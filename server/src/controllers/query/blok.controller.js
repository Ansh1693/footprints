import {
	readBloks,
	readBlok,
	followBlok,
	unfollowBlok,
	addDocument,
	removeDocument,
} from '../../functions/query/blok.function.js'

/**
 * A controller to handle the generator request for bloks
 *
 * @param {import("fastify/types/request").FastifyRequest} req
 * @param {import("fastify/types/reply").FastifyReply} res
 */
export const generator = async (req, res) => {
	try {
		const { query_type } = req.query

		let data

		if (query_type === 'readBloks') {
			if (!req.query.profile_id) {
				throw new Error('Profile ID is not defined.')
			}

			data = await readBloks(req.query.profile_id)
		} else if (query_type === 'readBlok') {
			if (!req.query.blok_id) {
				throw new Error('Blok ID is not defined.')
			}

			if (!req.user) {
				data = await readBlok(req.query.blok_id)
			} else {
				data = await readBlok(req.query.blok_id, req.user.profile_id)
			}
		}

		res.code(200).send({ data })
	} catch (error) {
		throw error
	}
}

/**
 * A controller to handle the mutator requests for a blok
 *
 * @param {import("fastify/types/request").FastifyRequest} req
 * @param {import("fastify/types/reply").FastifyReply} res
 */
export const mutator = async (req, res) => {
	try {
		const { query_type } = req.query
		const { user_id } = req.user

		let data

		if (query_type === 'followBlok') {
			if (!req.body.blokObject) {
				throw new Error('Blok object missing.')
			}

			data = await followBlok(user_id, req.body.blokObject)
		} else if (query_type === 'unfollowBlok') {
			if (!req.body.blokObject) {
				throw new Error('Blok object missing.')
			}

			data = await unfollowBlok(user_id, req.body.blokObject)
		} else if (query_type === 'addDocument') {
			if (!req.body.blokObject) {
				throw new Error('Blok ID is missing.')
			}

			if (!req.query.document_id) {
				throw new Error('Document ID is missing.')
			}

			if (req.user.user_id !== req.body.blokObject.user_id) {
				throw new Error('Unauthorized access')
			}

			data = await addDocument(req.body.blokObject, req.query.document_id)
		} else if (query_type === 'removeDocument') {
			if (!req.body.blokObject) {
				throw new Error('Blok ID is missing.')
			}

			if (!req.query.document_id) {
				throw new Error('Document ID is missing.')
			}

			if (req.user.user_id !== req.body.blokObject.user_id) {
				throw new Error('Unauthorized access')
			}

			data = await removeDocument(
				req.body.blokObject,
				req.query.document_id
			)
		}

		res.code(200).send({ data })
	} catch (error) {
		throw error
	}
}
