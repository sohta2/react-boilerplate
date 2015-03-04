var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var browserSync = require('browser-sync');

gulp.task('default', ['watch']);

gulp.task('watch', ['browserify', 'browserSync'], function() {
  gulp.watch('app/**/**.{js,jsx}', ['browserify']);
});

gulp.task('browserify', function(){
  var b = browserify({
    entries: ['./app/browser.js']
  });
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('browserSync', function() {
  browserSync(null, {
    proxy: "http://localhost:5000",
    files: ["dist/**/*.*"],
    port: 3000,
    notify: true
  });
});
