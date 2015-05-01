var gulp = require('gulp');
var config      = require('../config')
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
gulp.task('html5js', function() {
    return gulp.src(config.html5js.src)
    .pipe(gulp.dest(config.html5js.dest));
});