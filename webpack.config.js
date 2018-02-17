let webpack = require('webpack');
let path = require('path');
const package = require('./package');
let NODE_ENV = (!process.env.NODE_ENV) ? "development" : process.env.NODE_ENV;
let isDevelopment = NODE_ENV !== "production";
console.log(isDevelopment + ":isDev");


let plugins = [new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(NODE_ENV)})];
let entry;
let filename;

if (isDevelopment) {
    entry = "root.js";
    filename = package.name + ".js";
} else {
    plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: false, minimize: true}));
    entry = __dirname + "/src/index.js";
    filename = package.name + ".min.js";
}


let config = {
    context: path.join(__dirname, "src"),
    devtool: isDevelopment ? "eval-source-map" : false,
    entry: entry,
    resolve: {
        extensions: ['.scss', '.jsx', '.js'],
        modules: [
            path.resolve('./src/js'),
            path.resolve('./src/style'),
            path.resolve('./node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            },
            {
                test: /\.s?css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                loaders: ['svg-url-loader']
            }
        ]
    },
    output: {
        path: __dirname,
        filename: "lib/" + filename
    },
    plugins: plugins
};


module.exports = config;