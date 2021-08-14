const path = require('path');
const {merge} = require('webpack-merge');
const base = require('./webpack.config');

module.exports = merge(base, {
    
    mode: 'development',

    devServer: {
        publicPath: "/",
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
      },
});