const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    instrumentationHook: true,
  },
};

module.exports = withSentryConfig(nextConfig);
