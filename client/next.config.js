/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	remotePatterns: [
		{
			protocol: 'https',
			hostname: '*',
		},
	],
	images: {
		domains: [
			'images.unsplash.com',
			'lh3.googleusercontent.com',
			'cdn-testing.bloks.social',
			'*',
		],
	},
	webpack: (config, { isServer }) => {
		// Add a rule for handling .mp3 files
		config.module.rules.push({
			test: /\.(mp3)$/,
			use: [
				{
					loader: 'file-loader',
				},
			],
		});

		return config;
	},
}

module.exports = nextConfig
