/** @type {import('next').NextConfig} */
import webpack from "webpack";
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Configures webpack to handle SVG files with SVGR. SVGR optimizes and transforms SVG files
    // into React components. See https://react-svgr.com/docs/next/

    // Grab the existing rule that handles SVG imports
    // @ts-ignore - rules is a private property that is not typed
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );


    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;
    // Add fallback for browser polyfills
   

     // Add fallback for browser polyfills - SECURITY FIXED
     config.resolve.fallback = {
      ...config.resolve.fallback,
      // Only keep Node.js-only modules as false (safe)
      net: false, // Node.js-only module
      tls: false, // Node.js-only module
      fs: false,  // Node.js-only module
      // Explicitly disable dangerous modules
      process: false, // SECURITY FIXED - Disable process polyfill
      buffer: false,  // SECURITY FIXED - Disable buffer polyfill
      // Removed dangerous polyfills:
      // - crypto: "crypto-browserify" (SECURITY RISK)
      // - stream: "stream-browserify" (SECURITY RISK)
      // - path: "path-browserify" (SECURITY RISK)
      // - zlib: "browserify-zlib" (SECURITY RISK)
      // - util: "util" (SECURITY RISK)
      // - assert: "assert" (SECURITY RISK)
      // - http: "stream-http" (SECURITY RISK)
    };

    // Add plugins - SECURITY FIXED
    // Removed dangerous ProvidePlugin that exposed process and Buffer globally
    // config.plugins.push(
    //   new webpack.ProvidePlugin({
    //     process: "process/browser",  // SECURITY RISK - exposes process.env
    //     Buffer: ["buffer", "Buffer"], // SECURITY RISK - exposes Buffer globally
    //   })
    // );

    // SECURITY FIXED - Override global variables to prevent exposure
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': '{}', // SECURITY FIXED - Empty process.env to prevent secret exposure
        // Note: We can't disable 'process' or 'Buffer' completely as Next.js needs them
        // But we've already disabled dangerous polyfills above
      })
    );

    return config;
  },
  eslint: {
    ignoreDuringBuilds: false, // SECURITY FIXED - Enable ESLint to catch security issues
  },
  // Add security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; object-src 'none'; frame-ancestors 'none';",
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
