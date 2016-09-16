var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
 

gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest(''))
});

gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(concat("all.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(''))
});

gulp.task('default',['js','css']);






