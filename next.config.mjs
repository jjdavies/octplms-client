/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:user*',
        destination: 'http://localhost:5000/:user*',
      },
    ];
  },
};

export default nextConfig;
