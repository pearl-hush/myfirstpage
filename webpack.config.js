const path = require('path')
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.tsx'),

  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets/'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.js', '.json', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                compileType: 'module',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: [/\.jpe?g$/, /\.gif$/, /\.png$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new TypedCssModulesPlugin({
      globPattern: 'src/**/*.css',
    }),
  ],
};