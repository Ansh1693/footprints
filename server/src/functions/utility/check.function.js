import {
	Blok,
	Document,
	Tag,
	User,
} from '../../utils/initializers/mongoose.initializer.js'

/**
 * A function that will check the availability of a username
 *
 * @param {string} username
 */
export const checkUsername = async (username) => {
	try {
		if (
			process.env.BLACKLISTEDUSERNAMES.split(',').some(
				(blacklistedUsername) => blacklistedUsername === username
			)
		) {
			return { availabilityStatus: false }
		}

		const foundUsername = await User.findOne({ username: username })
			.select(['username', 'profile_id', '_id'])
			.lean()
			.exec()

		if (!foundUsername) {
			return { availabilityStatus: true }
		} else {
			return {
				availabilityStatus: false,
				user: {
					profile_id: foundUsername.profile_id,
					_id: foundUsername._id,
				},
			}
		}
	} catch (error) {
		throw error
	}
}

/**
 * A function to check if the email is registered
 *
 * @param {string} email
 */
export const checkEmail = async (email) => {
	try {
		const foundEmail = await User.findOne({ email: email })
			.select(['email', 'profile_id', '_id'])
			.lean()
			.exec()

		if (foundEmail) {
			return {
				foundUser: true,
				user: {
					profile_id: foundEmail.profile_id,
					_id: foundEmail._id,
				},
			}
		} else {
			return {
				foundUser: false,
			}
		}
	} catch (error) {
		throw error
	}
}

/**
 * A function that will check access to different models for a particular user
 *
 * @param {string} profile_id
 * @param {string} modelType
 * @param {string} model_id
 */
export const checkAccess = async (profile_id, modelType, model_id) => {
	try {
		if (modelType === 'tag') {
			const tag = await Tag.findById(model_id)
				.select('profile_id')
				.lean()
				.exec()

			if (profile_id !== tag.profile_id) {
				throw new Error(
					"User doesn't have permissions to make modifications to this tag."
				)
			}
		} else if (modelType === 'blok') {
			const blok = await Blok.findById(model_id)
				.select('profile_id')
				.lean()
				.exec()

			if (profile_id !== blok.profile_id) {
				throw new Error(
					"User doesn't have permissions to make modifications to this blok."
				)
			}
		} else if (modelType === 'document') {
			const document = await Document.findById(model_id)
				.select('profile_id')
				.lean()
				.exec()

			if (profile_id !== document.profile_id) {
				throw new Error(
					"User doesn't have permissions to make modifications to this document."
				)
			}
		} else if (modelType === 'user') {
			const user = await User.findById(model_id)
				.select('profile_id')
				.lean()
				.exec()

			if (profile_id !== user.profile_id) {
				throw new Error(
					"User doesn't have permissions to make modifications to this user."
				)
			}
		}
	} catch (error) {
		throw error
	}
}
