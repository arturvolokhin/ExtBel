const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.config');

module.exports = merge(base, {
    
    mode: 'development',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },

    devServer: {
        publicPath: "/",
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 9000,
        hot: true,
      },
});