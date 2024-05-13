import { cache } from '../../utils/initializers/cache.initializer.js'

import {
    redditCallback
} from '../../functions/auth/callback.function.js'

/**
 * A controller to handle the auth callback requests
 *
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} res
 */
const callbackConnect = async (req, res) => {
	try {
		const { platform } = req.params
		const { state, code } = req.query

		const auth_params = cache.get(state)

		if (!auth_params) {
			throw new Error('Authorization token expired, please try again.')
		}

		if(platform === 'reddit'){



			const user = await redditCallback(
				auth_params.profile_id,
				auth_params.state,
				state,
				code
			)

            
            res.status(200).send(user);
		}
	} catch (error) {
		throw error
	}
}

export default callbackConnect
