/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true, // You can uncomment this if you want strict mode

  async rewrites() {
    return [
      {
        // This rule handles API requests for Outstatic.
        // When Outstatic (configured with basePath: '/cms' in outstatic.config.js)
        // makes an API call like /cms/api/outstatic/..., this rewrites it to /api/outstatic/...
        // which is where your app/api/outstatic/[[...ost]]/route.ts is actually served.
        source: '/cms/api/outstatic/:path*',
        destination: '/api/outstatic/:path*',
      },
      {
        // This rule handles requests for the Outstatic admin panel UI.
        // Outstatic is configured with basePath: '/cms', so you'll access its UI at /cms/...
        // Your Outstatic pages are in app/(cms)/outstatic/[[...ost]]/page.tsx,
        // which Next.js serves at /outstatic/... (because (cms) is a route group).
        // This rule rewrites incoming requests from /cms/... to /outstatic/...
        source: '/cms/:path*',
        destination: '/outstatic/:path*',
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
