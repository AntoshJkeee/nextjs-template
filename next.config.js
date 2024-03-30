/** @type {import('next').NextConfig} */

const nextConfig = {
	// basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	swcMinify: true,
	images: {
		// domains: [process.env.NEXT_PUBLIC_IMAGES],
	},
	experimental: {
		turbo: {
			rules: {
				// Option format
				'*.md': [
					{
						loader: '@mdx-js/loader',
						options: {
							format: 'md'
						}
					}
				],
				// Option-less format
				'*.mdx': ['@mdx-js/loader']
			}
		}
	}
};

export default nextConfig;
