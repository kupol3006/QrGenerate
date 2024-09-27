import webpack from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['api.vietqr.io'],
    },
    webpack: (config) => {
        config.plugins.push(
          new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
          })
        );
        config.cache = false;
        return config;
    },
    async rewrites() {
      return [
          {
              source: '/Dashboard/:path*',
              destination: '/Dashboard', // Chuyển hướng tất cả các URL bắt đầu bằng /Dashboard đến trang Dashboard
          },
      ];
    },
};

export default nextConfig;