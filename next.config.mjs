// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // Three.jsのCanvas関連の設定
    return config;
  },
};

export default nextConfig; // ESモジュール形式でのエクスポート
