const slsw = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  externals: [nodeExternals(), 'dd-trace', 'datadog-lambda-js'],
  module: {
    rules: [
      {
        include: __dirname,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: { node: '12' } }]],
            },
          },
        ],
      },
    ],
  },
}
