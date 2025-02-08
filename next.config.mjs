// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


export default  {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'another-example.com',
      },
    ],
  },
}
