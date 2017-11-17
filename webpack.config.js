let webpack = require('webpack');
let path = require('path');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let NODE_ENV = (!process.env.NODE_ENV) ? "development" : process.env.NODE_ENV;
let isDevelopment = NODE_ENV !== "production";

let isAnalyze = process.env.ANALYZE === "true";


module.exports = {
    context: path.join(__dirname, "src"),
    devtool: isDevelopment ? "eval-source-map" : false,
    entry: "./js/root.js",
    resolve: {
        extensions: ['.jsx', '.js'],
        modules: [
            path.resolve('./js'),
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
        filename: "dest/bundle.min.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin((isDevelopment) ? {sourceMap: false, minimize: false} : {
            sourceMap: false,
            minimize: true
        })
    ],
    devServer: {
        proxy: {
            '/app': {
                target: 'http://127.0.0.1:8088',
                pathRewrite: {'/#': ''},
                secure: false,
                changeOrigin: true
            }
        }
    }
};

if (isAnalyze) {
    module.exports.plugins.push(new BundleAnalyzerPlugin());
}
