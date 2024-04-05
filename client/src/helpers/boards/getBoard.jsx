import axios from 'axios'
import Cookies from 'js-cookie'

const getBoard = async ({ id, accessToken = null }) => {
	const token = accessToken || Cookies.get('accessToken')

	const response = await axios.get(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/blok/read?blok_Id=${id}`,
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		}
	)

	if (response.status === 200) {
		return response.data
	} else {
		return null
	}
}

export default getBoard
