import mongoose from 'mongoose'

const documentSchema = new mongoose.Schema(
	{
		profile_id: {
			type: String,
			required: true,
		},
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			require: true,
		},
		heading: {
			type: String,
		},
		body: {
			type: String,
		},
		status: {
			type: {
				public: {
					type: Boolean,
					default: false,
					required: true,
				},
				deleted: {
					type: Boolean,
					default: false,
					required: true,
				},
				pinned: {
					type: Boolean,
					default: false,
					required: true,
				},
				comments: {
					type: Boolean,
					default: true,
					required: true,
				},
			},
			required: true,
		},
		tags: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Tag',
			},
		],
		bloks: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Blok',
			},
		],
		comments: [
			new mongoose.Schema(
				{
					comment: {
						type: String,
						required: true,
					},
					user: {
						type: mongoose.Schema.Types.ObjectId,
						ref: 'User',
						required: true,
					},
				},
				{ timestamps: true }
			),
		],
		documentMetadata: new mongoose.Schema(
			{
				document_type: {
					type: String,
					required: true,
				},
				bodyImage_url: {
					type: String,
				},
				source_url: {
					type: String,
				},
				twitter_data: {
					username: {
						type: String,
					},
					post_id: {
						type: String,
					},
				},
				reddit_data: {
					username: {
						type: String,
					},
					post_id: {
						type: String,
					},
				},
				pinterest_data: {
					username: {
						type: String,
					},
					post_id: {
						type: String,
					},
				},
				pocket_data: {
					post_id: {
						type: String,
					},
				},
			},
			{ timestamps: true }
		),
	},
	{ timestamps: true }
)

documentSchema.path('tags').validate(async function (value) {
	const uniqueTagIds = [...new Set(value.map(String))]

	return uniqueTagIds.length === value.length
}, 'Duplicate tag IDs are not allowed.')

documentSchema.path('bloks').validate(async function (value) {
	const uniqueblokIds = [...new Set(value.map(String))]

	return uniqueblokIds.length === value.length
}, 'Duplicate blok IDs are not allowed.')

export default documentSchema
