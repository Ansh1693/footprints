import callback from '../controllers/auth/callback.controller.js'
import initialize from '../controllers/auth/initialize.controller.js'

/**
 * A route that handles auth request including login and signup
 *
 * @param {import("fastify").FastifyInstance} fastify
 * @param {import("fastify").FastifyPluginOptions} _options
 * @param {import("fastify").DoneFuncWithErrOrRes} done
 */
const auth = (fastify, _options, done) => {
	fastify.get(
		'/initialize',
		{
			onRequest: [fastify.clientAuth],
		},
		initialize
	)
	fastify.post(
		'/initialize',
		{
			onRequest: [fastify.clientAuth],
		},
		initialize
	)
	fastify.get(
		'/callback/:platform',
		{
			onRequest: [fastify.callbackAuth],
		},
		callback
	)
	fastify.post(
		'/callback/:platform',
		{
			onRequest: [fastify.callbackAuth, fastify.clientAuth],
		},
		callback
	)

	done()
}

export default auth
