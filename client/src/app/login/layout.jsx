import React from 'react'
import StrokeIllus from '../../assets/illustration/strokes.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function RootLayout({ children }) {
	return (
		<div className='flex justify-between min-h-screen max-w-[1440px] container mx-auto'>
			{/* login sidebar */}
			<div className='relative flex flex-col items-center justify-center w-full '>
				<div>
					<div className='text-5xl font-bold  leading-snug'>
						Sign In to <br /> get Organized{' '}
					</div>
					<div className='mt-12'>
						don't have an account <br /> you can{' '}
						<Link href='/' className=' text-blue-600 font-semibold'>
							{' '}
							Register here!{' '}
						</Link>
					</div>
					<div className='blurr absolute top-20 left-40'> </div>
					<div className='blurr absolute top-50 left-80'> </div>
					<Image
						src='/static/loginCharacter.png'
						width={500}
						height={500}
						alt='Picture'
						className='flex justify-center items-center '
					/>
				</div>
				{/* <div className="absolute top-0 left-0 flex justify-between w-full">
                    <Image src={StrokeIllus} />
                    <Image src={StrokeIllus} className="transform -scale-x-100" />
                </div>

                <div className="flex flex-col items-center gap-12">
                    <div className="h-[324px] w-[324px] bg-white rounded-xl"></div>

                    <div className="space-y-3">
                        <h1 className="text-4xl libre-font text-tertiary">Smart collection</h1>
                        <p className="text-center libre-font text-tertiary opacity-60">Collect all your bookmarks in one <br /> place with Ai generated tags</p>
                    </div>

                 
                    <div className="flex items-center gap-2">
                        <p className="w-[14px] h-[14px] bg-white rounded-full"></p>
                        <p className="w-[10px] h-[10px] bg-white rounded-full"></p>
                        <p className="w-2 h-2 bg-white rounded-full"></p>
                        <p className="w-1 h-1 bg-white rounded-full"></p>
                    </div>
                </div> */}
			</div>

			<div className='min-w-[550px]'>{children}</div>
		</div>
	)
}
