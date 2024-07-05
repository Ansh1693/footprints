import axios from 'axios'

export const readProfile = async ({ accessToken, profileId }) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/user?queryType=readProfile&profileId=${profileId}`,
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

export const readProfileBloks = async ({ accessToken, profileId }) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/user?queryType=readProfileBloks&profileId=${profileId}`,
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

export const readProfileDocuments = async ({ accessToken }) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/user?queryType=readProfileDocument`,
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

export const readProfileFollowing = async ({ accessToken }) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/query/user?queryType=readProfileFollowing`,
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
