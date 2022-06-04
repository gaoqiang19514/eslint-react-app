const path = require('path');

module.exports = {
  webpack: {
    alias: {
      tomcat: path.resolve(__dirname, './src'),
    },
  },
};
