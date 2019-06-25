"use strict";

const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlwebpackPlugin({title:'hello output file'}),
        new CleanWebpackPlugin()
    ],
    devServer:{
        contentBase:'./dist'
    },
    publicPath:'/'
}





















