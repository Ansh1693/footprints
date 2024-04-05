import mongoose from 'mongoose'
import { randomUUID } from 'crypto'

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
		},

		profile_id: {
			type: String,
			required: true,
			unique: true,
			default: () => randomUUID(),
		},
		following: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Blok',
			},
		],
		bloks: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Blok',
			},
		],
		tags: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Tag',
			},
		],
		documents: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Document',
			},
		],
		auth: new mongoose.Schema(
			{
				google: {
					type: {
						google_id: String,
						tokens: {
							access_token: {
								type: String,
								// required: true,
								// unique: true,
							},
							refresh_token: {
								type: String,
								// required: true,
								// unique: true,
							},
						},
					},
					// unique: true,
				},
			},
			{ timestamps: true }
		),
		userMetadata: new mongoose.Schema(
			{
				profile_image: {
					type: String,
				},
				profile_header: {
					type: String,
				},
				status: {
					type: {
						verified: {
							type: Boolean,
							default: false,
							required: true,
						},
					},
				},
			},
			{ timestamps: true }
		),
	},
	{ timestamps: true }
)

export default userSchema
