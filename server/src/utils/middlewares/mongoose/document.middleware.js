import { Blok, User } from '../../initializers/mongoose.initializer.js'

import documentSchema from '../../schema/mongoose/document.schema.js'

export const documentCascade = documentSchema.post(
	'deleteOne',
	/**
	 * @param {import("../../../../types/schema/document.schema").documentDocument} document
	 */
	(document) => {
		Blok.find({
			documents: {
				$in: [document._id],
			},
		}).then((bloks) => {
			Promise.allSettled(
				bloks.map((blok) => {
					Blok.findByIdAndUpdate(
						blok._id,
						{ $pull: { documents: document._id } },
						{ new: true }
					)
				})
			)
		})
		User.find({
			following: {
				$in: [document._id],
			},
		}).then((users) => {
			Promise.allSettled(
				users.map((user) => {
					User.findByIdAndUpdate(
						user._id,
						{ $pull: { documents: document._id } },
						{ new: true }
					)
				})
			)
		})
	}
)
