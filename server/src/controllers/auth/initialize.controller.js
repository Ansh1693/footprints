import { cache } from '../../utils/initializers/cache.initializer.js'

import {
	emailLogin,
	googleLogin,
	redditLogin,
} from '../../functions/auth/initialize.function.js'

/**
 * A controller to handle the auth initialization requests
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
const initializeAuth = async (req, res) => {
	try {
		const { query_type } = req.query

		if (query_type === 'email') {
			if (!req.body.userObject) {
				throw new Error('User object missing.')
			}

			const data = await emailLogin(req.body.userObject)

			const auth_params = { otp: data.otp } || {}

			cache.set(data.state, auth_params, 60 * 5)

			res.status(200).send({ data })
		} else if (query_type === 'google') {
			const { state, url } = googleLogin()

			const auth_params = { state } || {}

			cache.set(state, auth_params, 60 * 2)

			res.status(200).send({url})
		} else if(query_type === 'reddit'){
			const {state,url} = redditLogin();

			const saved = { state, profile_id } || {}

			cache.set(state, saved, 60 * 4)

			res.status(302).send(url)
		}
	} catch (error) {
		throw error
	}
}

export default initializeAuth
