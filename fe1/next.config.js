/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, _options) => {
    Object.assign(config.experiments, { topLevelAwait: true });
    config.plugins.push(
      new NextFederationPlugin({
        name: "fe1",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          // fe1: "fe1@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          // fe2: "fe2@http://localhost:3002/_next/static/chunks/remoteEntry.js",
          // fe3: "fe3@http://localhost:3003/_next/static/chunks/remoteEntry.js",
        },
        exposes: {
          "./header": "./src/component/Header",
        },
        shared: {},
      })
    );
    return config;
  },
};

module.exports = nextConfig;
