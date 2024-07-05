import axios from 'axios'

// READ blok
export const readBlok = async ({ accessToken, blokId = undefined }) => {
	try {
		let url = `${process.env.NEXT_PUBLIC_SERVER_URL}/blok/read`
		if (blokId !== undefined) {
			url += `?blokId=${blokId}`
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

// CREATE blok
export const createBlok = async ({ accessToken, blokObject }) => {
	try {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/blok/create`,
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

// DELETE blok
export const deleteBlok = async ({ accessToken, blokObject }) => {
	try {
		const response = await axios.delete(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/blok/delete`,
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

// UPDATE blok
export const updateBlok = async ({ accessToken, blokObject }) => {
	try {
		const response = await axios.patch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/blok/update`,
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
