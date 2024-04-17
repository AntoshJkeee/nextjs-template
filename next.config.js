/** @type {import('next').NextConfig} */

module.exports = {
	// basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	swcMinify: true,
	sassOptions: {
		logger: {
			sourceMap: true,
			warn: function (message) {
				process.stderr.write(`\n${message}\n\n`);
			},
			debug: function (message) {
				process.stderr.write(`\n${message}\n\n`);
			},
		},
	},
	images: {
		// domains: [process.env.NEXT_PUBLIC_IMAGES]
	},
	experimental: {
		turbo: {
			rules: {
				// Option format
				'*.md': [
					{
						loader: '@mdx-js/loader',
						options: {
							format: 'md',
						},
					},
				],
				// Option-less format
				'*.mdx': ['@mdx-js/loader'],
			},
		},
	},
};
