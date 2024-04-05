import mongoose from 'mongoose'

import { documentDocument } from './document.schema'
import { userDocument } from './user.schema'

export interface blokSchema {
	profile_id: string
	user_id: userDocument
	blok_name: string
	description?: string
	status: {
		public: boolean
		deleted: boolean
	}
	followers?: [userDocument]
	documents: [documentDocument]
	blokMetadata?: blokMetadataSchema
}

export interface blokMetadataSchema {
	blok_header?: string
}

export interface blokDocument extends blokSchema, mongoose.Document {}
export interface blokMetadataDocument
	extends blokMetadataSchema,
		mongoose.Document {}

export interface blokModel extends mongoose.Model<blokDocument> {}
export interface blokMetadataModel
	extends mongoose.Model<blokMetadataDocument> {}
