'use strict';

let gulp = require('gulp'),
    minifyjs = require('gulp-js-minify'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    connect = require('gulp-connect');

//compilation less to css
gulp.task('less-to-css', function () {
    gulp.src('assets/less/*.less')
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('dist/style'))
        .pipe(connect.reload());
});

//file to change & reload window
gulp.task('watch', function(){
    gulp.watch('assets/less/*.less', ['less-to-css']);
    gulp.watch('assets/js/*.js', ['min-js']);
});

gulp.task('min-js', function () {
    return gulp.src(['assets/js/*.js', '!/node_modules/**'])
        .pipe(minifyjs())
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

//start to connect with local server
gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('default', ['connect', 'watch']);
