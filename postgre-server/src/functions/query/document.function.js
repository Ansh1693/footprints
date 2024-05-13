import prisma from "../../utils/initializers/prisma.initializer.js";

/**
 * A function that will send return a specific document
 *
 * @param {string} document_id
 * @param {string} profile_id
 */
export const readDocument = async (document_id, profile_id = undefined) => {
  try {
    const foundDocument = await prisma.document.findUnique({
      where: { id: document_id },
      include: {
        comments: {
          include: {
            user: {
              include: { userMetadata: true },
            },
          },
        },
        tags: true,
        documentMetadata: true,
      },
    });

    if (foundDocument.status === "Public") {
      return foundDocument;
    }

    if (
      !foundDocument.status === "Public" &&
      foundDocument.profile_id !== profile_id
    ) {
      throw new Error("Document is not public.");
    }

    return foundDocument;
  } catch (error) {
    throw error;
  }
};

export const postComment = async (documentObject, commentObject) => {
  try {
    const foundDocument = await prisma.document.findUnique({
      where: { id: documentObject.id },
      select: { status: true },
    });

    if (!foundDocument.status.comments) {
      throw new Error("Owner has disabled public comments on this Document.");
    }

    await prisma.document.update({
      where: { id: documentObject.id },
      data: {
        comments: {
          create: {
            comment: commentObject.comment,
            user: { connect: { id: commentObject.user.id } },
          },
        },
      },
    });

    return { success: true };
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (documentObject, commentObject) => {
  try {
    await prisma.document.update({
      where: { id: documentObject.id },
      data: {
        comments: {
          delete: { id: commentObject.id },
        },
      },
    });

    return { success: true };
  } catch (error) {
    throw error;
  }
};

// import { Document } from '../../utils/initializers/mongoose.initializer.js'

// /**
//  * A function that will send return a specific document
//  *
//  * @param {string} document_id
//  * @param {string} profile_id
//  */
// export const readDocument = async (document_id, profile_id = undefined) => {
// 	try {
// 		const foundDocument = await Document.findById(document_id)
// 			.populate({
// 				path: 'comments',
// 				populate: { path: 'user', populate: 'userMetadata' },
// 			})
// 			.populate('tags')
// 			.populate('documentMetadata')
// 			.lean()
// 			.exec()

// 		if (foundDocument.status.public) {
// 			return foundDocument
// 		}

// 		if (
// 			!foundDocument.status.public &&
// 			foundDocument.profile_id !== profile_id
// 		) {
// 			throw new Error('Document is not public.')
// 		}

// 		return foundDocument
// 	} catch (error) {
// 		throw error
// 	}
// }

// /**
//  * A function that will post a comment for a specific document
//  *
//  * @param {import('../../../types/schema/document.schema').documentDocument} documentObject
//  * @param {import('../../../types/schema/document.schema').commentDocument} commentObject
//  */
// export const postComment = async (documentObject, commentObject) => {
// 	try {
// 		const foundDocument = await Document.findById(documentObject._id)
// 			.select(['status'])
// 			.lean()
// 			.exec()

// 		if (!foundDocument.status.comments) {
// 			throw new Error(
// 				'Owner has disabled public comments on this Document.'
// 			)
// 		}

// 		await Document.findByIdAndUpdate(
// 			documentObject._id,
// 			{
// 				$push: {
// 					comments: {
// 						comment: commentObject.comment,
// 						user: commentObject.user,
// 					},
// 				},
// 			},
// 			{ new: true }
// 		)
// 			.lean()
// 			.exec()

// 		return {
// 			success: true,
// 		}
// 	} catch (error) {
// 		throw error
// 	}
// }

// /**
//  * A function that will delete a comment for a specific document
//  *
//  * @param {import('../../../types/schema/document.schema').documentDocument} documentObject
//  * @param {import('../../../types/schema/document.schema').commentDocument} commentObject
//  */
// export const deleteComment = async (documentObject, commentObject) => {
// 	try {
// 		await Document.findByIdAndUpdate(
// 			documentObject._id,
// 			{
// 				$pull: {
// 					comments: commentObject._id,
// 				},
// 			},
// 			{ new: true }
// 		)
// 			.lean()
// 			.exec()

// 		return {
// 			success: true,
// 		}
// 	} catch (error) {
// 		throw error
// 	}
// }
