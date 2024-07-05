import axios from 'axios'

export const checkUsername = async ({ userObject }) => {
	try {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/utility/check?queryType=username`,
			{ userObject },
			{
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`,
				},
			}
		)

		return response
	} catch (err) {
		throw err
	}
}

export const checkEmail = async ({ userObject }) => {
	try {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/utility/check?queryType=email`,
			{ userObject },
			{
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`,
				},
			}
		)

		return response
	} catch (err) {
		throw err
	}
}
