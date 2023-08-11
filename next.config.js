const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/notes-de-cours" : "./";

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
    // trailingSlash: true, // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
};

module.exports = withNextra({
    ...nextConfig,
})

// module.exports = withNextra({
//     output: 'export',
// })

// module.exports = {
//     ...withNextra(),
//     ...nextConfig,
// };
