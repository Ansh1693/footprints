import { Blok, User } from '../../utils/initializers/mongoose.initializer.js'

/**
 * A function that will return a user specific blok
 *
 * @param {string} blok_id
 * @param {string} profile_id
 */
export const readBlok = async (blok_id, profile_id = undefined) => {
	try {
		const foundBlok = await Blok.findById(blok_id)
			.populate({
				path: 'user_id',
				populate: { path: 'userMetadata' },
			})
			.populate({
				path: 'documents',
				populate: { path: 'documentMetadata' },
			})
			.populate('blokMetadata')
			.lean()
			.exec()

		if (foundBlok.status.public) {
			return foundBlok
		}

		if (!foundBlok.status.public && foundBlok.profile_id !== profile_id) {
			throw new Error('Blok is not public')
		}

		return foundBlok
	} catch (error) {
		throw error
	}
}

/**
 * A function that will return the public bloks of a particular user
 *
 * @param {string} profile_id
 */
export const readBloks = async (profile_id) => {
	try {
		return await Blok.find({
			$and: [{ profile_id: profile_id }, { 'status.public': true }],
		})
			.select(['-documents'])
			.populate({
				path: 'user_id',
				populate: { path: 'userMetadata' },
			})
			.populate('blokMetadata')
			.lean()
			.exec()
	} catch (error) {
		throw error
	}
}

/**
 * A function that will make a user follow a specific blok
 *
 * @param {string} user_id
 * @param {import('../../../types/schema/blok.schema.js').blokDocument} blokObject
 */
export const followBlok = async (user_id, blokObject) => {
	try {
		const foundBlok = await Blok.findById(blokObject._id)
			.select(['status'])
			.lean()
			.exec()

		if (!foundBlok.status.public) {
			throw new Error('Blok is not public.')
		}

		await Promise.allSettled([
			Blok.findByIdAndUpdate(
				blokObject._id,
				{ $push: { followers: user_id } },
				{ new: true }
			).exec(),
			User.findByIdAndUpdate(
				user_id,
				{ $push: { following: blokObject._id } },
				{ new: true }
			).exec(),
		])

		return {
			success: true,
		}
	} catch (error) {
		throw error
	}
}

/**
 * A function that will make a user unfollow a specific blok
 *
 * @param {string} user_id
 * @param {import('../../../types/schema/blok.schema.js').blokDocument} blokObject
 */
export const unfollowBlok = async (user_id, blokObject) => {
	try {
		await Promise.allSettled([
			Blok.findByIdAndUpdate(
				blokObject._id,
				{ $pull: { followers: user_id } },
				{ new: true }
			).exec(),
			User.findByIdAndUpdate(
				user_id,
				{ $pull: { following: blokObject._id } },
				{ new: true }
			).exec(),
		])

		return {
			success: true,
		}
	} catch (error) {
		throw error
	}
}

/**
 * A function that add bookmark to blok
 *
 * @param {import('../../../types/schema/blok.schema.js').blokDocument} blokObject
 * @param {string} document_id
 */

export const addDocument = async (blokObject, document_id) => {
	try {
		await Blok.findByIdAndUpdate(
			blokObject._id,
			{ $push: { documents: document_id } },
			{ new: true }
		).exec()

		return {
			success: true,
		}
	} catch (error) {
		throw error
	}
}

/**
 * A function that remove bookmark from blok
 *
 * @param {import('../../../types/schema/blok.schema.js').blokDocument} blokObject
 * @param {string} document_id
 */

export const removeDocument = async (blokObject, document_id) => {
	try {
		await Blok.findByIdAndUpdate(
			blokObject._id,
			{ $pull: { documents: document_id } },
			{ new: true }
		).exec()

		return {
			success: true,
		}
	} catch (error) {
		throw error
	}
}
