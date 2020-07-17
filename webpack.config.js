var path    = require('path');
var webpack = require("webpack");

var paths = {
    src : './src',
    dist: './dist'
};

module.exports = {
    mode: "production", //打包为开发模式

    entry: {
        lrz      : paths.src + '/lrz',
        'lrz.all': paths.src + '/lrz.all'
    },

    output: {
        filename     : "[name].bundle.js",
        chunkFilename: "[name].chunk.js",
        libraryTarget: 'umd',
        path: path.resolve(__dirname, "./dist"), //将js文件打包到dist/js的目录
    },

    resolve: {
        root: [
            paths.src + '/',
            paths.src + '/lib'
        ]
    }
};
