import {
	generator as blokGenerator,
	mutator as blokMutator,
} from '../controllers/query/blok.controller.js'
import {
	generator as documentGenerator,
	mutator as documentMutator,
} from '../controllers/query/document.controller.js'
import { generator as userGenerator } from '../controllers/query/user.controller.js'

/**
 * A route handler for query requests
 *
 * @param {import("fastify").FastifyInstance} fastify
 * @param {import("fastify").FastifyPluginOptions} _options
 * @param {import("fastify").DoneFuncWithErrOrRes} done
 */
const query = (fastify, _options, done) => {
	fastify.get(
		'/user',
		{
			onRequest: fastify.auth([fastify.userAuth, fastify.clientAuth], {
				relation: 'or',
			}),
		},
		userGenerator
	)
	fastify.get(
		'/document',
		{
			onRequest: fastify.auth([fastify.userAuth, fastify.clientAuth], {
				relation: 'or',
			}),
		},
		documentGenerator
	)
	fastify.patch(
		'/document',
		{
			onRequest: [fastify.userAuth],
		},
		documentMutator
	)
	fastify.get(
		'/blok',
		{
			onRequest: fastify.auth([fastify.userAuth, fastify.clientAuth], {
				relation: 'or',
			}),
		},
		blokGenerator
	)
	fastify.patch(
		'/blok',
		{
			onRequest: [fastify.userAuth],
		},
		blokMutator
	)

	done()
}

export default query
