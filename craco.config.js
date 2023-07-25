const CracoAlias = require('craco-alias');

module.exports = {
  devServer: {
    port: 3001,
  },
  plugins: [
    {
      options: {
        baseUrl: './',
        jsConfigPath: './jsconfig.json',
        source: 'jsconfig',
      },
      plugin: CracoAlias,
    },
  ],
};
