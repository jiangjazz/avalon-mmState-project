'use strict';
var gulp = require('gulp');
var clean = require('gulp-clean');                    //清空文件夹

var minimist = require('minimist');
// 引入环境配置
var knownOptions = {
    string: 'env',
    default: {
        env: process.env.NODE_ENV || 'development'
    }
};
var options = minimist(process.argv.slice(2), knownOptions);



var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),

    webserver = require('gulp-webserver'),//web服务

    gutil = require("gulp-util");
console.log(options.env);
var webpackConf = require('./webpack.config')({}, options.env);

var src = process.cwd() + '';

gulp.task('webpack-server', function(callback) {
    var WebpackDevServer = require('webpack-dev-server');

    var compiler = webpack(webpackConf);
    var devSvr = new WebpackDevServer(compiler, {
        //contentBase: './www',
        publicPath : webpackConf.output.publicPath,
        stats      : webpackConf.devServer.stats
    });

    devSvr.listen(8401, '0.0.0.0', function(err) {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);

        gutil.log('[webpack-dev-server]','http://localhost:8000');
    });
});
//清空生成文件
gulp.task('cleanDist', function(){
    return gulp.src([path.clean.js], {read: false})
        .pipe(clean())
        //.pipe(notify('JS清理文件夹完毕'));
});


gulp.task('webpack-build', ['cleanDist'], function(callback) {
    webpack(webpackConf, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});






//var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');                  //重命名
var notify = require('gulp-notify');                  //提醒
var path = {
    css: {
        watch: 'src/scss/**/*.scss',
        product: 'src/scss/style.scss',
        dest: 'build/css/dist/'
    },
    js: {
        watch: [
            'script/**/*.js',
            'script/**/*.html'
        ],
    },
    clean: {
        js: 'build/script/*.js'
    }
};

///**  sass编译4种风格 1.nested  2.expanded  3.compact 4.compressed 【嵌套，正常，紧凑，压缩】 **/
gulp.task('css', function() {
    return sass(path.css.product, { style: 'expanded', noCache: true, sourcemap: false})
        .pipe(rename( function(path) {
            path.basename += '.min';
            path.extname = '.css';
        }))
        .pipe(gulp.dest(path.css.dest))
        .pipe(notify('scss 编译完毕'));
});

gulp.task('run-webpack', function() {
    gulp.start('webpack-server');
});




gulp.task('watch', function(){
    gulp.watch(path.css.watch, ['css']);

    gulp.watch(path.js.watch, ['webpack-build']);
})







