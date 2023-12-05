/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'miro.medium.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'uploads-ssl.webflow.com',
				port: '',
			},
		],
	},
};
module.exports = nextConfig;
