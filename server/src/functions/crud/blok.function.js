import { Blok, User } from '../../utils/initializers/mongoose.initializer.js'

/**
 * A function that will create a new blok
 *
 * @param {import("../../../types/schema/blok.schema").blokDocument} blokObject
 */
export const create = async (blokObject) => {
	try {
		const createdBlok = await Blok.create(blokObject)

		await User.findByIdAndUpdate(createdBlok.user_id, {
			$push: { bloks: createdBlok._id },
		})
			.lean()
			.exec()

		return createdBlok
	} catch (error) {
		throw error
	}
}

/**
 * A function that will read a blok(s)
 *
 * @param {import("../../../types/schema/blok.schema").blokDocument} blokObject
 */
export const read = async (blokObject) => {
	try {
		return await Blok.find(blokObject).populate('documents').exec()
	} catch (error) {
		throw error
	}
}

/**
 * A function that will update a blok
 *
 * @param {import("../../../types/schema/blok.schema").blokDocument} blokObject
 */
export const update = async (blokObject) => {
	try {
		return await Blok.findByIdAndUpdate(blokObject._id, blokObject, {
			new: true,
		}).exec()
	} catch (error) {
		throw error
	}
}

/**
 * A function that will delete a blok
 *
 * @param {import("../../../types/schema/blok.schema").blokDocument} blokObject
 */
export const del = async (blokObject) => {
	try {
		return await Blok.findByIdAndDelete(blokObject._id).exec()
	} catch (error) {
		throw error
	}
}
