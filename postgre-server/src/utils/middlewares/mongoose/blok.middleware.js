import { Document, User } from '../../initializers/mongoose.initializer.js'

import blokSchema from '../../schema/mongoose/blok.schema.js'

export const blokCascade = blokSchema.post(
	'deleteOne',
	/**
	 * @param {import("../../../../types/schema/blok.schema.js").blokDocument} blok
	 */
	(blok) => {
		Document.find({
			bloks: {
				$in: [blok._id],
			},
		}).then((documents) => {
			Promise.allSettled(
				documents.map((document) => {
					Document.findByIdAndUpdate(
						document._id,
						{ $pull: { bloks: blok._id } },
						{ new: true }
					)
				})
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
						{ $pull: { following: blok._id, bloks: blok._id } },
						{ new: true }
					)
				})
			)
		})
	}
)
