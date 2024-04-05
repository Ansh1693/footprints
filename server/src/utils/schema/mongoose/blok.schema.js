import mongoose from 'mongoose'

const blokSchema = new mongoose.Schema(
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
		blok_name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		status: {
			type: {
				public: {
					type: Boolean,
					required: true,
				},
				deleted: {
					type: Boolean,
					required: true,
				},
			},
			required: true,
		},
		followers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		documents: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Document',
				required: true,
			},
		],
		blokMetadata: new mongoose.Schema(
			{
				blok_header: {
					type: String,
				},
			},
			{ timestamps: true }
		),
	},
	{ timestamps: true }
)

blokSchema.path('followers').validate(async function (value) {
	const uniqueUserIds = [...new Set(value.map(String))]

	return uniqueUserIds.length === value.length
}, 'Duplicate user IDs are not allowed.')

blokSchema.path('documents').validate(async function (value) {
	const uniqueUserIds = [...new Set(value.map(String))]

	return uniqueUserIds.length === value.length
}, 'Duplicate bookmark IDs are not allowed.')

export default blokSchema
