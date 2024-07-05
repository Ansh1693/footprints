import axios from 'axios'

export const uploadImage = async ({ accessToken, file }) => {
	try {
		const formData = new FormData()
		formData.append('file', file)
		const res = await axios.post(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/utility/upload?queryType=image`,
			formData,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		return res
	} catch (err) {
		throw err
	}
}

export const uploadAudio = async ({ accessToken, file }) => {
	try {
		const formData = new FormData()
		formData.append('file', file)
		const res = await axios.post(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/utility/upload?queryType=audio`,
			formData,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		return res
	} catch (err) {
		throw err
	}
}
