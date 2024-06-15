'use client'

import Image from 'next/image'
import React from 'react'
// import mixpanel from '@/components/mixpanel'
import logtail from '../components/Logtail'
import useSetCookie from '../components/cookies/useSetCookie'
import useGetCookie from '../components/cookies/useGetCookie'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/userActions'

export default function Home() {
	const setCookie = useSetCookie()
	const getCookie = useGetCookie()
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)

	React.useEffect(() => {
		const accessToken = getCookie('accessToken')
		if (!accessToken) {
		}

		dispatch(login({ accessToken }))
	}, [])

	// console.log(mixpanel);
	//   if (mixpanel) {
	//     mixpanel.identify("ansh");
	//     mixpanel.track('Sign Up', {
	//       'Signup Type': 'Referral'
	//     });
	//   } else {
	//     console.error('Mixpanel is not available.');
	//   }
	//   logtail.error("Something bad happend. ansh");
	//   logtail.info("Log message with structured data.", {
	//     item: "Orange Soda",
	//     price: 100.00
	// });

	// logtail.flush()

	//login
	// setCookie('accessToken', '1234567890', {expires: 30 });
	// setCookie('refreshToken', '1234567890', {expires: 30});
	// setCookie('user', '1234567890', {expires: 30});

	//session
	// setCookie('user_homepage' , true);

	// throw new Error('Something bad happened.');
	return (
		<main>
			<h1 className='text-primary'>Hello world</h1>
		</main>
	)
}
