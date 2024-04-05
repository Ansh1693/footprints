import mongoose from 'mongoose'

import { documentDocument } from './document.schema'
import { userDocument } from './user.schema';

export interface tagSchema {
	profile_id: string
	user_id: userDocument
	tag_name: string
	documents: [documentDocument]
}

export interface tagDocument extends tagSchema, mongoose.Document {}

export interface tagModel extends mongoose.Model<tagDocument> {}
