import {
	read as readUser,
	update as updateUser,
	del as deleteUser,
} from '../../functions/crud/user.function.js'
import { checkAccess } from '../../functions/utility/check.function.js'

/**
 * A controller to handle the request to read a user(s)
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const read = async (req, res) => {
	try {
		const { profile_id } = req.user
		const { username } = req.query

		const userObject = {}

		if (username) {
			userObject.username = username
		} else {
			userObject.profile_id = profile_id
		}

		const data = await readUser(userObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}

/**
 * A controller to handle the request to update a document
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const update = async (req, res) => {
	try {
		/**
		 * @type {{userObject: import("../../../types/schema/user.schema").userDocument}}
		 */
		const { userObject } = req.body
		const { profile_id } = req.user

		await checkAccess(profile_id, 'user', userObject._id)

		const data = await updateUser(userObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}

/**
 * A controller to handle the request to delete a user
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const del = async (req, res) => {
	try {
		/**
		 * @type {{userObject: import("../../../types/schema/user.schema").userDocument}}
		 */
		const { userObject } = req.body
		const { profile_id } = req.user

		await checkAccess(profile_id, 'user', userObject._id)

		const data = await deleteUser(userObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}
