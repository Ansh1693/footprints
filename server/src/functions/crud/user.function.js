import { User } from '../../utils/initializers/mongoose.initializer.js'

/**
 * A function that will create a new user
 *
 * @param {import('../../../types/schema/user.schema.js').userDocument} userObject
 */
export const create = async (userObject) => {
	try {
		return await User.create(userObject)
	} catch (error) {
		throw error
	}
}

/**
 * A function that will read a user(s)
 *
 * @param {import('../../../types/schema/user.schema.js').userDocument} userObject
 */
export const read = async (userObject) => {
	try {
		return await User.find(userObject).exec()
	} catch (error) {
		throw error
	}
}

/**
 * A function that will update a user
 *
 * @param {import('../../../types/schema/user.schema.js').userDocument} userObject
 */
export const update = async (userObject) => {
	try {
		return await User.findByIdAndUpdate(userObject._id, userObject, {
			new: true,
		}).exec()
	} catch (error) {
		throw error
	}
}

/**
 * A function that will delete a user
 *
 * @param {import('../../../types/schema/user.schema.js').userDocument} userObject
 */
export const del = async (userObject) => {
	try {
		return await User.findByIdAndDelete(userObject._id).exec()
	} catch (error) {
		throw error
	}
}
