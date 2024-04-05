import {
	create,
	del,
	read,
	update,
} from '../controllers/crud/blok.controller.js'

/**
 * A route handler for blok requests
 *
 * @param {import("fastify").FastifyInstance} fastify
 * @param {import("fastify").FastifyPluginOptions} _options
 * @param {import("fastify").DoneFuncWithErrOrRes} done
 */
const blok = (fastify, _options, done) => {
	fastify.post(
		'/create',
		{
			onRequest: [fastify.userAuth],
		},
		create
	)
	fastify.get(
		'/read',
		{
			onRequest: [fastify.userAuth],
		},
		read
	)
	fastify.patch(
		'/update',
		{
			onRequest: [fastify.userAuth],
		},
		update
	)
	fastify.delete(
		'/delete',
		{
			onRequest: [fastify.userAuth],
		},
		del
	)

	done()
}

export default blok
