import mongoose from 'mongoose'

import { blokDocument } from './blok.schema'
import { tagDocument } from './tag.schema'

export interface userSchema {
	email: string
	name: string
	description: string
	username: string
	profile_id: string
	following?: [blokDocument]
	bloks?: [blokDocument]
	tags?: [tagDocument]
	auth?: authSchema
	userMetadata?: userMetadataSchema
}

export interface authSchema {
	google?: {
		google_id: string
		tokens: {
			access_token: string
			refresh_token: string
		}
	}
}

export interface userMetadataSchema {
	profile_image?: string
	profile_header?: string
	status?: {
		verified: string
	}
}

export interface userDocument extends userSchema, mongoose.Document {}
export interface authDocument extends authSchema, mongoose.Document {}
export interface userMetadataDocument
	extends userMetadataSchema,
		mongoose.Document {}

export interface userModel extends mongoose.Model<userDocument> {}
export interface authModel extends mongoose.Model<authDocument> {}
export interface userMetadataModel
	extends mongoose.Model<userMetadataDocument> {}
