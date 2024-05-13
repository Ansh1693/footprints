import {
	create as createDocument,
	read as readDocument,
	del as deleteDocument,
	update as updateDocument,
} from '../../functions/crud/document.function.js'
import { checkAccess } from '../../functions/utility/check.function.js'

/**
 * A controller to handle the request to create a new document
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const create = async (req, res) => {
	try {
		/**
		 * @type {{
		 * 		documentObject: import('../../../types/schema/document.schema.js').documentDocument,
		 * 		blokObject: import('../../../types/schema/blok.schema.js').blokDocument
		 * }}
		 */
		const { documentObject, blokObject } = req.body

		const data = await createDocument(documentObject, blokObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}

/**
 * A controller to handle the request to read a document(s)
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const read = async (req, res) => {
	try {
		// /**
		//  * @type {{documentObject: import('../../../types/schema/document.schema.js').documentDocument}}
		//  */
		const { profile_id } = req.user
		const { document_id } = req.query

		const documentObject = {}
		if (document_id) {
			documentObject._id = document_id
		} else if (profile_id) {
			documentObject.profile_id = profile_id
		}

		console.log(documentObject)

		const data = await readDocument(documentObject)

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
		 * @type {{documentObject: import('../../../types/schema/document.schema.js').documentDocument}}
		 */
		const { documentObject } = req.body
		const { profile_id } = req.user

		await checkAccess(profile_id, 'document', documentObject._id)

		const data = await updateDocument(documentObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}

/**
 * A controller to handle the request to delete a document
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
export const del = async (req, res) => {
	try {
		/**
		 * @type {{documentObject: import('../../../types/schema/document.schema.js').documentDocument}}
		 */

		const { document_id } = req.query
		const { profile_id } = req.user

		const documentObject = {
			_id: document_id,
		}

		await checkAccess(profile_id, 'document', documentObject._id)

		const data = await deleteDocument(documentObject)

		res.code(200).send(data)
	} catch (error) {
		throw error
	}
}
