const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
    output: 'export',
    images: {
        unoptimized: true,
    },
    skipTrailingSlashRedirect: true, // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true, // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
})
