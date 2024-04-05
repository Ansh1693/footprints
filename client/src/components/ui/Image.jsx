import Image from 'next/image'

function ImageComponent({ src, alt, height = 200, width = 200 }) {
	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			className='block w-full h-auto shadow-lg object-contain'
		/>
	)
}

export default ImageComponent
