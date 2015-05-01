var gulp = require('gulp');
var config = require('../config')
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
var runSequence = require('run-sequence');
var handleErrors = require('../util/handleErrors');


gulp.task('images', function() {
    return gulp.src(config.assets.images.src)
        .pipe(plugins.changed(config.assets.images.dest))
        .pipe(plugins.imagemin({
            optimizationLevel: 7
        }))
        .pipe(gulp.dest(config.assets.images.dest));
});