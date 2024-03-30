/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	swcMinify: true,
	images: {
		domains: [process.env.NEXT_PUBLIC_IMAGES],
	},
};

module.exports = nextConfig;
