module.exports = ({ config, mode }) => {

  // config.resolve.alias['environment'] = path.join(__dirname, '../src/environments', process.env.CLIENT_ENV || 'development');

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
