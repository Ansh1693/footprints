import cn from 'mxcn'
import React from 'react'

function FollowButton({ follow, handleFollow, ...props }) {
	const handleClick = () => {
		handleFollow()
	}

	return (
		<button
			onClick={handleClick}
			className={cn(
				'px-4 py-1 text-sm font-medium border rounded-md bg-secondary border-primary',
				follow ? 'bg-secondary text-primary' : 'bg-primary text-white'
			)}
			{...props}
		>
			{follow ? 'Following' : 'Follow'}
		</button>
	)
}

export default FollowButton
