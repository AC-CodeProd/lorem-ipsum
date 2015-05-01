var gulp = require('gulp');
var config = require('../config')
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
var runSequence = require('run-sequence');
var handleErrors = require('../util/handleErrors');
var browserSync = require('browser-sync');
gulp.task('index', function() {
    return gulp.src(config.index.src)
        .pipe(gulp.dest(config.index.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});