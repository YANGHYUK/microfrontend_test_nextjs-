/** @type {import('next').NextConfig} */

const { SHOP_URL } = process.env;
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,

  webpack: (config, options) => {
    const { isServer } = options;
    Object.assign(config.experiments, { topLevelAwait: true });
    config.plugins.push(
      new NextFederationPlugin({
        name: "fe3",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          fe0: `fe0@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          fe1: `fe1@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          fe2: `fe2@http://localhost:3002/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,

          exposePages: true, // `false` by default  exposes automatically all nextjs pages for you and theirs ./pages-map.
          // enableImageLoaderFix: true, // `false` by default – adds public hostname to all assets bundled by nextjs-image-loader. So if you serve remoteEntry from http://example.com then all bundled assets will get this hostname in runtime. It's something like Base URL in HTML but for federated modules.
          // enableUrlLoaderFix: true, // `false` by default - adds public hostname to all assets bundled by url-loader.
          // automaticAsyncBoundary: true, // `false` by default - adds automatic async boundary for all federated modules. It's required for sync imports to work.
          // skipSharingNextInternals: false // `false` by default - disables sharing of next internals. You can use it if you want to share next internals yourself or want to use this plugin on non next applications
        },
      })
    );
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/shop",
        destination: `${SHOP_URL}/shop`,
      },
      {
        source: "/shop/:path*",
        destination: `${SHOP_URL}/shop/:path*`,
      },
      // {
      //   source: "/shop/:path*",
      //   destination: `${SHOP_URL}/shop/item/:path*`,
      // },
    ];
  },
};

module.exports = nextConfig;
