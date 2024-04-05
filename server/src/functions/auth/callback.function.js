import { google as googleAPI } from 'googleapis'

import { generateUsername } from '../utility/generate.function.js'
import { checkEmail } from '../utility/check.function.js'
import { create, update } from '../crud/user.function.js'

import google from '../../utils/api/google.js'

/**
 * A function that handles the callback request for Google
 *
 * @param {string} state
 * @param {string} code
 * @param {object} authParams
 */
export const googleCallback = async (state, code, { state: sessionState }) => {
	try {
		if (!state || !sessionState || !code) {
			throw new Error('You denied the app or your session expired.')
		}

		if (state !== sessionState) {
			throw new Error("Stored tokens didn't match.")
		}

		const { tokens } = await google.getToken(code)

		google.setCredentials(tokens)

		const { data } = await googleAPI
			.people({
				version: 'v1',
				auth: google,
			})
			.people.get({
				resourceName: 'people/me',
				personFields: 'names,emailAddresses,photos',
			})

		const google_id = data.resourceName.match('[0-9]+$')[0]

		/**
		 * @type {import('../../../types/schema/user.schema.js').userDocument}
		 */
		let user = {
			name: data.names[0].displayName,
			email: data.emailAddresses[0].value,
			username: generateUsername(data.emailAddresses[0].value),
			auth: {
				google: {
					google_id: google_id,
					tokens: {
						access_token: tokens.access_token,
						refresh_token: tokens.refresh_token,
					},
				},
			},
			userMetadata: {
				profile_image: data.photos[0].url,
			},
		}

		const checkUser = await checkEmail(data.emailAddresses[0].value)

		if (checkUser.foundUser) {
			user = { ...user, _id: checkUser.user._id }

			await update(user)

			return {
				profile_id: checkUser.user.profile_id,
				user_id: checkUser.user._id,
			}
		}

		const newUser = await create(user)

		return { profile_id: newUser.profile_id, user_id: newUser._id }
	} catch (error) {
		throw error
	}
}

/**
 * A function that handles the callback request for Email
 *
 * @param {string} state
 * @param {import('../../../types/schema/user.schema.js').userDocument} userObject
 */
export const emailCallback = async (state, userObject) => {
	try {
		if (!state) {
			throw new Error('You denied the app or your session expired.')
		}

		const checkUser = await checkEmail(userObject.email)

		if (checkUser.foundUser) {
			return {
				profile_id: checkUser.user.profile_id,
				user_id: checkUser.user._id,
			}
		}

		/**
		 * @type {import('../../../types/schema/user.schema.js').userDocument}
		 */
		const user = {
			name: userObject.name,
			email: userObject.email,
			username: userObject.username || generateUsername(userObject.email),
		}

		const newUser = await create(user)

		return { profile_id: newUser.profile_id, user_id: newUser._id }
	} catch (error) {
		throw error
	}
}
