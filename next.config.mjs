/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> produces an `out/` folder you can host anywhere
  // (Vercel, Netlify, Hostinger, cPanel, S3, GitHub Pages...).
  output: 'export',
  trailingSlash: true,
  images: {
    // Required for static export: images are served as-is from /public.
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
