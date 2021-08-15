const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),

    entry: "./scripts/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
        publicPath: "/",
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
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.(sass|css)$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
