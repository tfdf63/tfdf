import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	trailingSlash: true,
	skipTrailingSlashRedirect: true,
	output: 'export',
	images: { unoptimized: true },

	// Отключаем headers для статического экспорта
	// и переносим их в .htaccess
	headers: async () => {
		return []
	},
}

export default nextConfig
