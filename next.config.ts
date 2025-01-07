import type { NextConfig } from "next";

const withMDX = require('@next/mdx')()

const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

// export default nextConfig;
module.exports = withMDX(nextConfig)
