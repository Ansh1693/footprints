import callback from '../controllers/connect/callback.controller.js'
import initialise from '../controllers/connect/initialise.controller.js'

/**
 * A route that handles auth request including login and signup
 *
 * @param {import("fastify").FastifyInstance} fastify
 * @param {import("fastify").FastifyPluginOptions} _options
 * @param {import("fastify").DoneFuncWithErrOrRes} done
 */
const connect = (fastify, _options, done) => {
	fastify.get(
		'/initialize',
		{
			onRequest: [fastify.userAuth],
		},
		initialise
	)
	fastify.post(
		'/initialize',
		{
			onRequest: [fastify.userAuth],
		},
		initialise
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
			onRequest: [fastify.callbackAuth, fastify.userAuth],
		},
		callback
	)

	done()
}

export default connect
