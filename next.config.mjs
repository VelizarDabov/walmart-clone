/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "links.papareact.com" }, { protocol: "https", hostname: "i.imgur.com" }, {protocol:'https', hostname:'images.pexels.com'}],
  },
};

export default nextConfig;
