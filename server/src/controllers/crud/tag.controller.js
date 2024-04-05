import {
	create as createTag,
	read as readTag,
	update as updateTag,
	del as deleteTag,
} from '../../functions/crud/tag.function.js'
import { checkAccess } from '../../functions/utility/check.function.js'

/**
 * A controller to handle the request to create a new tag
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const create = async (req, res) => {
	try {
		/**
		 * @type {{
		 * 		tagObject: import('../../../types/schema/tag.schema.js').tagDocument
		 * 		documentObject: import('../../../types/schema/document.schema.js').documentDocument
		 * }}
		 */
		const { tagObject, documentObject } = req.body

		const data = await createTag(tagObject, documentObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}

/**
 * A controller to handle the request to read a tag(s)
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const read = async (req, res) => {
	try {
		/**
		 * @type {{tagObject: import('../../../types/schema/tag.schema.js').tagDocument}}
		 */
		const { tagObject } = req.body
		const { profile_id } = req.user

		const data = await readTag(tagObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}

/**
 * A controller to handle the request to update a tag
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const update = async (req, res) => {
	try {
		/**
		 * @type {{tagObject: import('../../../types/schema/tag.schema.js').tagDocument}}
		 */
		const { tagObject } = req.body
		const { profile_id } = req.user

		await checkAccess(profile_id, 'tag', tagObject._id)

		const data = await updateTag(tagObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}

/**
 * A controller to handle the request to delete a tag
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const del = async (req, res) => {
	try {
		/**
		 * @type {{tagObject: import('../../../types/schema/tag.schema.js').tagDocument}}
		 */
		const { tagObject } = req.body
		const { profile_id } = req.user

		await checkAccess(profile_id, 'tag', tagObject._id)

		const data = await deleteTag(tagObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}
