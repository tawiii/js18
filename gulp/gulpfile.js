var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
 

gulp.task('default', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest(''));
});

gulp.task('default', function (cb) {
  pump([
      gulp.src('all.js'),
      uglify(),
      gulp.dest('')
    ],
    cb
  );
});


gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("all.css"))
    .pipe(gulp.dest(''));
});

gulp.task('default', function() {
  return gulp.src('all.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(''));
});





