const withLess = require('@zeit/next-less');
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

const themeVariables = {
  'primary-color': '#228855',
  'font-family': `'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;`,
};

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  console.log(`isDev:${isDev} isProd:${isProd} isStaging:${isStaging}`);

  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables,
    },
    webpack: (config, { isServer, webpack }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }

      const builtInLoader = config.module.rules.find((rule) => {
        if (rule.oneOf) {
          return (
            rule.oneOf.find((deepRule) => {
              return !!(deepRule.test && deepRule.test.toString().includes('/a^/'));
            }) !== undefined
          );
        }
        return false;
      });

      if (typeof builtInLoader !== 'undefined') {
        config.module.rules.push({
          oneOf: [
            ...builtInLoader.oneOf.filter((rule) => {
              return (rule.test && rule.test.toString().includes('/a^/')) !== true;
            }),
          ],
        });
      }

      if (isDev) {
        config.module.rules.push({
          test: /\.([jt])sx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        });
      }

      return config;
    },
  });
};
