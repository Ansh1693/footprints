import axios from 'axios'

export const initializeGoogle = async ({}) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/initialize?queryType=google`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`,
				},
				redirect: 'follow',
				crossorigin: true,
				// mode: 'no-cors',
			}
		)

		const data = await response.json()

		return { response, data }
	} catch (error) {
		throw error
	}
}

export const initializeEmail = async ({ userObject }) => {
	try {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/initialize?queryType=email`,
			{ userObject },
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`,
				},
			}
		)

		return response
	} catch (err) {
		throw err
	}
}

export const initializeReddit = async ({ accessToken }) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/connect/initialize?queryType=email`,
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
