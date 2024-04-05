'use client'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { getBoardList } from '@/redux/actions/boardActions'

const page = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const userInfo = useSelector((state) => state.userInfo)

	useEffect(() => {
		if (userInfo.userInfo.accessToken) {
			dispatch(
				getBoardList({ accessToken: userInfo.userInfo.accessToken })
			)
		}
	}, [userInfo.userInfo.accessToken])

	return <div>Ansh</div>
}

export default page
