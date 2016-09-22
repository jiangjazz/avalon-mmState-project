'use strict';

var path = require('path');
var fs = require('fs');

var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StateUrlCompilationPlugin = require('./StateUrlCompilationPlugin')

var excludeFromStats = [
    /node_modules[\\\/]/,
    /\.html/
];

var srcDir = path.resolve(process.cwd(), '');

var alias = {
    avalon     : 'script/avalon.shim',
    mmRequest  : 'script/mmRequest/mmRequest',
    mmPromise  : 'script/mmPromise/mmPromise',
    mmRouter   : 'script/mmRouter/mmRouter',
    mmHistory  : 'script/mmRouter/mmHistory',
    mmState    : 'script/mmRouter/mmState',
    route      : 'script/route'
}

function makeConf(options, env){
    var options = options || {};
    var env = env || 'development';
    var loaders = [
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /\.html$/, loader: 'html', exclude: [/.(ex|doc)[0-9]*\.html/]}
    ];
    if(env === 'master'){
        loaders.push({ test: /\.js$/, loader: 'strip-debug' });
    }
    var config = {
        entry: {
            'home': [
                'script/pages/home/home-route',
            ],
            'account': [
                'script/pages/setting/layout/settingLayout-route',
                'script/pages/setting/accountSet/accountSet-route',
                'script/pages/setting/accountSet/base/accountSetBase-route',
                'script/pages/setting/accountSet/remind/accountSetRemind-route',
            ],
            "lib": ['avalon', 'mmPromise', 'script/avalon.getModel.js', 'mmRequest', 'mmState'],
            "route" : ["route"]
        },
        output: {
            path: path.resolve('./'),
            filename: 'build/script/[name].js',
            chunkFilename: 'build/script/[name].js',
            publicPath: '/'
        },
        externals: {
            jquery: "jQuery", // 通过CDN - 把全局变量转成module
        },
        resolve: {
            root: [path.resolve(srcDir, 'build'), srcDir],
            alias: alias,
            extensions: ['', '.js', '.css', '.scss', '.png', '.jpg', '.jpeg']
        },

        module: {
            noParse: ['avalon', 'script/avalon.new', 'node_modules'],
            loaders: loaders
        },
        plugins: [
            new ExtractTextPlugin('build/css/[name].css',{
                allChunks: true
            }),
            new webpack.ProvidePlugin({
                //avalon: "avalon",
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "lib",
                minChunks: Infinity,
                filename: "build/script/lib.js"
            }),
            new StateUrlCompilationPlugin({})
        ],
        devServer: {
            stats: {
                cached: false,
                exclude: excludeFromStats,
                colors: true
            }
        }
    };

    return config;
}

module.exports = makeConf;
