/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

import removeImports from "next-remove-imports";

export default removeImports({
  ...nextConfig,
});