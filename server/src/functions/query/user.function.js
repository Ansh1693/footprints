import { User } from '../../utils/initializers/mongoose.initializer.js'

/**
 * A function that will return a profile
 *
 * @param {string} username
 */
export const readProfile = async (username) => {
	try {
		return await User.findOne({ username })
			.select(['-auth', '-following', '-bloks', '-tags', '-documents'])
			.populate('userMetadata')
			.lean()
			.exec()
	} catch (error) {
		throw error
	}
}

/**
 * A function that will return all the personal documents of a profile
 *
 * @param {string} profile_id
 */
export const readProfileDocuments = async (profile_id) => {
	try {
		return await User.findOne({ profile_id: profile_id })
			.select(['documents'])
			.populate({
				path: 'documents',
				populate: { path: 'documentMetadata' },
			})
			.lean()
			.exec()
	} catch (error) {
		throw error
	}
}

/**
 * A function that will return the bloks followed by a profile
 *
 * @param {string} profile_id
 */
export const readProfileFollowing = async (profile_id) => {
	try {
		return await User.findOne({ profile_id })
			.select(['following'])
			.populate({
				path: 'following',
				populate: {
					path: 'user_id',
					populate: {
						path: 'userMetadata',
					},
				},
			})
			.lean()
			.exec()
	} catch (error) {
		throw error
	}
}

/**
 * A function that will return bloks of a specific profile
 *
 * @param {string} profile_id
 */
export const readProfileBloks = async (profile_id, user) => {
	try {
		let bloks
		if (user && user.profile_id === profile_id) {
			bloks = await User.findOne({ profile_id: profile_id })
				.select(['bloks'])
				.populate({
					path: 'bloks',
					populate: {
						path: 'user_id',
						populate: { path: 'userMetadata' },
					},
					populate: {
						path: 'blokMetadata',
					},
				})
				.lean()
				.exec()
		} else {
			bloks = await User.findOne({ profile_id: profile_id })
				.select(['bloks'])
				.populate({
					path: 'bloks',
					match: { 'status.public': true },
					populate: {
						path: 'user_id',
						populate: { path: 'userMetadata' },
					},
					populate: {
						path: 'blokMetadata',
					},
				})
				.lean()
				.exec()
		}
		return bloks
	} catch (error) {
		throw error
	}
}
