'use client'
import React from 'react'
import axios from 'axios'
import { useSearchParams, useRouter } from 'next/navigation'
import useSetCookie from '@/components/cookies/useSetCookie'

const page = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const setCookie = useSetCookie()

	React.useEffect(() => {
		if (searchParams) {
			const code = searchParams.get('session_token')
			if (code) {
				setCookie('accessToken', code, { expires: 30 })
				router.push('/documents')
			}
		}
	}, [searchParams])
	return <div></div>
}

export default page
