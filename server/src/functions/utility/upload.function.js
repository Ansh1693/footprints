import { PutObjectCommand } from '@aws-sdk/client-s3'
import sharp from 'sharp'

import S3 from '../../utils/api/cloudflare.js'

/**
 * A function that will upload an image to Cloudflare
 *
 * @param {import("@fastify/multipart").MultipartFile} file
 * @param {string} profile_id
 */
export const uploadImage = async (file, profile_id) => {
	try {
		if (
			!['image/heic', 'image/jpeg', 'image/png'].some(
				(type) => type === file.mimetype
			)
		) {
			throw new Error('Unsupported file type.')
		}

		const fileKey = `${profile_id}_${file.filename.replace(/\s/g, '_')}`

		await S3.send(
			new PutObjectCommand({
				Bucket: process.env.CLOUDFLARE_BUCKET,
				Key: fileKey,
				ContentType: file.mimetype,
				Body: await sharp(await file.toBuffer())
					.toFormat('webp')
					.webp({ lossless: true })
					.toBuffer(),
				Metadata: {
					fileType: file.mimetype,
					profile_id: profile_id,
					fileName: file.filename,
				},
			})
		)

		return {
			url: `${process.env.CLOUDFLARE_CDN}/${process.env.CLOUDFLARE_BUCKET}/${fileKey}`,
		}
	} catch (error) {
		throw error
	}
}

/**
 * A function that will upload the audio to Cloudflare
 *
 * @param {import("@fastify/multipart").MultipartFile} file
 * @param {string} profile_id
 */
export const uploadAudio = async (file, profile_id) => {
	try {
		if (file.mimetype !== 'audio/mpeg') {
			throw new Error('Unsupported audio file type.')
		}

		const fileKey = `${profile_id}_${file.filename.replace(/\s/g, '_')}`

		await S3.send(
			new PutObjectCommand({
				Bucket: process.env.CLOUDFLARE_BUCKET,
				Key: fileKey,
				ContentType: file.mimetype,
				Body: await file.toBuffer(),
				Metadata: {
					fileType: file.mimetype,
					profile_id: profile_id,
					fileName: file.filename,
				},
			})
		)

		return {
			url: `${process.env.CLOUDFLARE_CDN}/${process.env.CLOUDFLARE_BUCKET}/${fileKey}`,
		}
	} catch (error) {
		throw error
	}
}
