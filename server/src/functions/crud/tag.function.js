import {
	Document,
	Tag,
	User,
} from '../../utils/initializers/mongoose.initializer.js'

/**
 * A function that will create a new tag
 *
 * @param {import("../../../types/schema/tag.schema").tagDocument} tagObject
 * @param {import('../../../types/schema/document.schema.js').documentDocument} documentObject
 */
export const create = async (tagObject, documentObject) => {
	try {
		const createdTag = await Tag.create(tagObject)

		await Promise.allSettled([
			User.findByIdAndUpdate(tagObject._id, {
				$push: { tags: createdTag._id },
			})
				.lean()
				.exec(),
			Document.findByIdAndUpdate(documentObject._id, {
				$push: { tags: createdTag._id },
			})
				.lean()
				.exec(),
		])

		return createdTag
	} catch (error) {
		throw error
	}
}

/**
 * A function that will read a tag(s)
 *
 * @param {import("../../../types/schema/tag.schema").tagDocument} tagObject
 */
export const read = async (tagObject) => {
	try {
		return await Tag.find(tagObject).exec()
	} catch (error) {
		throw error
	}
}

/**
 * A function that will update a tag
 *
 * @param {import("../../../types/schema/tag.schema").tagDocument} tagObject
 */
export const update = async (tagObject) => {
	try {
		return await Tag.findByIdAndUpdate(tagObject._id, tagObject, {
			new: true,
		}).exec()
	} catch (error) {
		throw error
	}
}

/**
 * A function that will delete a tag
 *
 * @param {import("../../../types/schema/tag.schema").tagDocument} tagObject
 */
export const del = async (tagObject) => {
	try {
		return await Tag.findByIdAndDelete(tagObject._id).exec()
	} catch (error) {
		throw error
	}
}
