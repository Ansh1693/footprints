import {
	Blok,
	Document,
	User,
} from '../../utils/initializers/mongoose.initializer.js'

/**
 * A function that will create a new document
 *
 * @param {import("../../../types/schema/document.schema").documentDocument} documentObject
 * @param {import('../../../types/schema/blok.schema.js').blokDocument} blokObject
 */
export const create = async (documentObject, blokObject = undefined) => {
	try {
		const createdDocument = await Document.create(documentObject)

		if (blokObject?._id) {
			await Blok.findByIdAndUpdate(blokObject._id, {
				$push: { documents: createdDocument._id },
			})
				.lean()
				.exec()
		} else {
			await User.findByIdAndUpdate(createdDocument.user_id, {
				$push: { documents: createdDocument._id },
			})
				.lean()
				.exec()
		}

		return createdDocument
	} catch (error) {
		throw error
	}
}

/**
 * A function that will read a document(s)
 *
 * @param {import(".. /../../types/schema/document.schema").documentDocument} documentObject
 */
export const read = async (documentObject) => {
	try {
		return await Document.find(documentObject).exec()
	} catch (error) {
		throw error
	}
}

/**
 * A function that will update a document
 *
 * @param {import("../../../types/schema/document.schema").documentDocument} documentObject
 */
export const update = async (documentObject) => {
	try {
		return await Document.findByIdAndUpdate(
			documentObject._id,
			documentObject,
			{ new: true, runValidators: true }
		).exec()
	} catch (error) {
		throw error
	}
}

/**
 * A function that will delete a document
 *
 * @param {import("../../../types/schema/document.schema").documentDocument} documentObject
 */
export const del = async (documentObject) => {
	try {
		return await Document.findByIdAndDelete(documentObject._id).exec()
	} catch (error) {
		throw error
	}
}
