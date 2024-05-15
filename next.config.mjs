/** @type {import('next').NextConfig} */
import webpack from "webpack"; // Import webpack using ES module syntax

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        util: new URL("util", import.meta.url).pathname,
        path: new URL("path-browserify", import.meta.url).pathname,
        fs: false,
      };
    }
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    );

    return config;
  },
};

export default nextConfig;
