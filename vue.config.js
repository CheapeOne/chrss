const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'client/src'),
      },
    },
    entry: {
      app: path.join(__dirname, 'client/src/main.ts'),
    },
  },
};
