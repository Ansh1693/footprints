import axios from 'axios'

export const readDocuments = async ({ profileId, accessToken }) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/document?queryType=readDocuments&profileId=${profileId}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		return response
	} catch (error) {
		throw error
	}
}

export const readDocument = async ({ documentId, accessToken }) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/document?queryType=readDocument&documentId=${documentId}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		return response
	} catch (error) {
		throw error
	}
}

export const postComment = async ({
	documentObject,
	commentObject,
	accessToken,
}) => {
	try {
		const response = await axios.patch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/document?queryType=postComment`,
			{
				documentObject,
				commentObject,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		return response
	} catch (error) {
		throw error
	}
}

export const deleteComment = async ({
	documentObject,
	commentObject,
	accessToken,
}) => {
	try {
		const response = await axios.patch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/document?queryType=deleteComment`,
			{
				documentObject,
				commentObject,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		return response
	} catch (error) {
		throw error
	}
}
