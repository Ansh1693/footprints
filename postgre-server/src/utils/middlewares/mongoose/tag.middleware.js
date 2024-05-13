import { Document, User } from '../../initializers/mongoose.initializer.js'

import tagSchema from '../../schema/mongoose/tag.schema.js'

export const tagCascade = tagSchema.post(
	'deleteOne',
	/**
	 * @param {import('../../../../types/schema/tag.schema.js').tagDocument} tag
	 */
	(tag) => {
		Document.find({
			tags: {
				$in: [tag._id],
			},
		}).then((documents) => {
			Promise.allSettled(
				documents.map((document) =>
					Document.findByIdAndUpdate(
						document._id,
						{ $pull: { tags: tag._id } },
						{ new: true }
					)
				)
			)
		})
		User.find({
			following: {
				$in: [blok._id],
			},
		}).then((users) => {
			Promise.allSettled(
				users.map((user) => {
					User.findByIdAndUpdate(
						user._id,
						{ $pull: { tags: tag._id } },
						{ new: true }
					)
				})
			)
		})
	}
)
