import {
	create as createBlok,
	del as deleteBlok,
	read as readBlok,
	update as updateBlok,
} from '../../functions/crud/blok.function.js'
import { checkAccess } from '../../functions/utility/check.function.js'

/**
 * A controller to handle the request to create a new blok
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const create = async (req, res) => {
	try {
		/**
		 * @type {{blokObject: import('../../../types/schema/blok.schema.js').blokDocument}}
		 */
		const { blokObject } = req.body

		const data = await createBlok(blokObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}

/**
 * A controller to handle the request to read a blok(s)
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const read = async (req, res) => {
	try {
		/**
		 * @type {{blokObject: import('../../../types/schema/blok.schema.js').blokDocument}}
		 */
		const { profile_id } = req.user
		const { blok_id } = req.query

		let blokObject = {}

		if (blok_id) {
			blokObject._id = blok_id
		} else {
			blokObject.profile_id = profile_id
		}

		const data = await readBlok(blokObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}

/**
 * A controller to handle the request to update a blok
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const update = async (req, res) => {
	try {
		/**
		 * @type {{blokObject: import('../../../types/schema/blok.schema.js').blokDocument}}
		 */
		const { blokObject } = req.body
		const { profile_id } = req.user

		await checkAccess(profile_id, 'blok', blokObject._id)

		const data = await updateBlok(blokObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}

/**
 * A controller to handle the request to delete a blok
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const del = async (req, res) => {
	try {
		/**
		 * @type {{blokObject: import('../../../types/schema/blok.schema.js').blokDocument}}
		 */
		const { blok_id } = req.query
		const { profile_id } = req.user

		const blokObject = {
			_id: blok_id,
		}

		await checkAccess(profile_id, 'blok', blokObject._id)

		const data = await deleteBlok(blokObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}
