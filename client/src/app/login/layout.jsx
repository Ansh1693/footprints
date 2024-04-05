import React from "react"
import StrokeIllus from '../../assets/illustration/strokes.svg'
import Image from "next/image"


export default function RootLayout({ children }) {
    return (
        <div className="flex justify-between min-h-screen max-w-[1440px] mx-auto">

            {/* login sidebar */}
            <div className="relative flex items-center justify-center w-full bg-gradient-to-br from-blue-800 to-sky-950">

                {/* strokes illustration */}
                <div className="absolute top-0 left-0 flex justify-between w-full">
                    <Image src={StrokeIllus} />
                    <Image src={StrokeIllus} className="transform -scale-x-100" />
                </div>

                {/* content */}
                <div className="flex flex-col items-center gap-12">
                    <div className="h-[324px] w-[324px] bg-white rounded-xl"></div>

                    <div className="space-y-3">
                        <h1 className="text-4xl libre-font text-tertiary">Smart collection</h1>
                        <p className="text-center libre-font text-tertiary opacity-60">Collect all your bookmarks in one <br /> place with Ai generated tags</p>
                    </div>

                    {/* dots */}
                    <div className="flex items-center gap-2">
                        <p className="w-[14px] h-[14px] bg-white rounded-full"></p>
                        <p className="w-[10px] h-[10px] bg-white rounded-full"></p>
                        <p className="w-2 h-2 bg-white rounded-full"></p>
                        <p className="w-1 h-1 bg-white rounded-full"></p>
                    </div>
                </div>


            </div>

            <div className="min-w-[550px]">
                {children}
            </div>
        </div>
    )
}
