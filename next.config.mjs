// Define the merge function first
function mergeConfig(config, userConfig) {
  if (!userConfig) {
    return
  }

  // ESM imports will have a "default" property
  const userConfigObj = userConfig.default || userConfig

  for (const key in userConfigObj) {
    if (
      typeof config[key] === 'object' &&
      !Array.isArray(config[key])
    ) {
      config[key] = {
        ...config[key],
        ...userConfigObj[key],
      }
    } else {
      config[key] = userConfigObj[key]
    }
  }
}

// Import user config
let importedUserConfig = undefined
try {
  importedUserConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
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
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

// Merge configs
mergeConfig(nextConfig, importedUserConfig)

export default nextConfig
