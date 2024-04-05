import { FastifyRequest, FastifyInstance } from 'fastify'

import { userDocument } from './schema/user.schema'
import { tagDocument } from './schema/tag.schema'
import { documentDocument } from './schema/document.schema'
import { blokDocument } from './schema/blok.schema'

export interface clientAuth {}
export interface userAuth {}
export interface callbackAuth {}

declare module 'fastify' {
	interface FastifyInstance {
		clientAuth: clientAuth
		userAuth: userAuth
		callbackAuth: callbackAuth
	}

	interface FastifyRequest {
		body: {
			userObject: userDocument
			tagObject: tagDocument
			documentObject: documentDocument
			blokObject: blokDocument
		}
	}
}
