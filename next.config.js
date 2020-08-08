const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  console.log(`isDev:${isDev} isProd:${isProd} isStaging:${isStaging}`);

  return {
    env: {
      KAKAO_APP_KEY: process.env.KAKAO_APP_KEY,
      API_URL: isDev ? 'http://localhost:5000' : process.env.API_URL,
      HOST: isDev
        ? 'http://localhost:3000'
        : 'https://ideal-guide-client.now.sh',
    },
    webpack: (config) => {
      if (isDev) {
        config.module.rules.push({
          test: /\.([jt])sx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        });
      }

      return config;
    },
  };
};
