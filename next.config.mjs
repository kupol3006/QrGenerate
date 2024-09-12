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
};

export default nextConfig;