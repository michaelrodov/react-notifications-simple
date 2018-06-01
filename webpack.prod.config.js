let webpack = require('webpack');
let path = require('path');
const packagejson = require('./package.json');
const merge = require('webpack-merge');
let webpackBaseConfig = require("./webpack.base.config");

console.log("loading prod");

webpackBaseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: false, minimize: true}));

module.exports = merge(webpackBaseConfig, {
    entry: "./src/index.js",
    externals: {
        react: 'react',
        "prop-types":'prop-types'
    },
    output: {
        library: packagejson.name,
        libraryTarget: "umd",
        path: path.join(__dirname, "lib"),
        filename: packagejson.name + ".min.js"
    }
});
