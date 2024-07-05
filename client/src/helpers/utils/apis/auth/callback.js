import axios from 'axios'

export const callbackEmail = async ({ userObject }) => {
	try {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/callback/email?state=${userObject.state}&code=${userObject.otp}`,
			{
				userObject: {
					...userObject,
				},
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`,
				},
			}
		)
	} catch (err) {
		throw err
	}
}
