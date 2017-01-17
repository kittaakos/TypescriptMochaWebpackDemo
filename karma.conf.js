var webpackConfig = require('./webpack.config');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'test/tests.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/tests.ts': ['webpack', 'sourcemap']
    },
    mime: { 
      'text/x-typescript': ['ts','tsx']
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      devtool: 'inline-source-map',
        plugins: [
          new webpack.SourceMapDevToolPlugin({
            filename: null,
            test: /\.(ts|js)($|\?)/i
          })
        ]
     },
     webpackServer: {
       noInfo: true
    },
    reporters: ['mocha', 'junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
