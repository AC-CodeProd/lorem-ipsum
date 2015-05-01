var gulp = require('gulp');
var config = require('../config')
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
gulp.task('files', function() {
    return gulp.src(config.assets.files.src)
        .pipe(plugins.changed(config.assets.files.dest))
        .pipe(gulp.dest(config.assets.files.dest));
});