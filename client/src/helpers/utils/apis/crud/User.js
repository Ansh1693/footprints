import axios from 'axios'

//Read User

export const readUser = async ({ accessToken }) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/user/read`,
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

//Update User
export const updateUser = async ({ accessToken, userObject }) => {
	try {
		const response = await axios.patch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/user/update`,
			{ userObject },
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

// DELETE User

export const deleteUser = async ({ accessToken, userObject }) => {
	try {
		const response = await axios.delete(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/user/delete`,
			{ userObject },
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
