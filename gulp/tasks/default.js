var gulp = require('gulp');
var runSequence = require('run-sequence');
gulp.task('default',  function(callback) {
    runSequence(
        'clean',
        'index',
        'scripts',
        'html5js',
        'less',
        'fonts',
        'font-awesome',
        'images',
        'browserSync',
        'watch',
        callback
        );
});