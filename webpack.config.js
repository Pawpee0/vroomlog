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
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  entry: {
    vehicleHistory: './client/src/pages/vehicleHistory/index.js',
    vehicles: './client/src/pages/vehicles/index.js',
    vehicleStats: './client/src/pages/vehicleStats/index.js',
    login: './client/src/pages/login/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'VroomLog',
      filename: 'vehicles/vehicleHistory.html',
      chunks:['vehicleHistory'],
      template:'./client/src/index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'VroomLog',
      filename: 'vehicles/index.html',
      chunks:['vehicles'],
      template:'./client/src/index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'VroomLog',
      filename: 'vehicles/vehicleStats.html',
      chunks:['vehicleStats'],
      template:'./client/src/index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'VroomLog',
      filename: 'vehicles/login.html',
      chunks:['login'],
      template:'./client/src/index.html',
    }),
  ],
  output: {
    filename: 'vehicles/[name].js',
    path: path.resolve(__dirname, 'client/dist'),
    clean: true
  },

};