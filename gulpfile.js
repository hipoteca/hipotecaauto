var gulp        = require('gulp');
var sass        = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var connect     = require('gulp-connect');
var browserify  = require('gulp-browserify');



//gulp.task('default',['server','watch']);
gulp.task('default',['html','sass','js','fonts','img','server','watch']);

gulp.task('server', function() {
  connect.server({
    root: './public',
    livereload: true,
    port:5050
  })
});

gulp.task('sass', function () {
  return gulp.src('./dev/scss/style.scss')
   .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css'))
	.pipe(connect.reload());;
});


gulp.task('html',function(){
  gulp.src('./dev/**/**.html')
  .pipe(gulp.dest('./public'))
  .pipe(connect.reload());
});


gulp.task('fonts',function(){
  gulp.src('./dev/fonts/**/**.*')
  .pipe(gulp.dest('./public/fonts'))
   .pipe(connect.reload());
});

gulp.task('img',function(){
  gulp.src('./dev/img/**/**.*')
  .pipe(gulp.dest('./public/img'))
   .pipe(connect.reload());
});

gulp.task('js',function(){
  gulp.src('./dev/js/app.js')
  //.pipe(browserify())
  .pipe(gulp.dest('./public/js'))
  .pipe(connect.reload());
});

gulp.task('js2',function(){
  gulp.src('./dev/js/app2.js')
  .pipe(browserify())
  .pipe(gulp.dest('./public/js'))
  .pipe(connect.reload());
});



gulp.task('watch', function () {
  gulp.watch(['./dev/scss/**/**.scss'], ['sass']);
  gulp.watch(['./dev/js/**/**.js'], ['js','js2']);
  gulp.watch(['./dev/**/**.html'], ['html']);
});