const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

const assetPrefix = process.env.GITHUB_REPOSITORY && process.env.GITHUB_REPOSITORY_OWNER ?
    process.env.GITHUB_REPOSITORY.substring(process.env.GITHUB_REPOSITORY_OWNER.length) :
    "";

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    skipTrailingSlashRedirect: true, // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    reactStrictMode: true,
    swcMinify: true,
    assetPrefix,
    basePath: assetPrefix,
    trailingSlash: true, // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
};

module.exports = withNextra({
    ...nextConfig,
})