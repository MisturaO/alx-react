const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
      },
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
      devServer: {
        static: './dist',
        hot: true, // Enable HMR in the dev server
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable Hot Middleware (HMR) i.e. enables webpack server with hot reloading
      ],
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: 'file-loader',
          },
        ],
      },
      devtool: 'inline-source-map', // Enables inline source maps
};
