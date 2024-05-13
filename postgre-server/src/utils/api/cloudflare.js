import { S3Client } from '@aws-sdk/client-s3'

export default new S3Client({
	region: 'auto',
	endpoint: process.env.CLOUDFLARE_URI,
	credentials: {
		accessKeyId: process.env.CLOUDFLARE_ID,
		secretAccessKey: process.env.CLOUDFLARE_SECRET,
	},
})
