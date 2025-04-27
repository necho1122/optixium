import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
				pathname: '/random/**',
			},
			{
				protocol: 'https',
				hostname: 'img.freepik.com',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
