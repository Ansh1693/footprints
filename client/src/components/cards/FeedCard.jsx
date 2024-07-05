import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProfileImg from '../../../public/static/huberman.png'
import BannerImg from '../../../public/static/alexbanner.png'
import FollowButton from '../ui/FollowButton'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User } from 'phosphor-react'
import { useSelector } from 'react-redux'
import useGetCookie from '../cookies/useGetCookie'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function FeedCard({
	data,
	profile,
	editable,
	fetchFeed = null,
	fetchProfile = null,
}) {
	const router = useRouter()
	const getCookie = useGetCookie()
	const accessToken = getCookie('accessToken')
	const userInfo = useSelector((state) => state.userInfo.userInfo)
	const [follow, setFollow] = useState(false)

	useEffect(() => {
		if (userInfo?._id) {
			if (data?.followers.includes(userInfo?._id)) {
				setFollow(true)
			}
		}
	}, [])

	const redirectBoard = () => {
		router.push(`/board/${data?._id}`)
	}

	const redirectProfile = () => {
		router.push(`/profile/@${profile?.profile_id}`)
	}

	const handleFollow = () => {
		if (!accessToken && !userInfo?._id) {
			toast.error('Please login to follow')
			return
		}

		if (editable) {
			toast.error('You cannot follow your own board')
			return
		}
		const header = 'Bearer ' + accessToken
		if (follow) {
			axios
				.patch(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/query/blok?blok_id=${data._id}&query_type=unfollowBlok`,
					{ blokObject: { _id: data?._id } },
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: header,
						},
					}
				)
				.then((res) => {
					if (res.status === 200) {
						setFollow(false)
						toast.success('Unfollowed')
						if (fetchFeed) fetchFeed()
						if (fetchProfile) fetchProfile()
					}
				})
				.catch((err) => {
					console.log(err)
					toast.error('Something went wrong')
				})
		} else {
			axios
				.patch(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/query/blok?blok_id=${data._id}&query_type=followBlok`,
					{ blokObject: { _id: data._id } },
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: header,
						},
					}
				)
				.then((res) => {
					if (res.status === 200) {
						setFollow(true)
						toast.success('Followed')
						if (fetchFeed) fetchFeed()
						if (fetchProfile) fetchProfile()
					}
				})
				.catch((err) => {
					console.log(err)
					toast.error('Something went wrong')
				})
		}
	}

	return (
		<div
			className='flex flex-col-reverse w-96  justify-between border rounded-lg cursor-pointer overflow-hidden shadow-md '
			// onClick={() => redirectBoard()}
		>
			{/* profile data */}
			<div className='p-4 space-y-5 '>
				<div className='flex items-start justify-between'>
					<div className='flex items-center gap-[12px]'>
						<Link href={`/profile/@${profile?.username}`}>
							{profile?.userMetadata?.profile_image ? (
								<Image
									alt='profile'
									onClick={() => redirectProfile()}
									src={profile.userMetadata?.profile_image}
									alt={profile?.name}
									width={50}
									height={50}
									className='rounded-full'
								/>
							) : (
								<User size={50} className='text-primary' />
							)}
						</Link>
						<div className=''>
							<Link href={`/board/${data?._id}`}>
								<h1 className='text-[20px] font-semibold'>
									{data?.blok_name}
								</h1>
							</Link>
							<Link
								href={`/profile/@${profile?.username}`}
								className='text-sm text-gray-400'
							>
								by {profile?.name}
							</Link>
						</div>
					</div>
					<div className='flex flex-col items-end gap-1'>
						{!editable && (
							<FollowButton
								follow={follow}
								handleFollow={handleFollow}
							/>
						)}
						<p className='text-sm text-gray-400'>
							{data?.followers?.length} followers
						</p>
					</div>
				</div>

				<p
					onClick={() => router.push('/boards/supplements-reqs')}
					className='text-gray-400 cursor-pointer'
				>
					{data?.description}
				</p>
			</div>

			{/* banner */}
			<div className=' h-full overflow-hidden'>
				<Link href={`/board/${data?._id}`}>
					<Image
						src={
							data?.blokMetadata?.blok_header
								? data?.blokMetadata?.blok_header
								: BannerImg
						}
						alt='huberman'
						width={925}
						height={156}
						// sizes=''
						className='object-cover h-full duration-500 hover:scale-110'
					/>
				</Link>
			</div>
		</div>
	)
}

export default React.memo(FeedCard)
