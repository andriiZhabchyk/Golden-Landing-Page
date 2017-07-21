var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    connect = require('gulp-connect');

gulp.task('less-to-css', function () {
    gulp.src('assets/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/style'))
        .pipe(connect.reload());
});

gulp.task('watch',function(){
    gulp.watch('assets/less/*.less', ['less-to-css']);
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('default', ['connect', 'watch']);
