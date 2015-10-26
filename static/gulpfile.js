var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),

    tinypng = require('gulp-tinypng'),
    livereload = require('gulp-livereload'),
    //重要！！！当前目录
    basepath = 'webpage/';


//删除导出文件
gulp.task('clean',function(){
    gulp.src(basepath+'dist')
        .pipe(clean())
});

//js文件合并
gulp.task('js',function(){
    clean();
    gulp.src(basepath+'js/*.js')
        .pipe(jshint())
        // .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest(basepath+'dist'))
});
//图片压缩-需要注册API，500个图标后需要用新ID
gulp.task('tinypng',function(){
    gulp.src(basepath+'vncard/images/**')
        .pipe(tinypng('bXvmg1C6VA1cFiFObW7kLRs3pvreNBvY'))
        .pipe(gulp.dest(basepath+'dist'))
});


gulp.task('default', function() {
    // livereload.listen();
    connect.server({
        port:8090,
        root:basepath,
        // livereload:true
    });
    // gulp.watch([basepath+'**'], function(event) {
    //     livereload.changed(event.path);
    // });
});
