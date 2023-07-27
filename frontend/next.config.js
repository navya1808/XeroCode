// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// next.config.js
const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
        },
      ],
    });

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: 'file-loader',
    // });

    // // Entry point
    // config.entry = path.resolve(__dirname, './src/in.tsx');

    // config.output = {
    //   path: path.resolve(__dirname, './build'),
    //   filename: 'bundle.js',
    // };

    // Plugins
    // Add your custom plugins here if needed

    return config;
  },
};


