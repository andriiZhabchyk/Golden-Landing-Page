'use strict';

let gulp = require('gulp'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    jsmin = require('gulp-minify');

//compilation less to css
gulp.task('less-to-css', function () {
    return gulp.src('assets/less/*.less')
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('assets/css'));
});

//
gulp.task('concatCSS', function () {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/aos/dist/aos.css',
        'assets/css/style.css'
    ])
        .pipe(concat('build.min.css'))
        .pipe(gulp.dest('build/style'))
        .pipe(connect.reload());
});

//file to change & reload window
gulp.task('watch', function(){
    gulp.watch('assets/less/*.less', ['less-to-css']);
    gulp.watch('build/style/style.css', ['concatCSS']);
    gulp.watch('assets/js/*.js', ['min-js']);
});

gulp.task('min-js', function () {
    return gulp.src('assets/js/effects.js')
        .pipe(jsmin())
        .pipe(gulp.dest('build/js'))
        .pipe(connect.reload());
});

//start to connect with local server
gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('default', ['connect', 'watch']);
