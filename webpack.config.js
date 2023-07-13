const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  entry: {
    vehicleHistory: './client/src/pages/vehicleHistory/index.js',
    vehicles: './client/src/pages/vehicleList/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'VroomLog',
      filename: 'vehicleHistory/index.html',
      chunks:['vehicleHistory'],
      template:'./client/src/index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'VroomLog',
      filename: 'vehicles/index.html',
      chunks:['vehicles'],
      template:'./client/src/index.html',

    }),
  ],
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, 'client/dist'),
    clean: true
  },

};