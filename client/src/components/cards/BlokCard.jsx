import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProfileImg from '../../../public/static/huberman.png'
import BannerImg from '../../../public/static/alexbanner.png'
import FollowButton from '../ui/FollowButton'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User } from '@phosphor-icons/react'
import { useSelector } from 'react-redux'
import useGetCookie from '../cookies/useGetCookie'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { unfollowBlok } from '@/helpers/utils/apis/query/Blok'

function BlokCard({
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
		if (userInfo?.id) {
			if (
				data?.BlokFollowers.filter((x) => x.userId === userInfo?.id)
					.length > 0
			) {
				setFollow(true)
			}
		}
	}, [])

	const redirectBoard = () => {
		router.push(`/blok/${data?.id}`)
	}

	const redirectProfile = () => {
		router.push(`/profile/${profile?.profileId}`)
	}

	const handleFollow = () => {
		if (!accessToken && !userInfo?.id) {
			toast.error('Please login to follow')
			return
		}

		if (editable) {
			toast.error('You cannot follow your own board')
			return
		}

		if (follow) {
			unfollowBlok({
				accessToken,
				blokObject: {
					id: data.id,
					userId: data.userId,
				},
			})
				.then((res) => {
					if (res.status === 200) {
						setFollow(false)
						toast.success('Unfollowed')
						if (fetchFeed) fetchFeed()
						if (fetchProfile) fetchProfile()
					}
				})
				.catch((err) => {
					toast.error('Something went wrong')
				})
		} else {
			followBlok({
				accessToken,
				blokObject: {
					id: data.id,
					userId: data.userId,
				},
			})
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
						<Link href={`/profile/${profile?.profileId}`}>
							{profile?.UserMetadata?.profileImage ? (
								<Image
									alt='profile'
									onClick={() => redirectProfile()}
									src={profile.UserMetadata?.profileImage}
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
							<Link href={`/blok/${data?.id}`}>
								<h1 className='text-[20px] font-semibold'>
									{data?.blokName}
								</h1>
							</Link>
							<Link
								href={`/profile/${profile?.profileId}`}
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
							{data?.BlokFollowers?.length} followers
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
							data?.BlokMetadata?.blokHeader
								? data?.BlokMetadata?.blokHeader
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

export default React.memo(BlokCard)
