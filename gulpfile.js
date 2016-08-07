'use strict';

var gulp     = require('gulp');
var concat   = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var notify   = require("gulp-notify");

gulp.task('uglify-js', function () {
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/foundation-sites/dist/foundation.min.js',
    'bower_components/featherlight/src/featherlight.js',
    'js/app.js'
  ])
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('./js/'))
  .pipe(notify('JS Minificado'));
});

gulp.task('minify-css', function () {
  return gulp.src([
    'bower_components/foundation-sites/dist/foundation.css',
    'bower_components/font-awesome/css/font-awesome.css',
    'bower_components/featherlight/src/featherlight.css',
    'css/app.css'
  ])
  .pipe(cleanCss())
  .pipe(concat('app.min.css'))
  .pipe(gulp.dest('./css/'))
  .pipe(notify('CSS Minificado'));;
});

gulp.task('copy-fonts', function () {
  return gulp.src('bower_components/font-awesome/fonts/*')
  .pipe(gulp.dest('./fonts/'));
});

var watcher  = gulp.watch(['js/**/*', 'css/**/*'], ['uglify-js', 'minify-css']);

gulp.task('default', ['uglify-js', 'minify-css', 'copy-fonts']);
