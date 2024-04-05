import axios from 'axios'
const handleUtil = async (file, accessToken, type) => {
	try {
		const formData = new FormData()
		formData.append('file', file)
		const res = await axios.post(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/utility/upload?query_type=${type}`,
			formData,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)
		console.log(res)
		if (res.status === 200) {
			return res.data.data.url
		} else {
			return null
		}
	} catch (error) {
		console.log(error, 'util')
	}
}

export default handleUtil
