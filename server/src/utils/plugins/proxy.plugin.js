import fastifyProxy from '@fastify/http-proxy'
import fastifyPlugin from 'fastify-plugin'

/**
 * A plugin that adds reverse proxy
 */
const proxy = fastifyPlugin(
	/**
	 * @param {import('fastify/fastify').FastifyInstance} fastify
	 * @param {import('fastify/fastify').FastifyPluginOptions} _options
	 * @param {import('fastify/fastify').DoneFuncWithErrOrRes} done
	 */
	(fastify, _options, done) => {
		fastify.register(fastifyProxy, {
			upstream: 'https://google.com',
			prefix: '/utility/scrape',
		})
		fastify.register(fastifyProxy, {
			upstream: 'https://google.com',
			prefix: '/utility/generate',
		})
		fastify.register(fastifyProxy, {
			upstream: 'https://google.com',
			prefix: '/utility/detect',
		})

		done()
	}
)

export default proxy
