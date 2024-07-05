import axios from 'axios'

export const readBloks = async ({ profileId, accessToken }) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/blok?queryType=readBloks&profileId=${profileId}`,
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

export const readBlok = async ({ accessToken, blokId }) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/blok?queryType=readBlok&blokId=${blokId}`,
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

export const followBlok = async ({ accessToken, blokObject }) => {
	try {
		const response = await axios.patch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/blok?queryType=followBlok`,
			{ blokObject },
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

export const unfollowBlok = async ({ accessToken, blokObject }) => {
	try {
		const response = await axios.patch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/blok?queryType=unfollowBlok`,
			{ blokObject },
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

export const addDocument = async ({ accessToken, blokObject, documentId }) => {
	try {
		const response = await axios.patch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/blok?queryType=addDocument&documentId=${documentId}`,
			{ blokObject },
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

export const removeDocument = async ({
	accessToken,
	blokObject,
	documentId,
}) => {
	try {
		const response = await axios.patch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/blok?queryType=removeDocument&documentId=${documentId}`,
			{ blokObject },
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
