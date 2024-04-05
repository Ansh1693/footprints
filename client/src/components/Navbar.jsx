"use client"

import React from 'react'
import Profile from './Profile'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '@/redux/actions/userActions'
import useGetCookie from './cookies/useGetCookie'
import useRemoveCookie from './cookies/useRemoveCookies'
import ToastNotification from './ui/ToastNotification'

function Navbar({ activeTab }) {
    const router = useRouter()
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userInfo)
    const getCookie = useGetCookie()
    const removeCookie = useRemoveCookie()


    React.useEffect(() => {
        const accessToken = getCookie('accessToken');
        if (!accessToken) {
            router.push('/login')
        } else if (!userLogin?.userInfo._id) {
            dispatch(login({ accessToken }))
        }
    }, [])

    React.useEffect(() => {
        if (userLogin?.error) {
            removeCookie('accessToken')
            ToastNotification({ message: 'Please Login Again' })
            router.push('/login')
        }
    }, [userLogin])



    return (
        <nav className='relative flex items-center justify-between gap-4 px-8 pt-8 '>
            <div className="flex w-full gap-6 text-lg border-b-2 libre-font border-border">
                <Link href='/bookmarks' className={`pb-2 font-semibold ${activeTab !== 'feed' ? 'text-primary border-b-2 border-b-primary' : 'text-[#9CB1DA]'}`}>
                    My Bookmarks
                </Link>
                <Link href='/feed' className={`pb-2 font-semibold ${activeTab === 'feed' ? 'text-primary border-b-2 border-b-primary' : 'text-[#9CB1DA]'}`}>
                    Feed
                </Link>

            </div>

            <Profile />

        </nav>
    )
}

export default Navbar