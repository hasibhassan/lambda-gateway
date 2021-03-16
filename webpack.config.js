const slsw = require('serverless-webpack')

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  optimization: {
    minimize: true,
  },
  performance: {
    hints: false,
  },
  externals: ['dd-trace', 'datadog-lambda-js', 'aws-sdk'],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: { node: '12' },
                    useBuiltIns: 'usage',
                    corejs: '3.9',
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
}
