import mongoose from 'mongoose'

const tagSchema = new mongoose.Schema(
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
		tag_name: {
			type: String,
			required: true,
		},
		documents: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Document',
				required: true,
				unique: true,
			},
		],
	},
	{ timestamps: true }
)

export default tagSchema
