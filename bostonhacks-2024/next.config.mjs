/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Include 'undici' in the transpile process to handle newer syntax
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/undici/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-private-methods'],
          },
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  