let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config.js')
} catch (e) {
  // Ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // output: "export", // ✅ Corrected this line
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

// ✅ Merge user config if it exists
mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) return

  for (const key in userConfig) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = { ...nextConfig[key], ...userConfig[key] }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

// ✅ Export default properly
export default nextConfig
