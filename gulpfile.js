var gulp = require('gulp');
var webserver = require('gulp-webserver');
var plumber = require("gulp-plumber");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin  = require( 'gulp-cssmin' );
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('webserver', function() {
  gulp.src('./app')
    .pipe(webserver());
});

gulp.task("sass", function() {
  gulp.src("./app/_scss/**/*scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./app/styles"));
});

gulp.task('cssmin', function () {
  gulp.src(['./app/styles/**/*.css', '!./app/styles/min/**/*.css'])
    .pipe(plumber())
    .pipe(cssmin())
    .pipe(gulp.dest('./app/styles/min'));
});

gulp.task('uglify', function() {
  gulp.src('./app/_js/**/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('./app/scripts'));
});

gulp.task("default", ['webserver'], function() {
  gulp.start(['sass']);
  gulp.start(['cssmin']);
  gulp.start(['uglify']);

  watch(['./app/_scss/**/*scss'], function(event){
    gulp.start(['sass']);
  });
  watch(['./app/styles/**/*.css', '!./app/styles/min/**/*.css'], function(event){
    gulp.start(['cssmin']);
  });
  watch(['./app/_js/**/*.js'], function(event){
    gulp.start(['uglify']);
  });
});
