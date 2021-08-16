const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),

    entry: "./scripts/index.js",

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        clean: true,
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: "ExtBel",
            template: "./index.html",
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),

        new MiniCssExtractPlugin(),
    ],

    module: {

        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.(sass|css)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
        ],
    },
};
