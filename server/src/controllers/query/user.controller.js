import {
	readProfile,
	readProfileFollowing,
	readProfileBloks,
	readProfileDocuments,
} from '../../functions/query/user.function.js'

/**
 * A controller to handle the generator request for the user
 *
 * @param {import("fastify/types/request").FastifyRequest} req
 * @param {import("fastify/types/reply").FastifyReply} res
 */
export const generator = async (req, res) => {
	try {
		const { query_type } = req.query

		let data

		if (query_type === 'readProfile') {
			if (!req.query.username) {
				throw new Error('Profile ID is not defined.')
			}

			data = await readProfile(req.query.username)
		} else if (query_type === 'readProfileBloks') {
			let profile_id = ''

			profile_id = req.query.profile_id

			data = await readProfileBloks(profile_id, req.user)
		} else if (query_type === 'readProfileDocuments') {
			if (!req.user) {
				throw new Error('User is not authorized.')
			}

			data = await readProfileDocuments(req.user.profile_id)
		} else if (query_type === 'readProfileFollowing') {
			if (!req.user) {
				throw new Error('User is not authorized.')
			}

			data = await readProfileFollowing(req.user.profile_id)
		}

		res.code(200).send({ data })
	} catch (error) {
		throw error
	}
}
