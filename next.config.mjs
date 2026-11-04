/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/fr", permanent: false }];
  },
};
export default nextConfig;
