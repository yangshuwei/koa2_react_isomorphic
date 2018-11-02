const path = require('path');
const webpack = require('webpack');
var includes = [
    path.resolve(__dirname, 'app'),
    path.resolve(__dirname, 'client')
  ]
module.exports = {
    entry: path.resolve(__dirname, './app/browser'),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    // module: {
    //     loaders: [{    // babel loader
    //         test: /\.js|.jsx$/,
    //         exclude: /node_modules/,
    //         loader: "babel",
    //         query: {
    //           presets: ['es2015', 'react', 'state-1']
    //         }
    //     }]
    // }
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                loader: "babel-loader",
                include: includes,
            }
        ]
    }
}