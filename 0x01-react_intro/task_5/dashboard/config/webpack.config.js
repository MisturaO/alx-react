const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    /*{
        //  main: path.resolve(__dirname, './src/index.js'), // here's absolute path to the entry point file
      },*/
      output: {
        filename: 'bundle.js',
        //  path: path.resolve(__dirname, '../dist') // I used the relative path (../) because the dist directory is one dir up from here.
      },
      mode: 'development',
      plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR(enables hot reload)
      ],
      devServer: {
        static: path.resolve(__dirname, '../dist'), // Specify the directory to serve.
        hot: true, // Enable HMR in the dev server(enables hot module reload in dev server)
        open: true,
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
                {
                    // This will optimize images loaded by file-loader
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                        quality: 65,
                      },
                      // Add more image optimization options as needed
                    },
                },
            ],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ],
      },
      resolve: {
        extensions: [".js", ".jsx"],
        modules: ['src', 'node_modules'],
      },
      devtool: 'inline-source-map', // Enable inline source maps
};
