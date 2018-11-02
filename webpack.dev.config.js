var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var includes = [
    path.resolve(__dirname, 'app'),
    path.resolve(__dirname, 'client')
  ]
module.exports = {

    devtool: 'inline-source-map',

    entry:path.resolve(__dirname, './app/browser/index.js') ,

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.bundle.js',
    },

    module: {
        rules: [
            { test: /\.js$/, loaders: ['babel-loader'], include: includes },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') }
        ]
    },

    plugins: [

        // new ExtractTextPlugin('/main.css'),

        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify('development'),
                NODE_ENV: JSON.stringify('development')
            },
            '__NODE__': JSON.stringify(false),
        }),
    ],

};