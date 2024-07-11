import axios from 'axios'

export const readDocument = async ({ accessToken, documentId = undefined }) => {
	try {
		let url = `${process.env.NEXT_PUBLIC_SERVER_URL}/document/read`
		if (documentId !== undefined) {
			url += `?documentId=${documentId}`
		}
		const response = await axios.get(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		})

		return response
	} catch (error) {
		throw error
	}
}

export const createDocument = async ({ accessToken, documentObject }) => {
	try {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/document/create`,
			{ documentObject },
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		return response
	} catch (err) {
		throw err
	}
}

export const deleteDocument = async ({ accessToken, document }) => {
	try {
		const response = await axios.delete(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/document/delete`,
			{
				documentObject,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		return response
	} catch (err) {
		throw err
	}
}

export const updateDocument = async ({ accessToken, documentObject }) => {
	try {
		const response = await axios.patch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/document/update`,
			{ documentObject },
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		return response
	} catch (err) {
		throw err
	}
}
