import mongoose from 'mongoose'

import { tagDocument } from './tag.schema'
import { blokDocument } from './blok.schema'
import { userDocument } from './user.schema'

export interface documentSchema {
	profile_id: string
	user_id: userDocument
	heading?: string
	body?: string
	status: {
		public: boolean
		deleted: boolean
		pinned: boolean
		comments: boolean
	}
	tags?: [tagDocument]
	bloks?: [blokDocument]
	comments?: [commentSchema]
	documentMetadata: documentMetadataSchema
}

export interface commentSchema {
	comment: string
	user: userDocument
}

export interface documentMetadataSchema {
	document_type: string
	bodyImage_url?: string
	source_url?: string
	twitter_data?: {
		username: string
		post_id: string
	}
	reddit_data?: {
		username: string
		post_id: string
	}
	pinterest_data?: {
		username: string
		post_id: string
	}
	pocket_data?: {
		post_id: string
	}
}

export interface documentDocument extends documentSchema, mongoose.Document {}
export interface commentDocument extends commentSchema, mongoose.Document {}
export interface documentMetadataDocument
	extends documentMetadataSchema,
		mongoose.Document {}

export interface documentModel extends mongoose.Model<documentDocument> {}
export interface commentModel extends mongoose.Model<commentDocument> {}
export interface documentMetadataModel
	extends mongoose.Model<documentMetadataDocument> {}
