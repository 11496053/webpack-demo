"use strict";

const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        app:'./src/index.js',
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath: '/'
    },
    plugins:[
        new HtmlwebpackPlugin({
            template:'./src/aaa.html',
            title:'new File Name',
            filename:'./src/view/a.html',
        }),
        new CleanWebpackPlugin(),
    ],
    devServer:{
        contentBase:'./dist',
        hot: true
    },
}





















