/** @type {import('next').NextConfig} */
import webpack from "webpack";
const nextConfig = {
    reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  async headers() {

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
        {
          key: 'Content-Security-Policy',
          value: "frame-ancestors 'none';",
        },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ];
  },
  images: {
    // For Next.js 12.3.0 and later
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.madhousewallet.com",
        pathname: "/**",
      },
    ],
    // Uncomment the following for Next.js versions prior to 12.3.0
    // domains: ['media.madhousewallet.com'],
  },



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
   

     // Add fallback for browser polyfills
     config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false, // Node.js-only module
      tls: false, // Node.js-only module
      fs: false,  // Node.js-only module
    };


    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
