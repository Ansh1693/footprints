import mongoose from 'mongoose'

await mongoose
	.connect(process.env.DATABASE_URL)
	.then(() => {
		return console.log('Connected to DB!')
	})
	.catch((error) => {
		throw error
	})

import documentSchema from '../schema/mongoose/document.schema.js'
import userSchema from '../schema/mongoose/user.schema.js'
import tagSchema from '../schema/mongoose/tag.schema.js'
import blokSchema from '../schema/mongoose/blok.schema.js'

import '../middlewares/mongoose/tag.middleware.js'
import '../middlewares/mongoose/blok.middleware.js'
import '../middlewares/mongoose/document.middleware.js'

export const Document = mongoose.model('Document', documentSchema)
export const User = mongoose.model('User', userSchema)
export const Tag = mongoose.model('Tag', tagSchema)
export const Blok = mongoose.model('Blok', blokSchema)
