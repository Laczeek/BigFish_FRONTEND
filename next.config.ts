import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol:
					process.env.NODE_ENV === 'development' ? 'http' : 'https',
				hostname: 'res.cloudinary.com',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
