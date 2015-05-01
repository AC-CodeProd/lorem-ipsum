var gulp = require('gulp');
var config      = require('../config')
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
gulp.task('fonts', function() {
    return gulp.src(config.assets.fonts.src)
    .pipe(plugins.changed(config.assets.fonts.dest))
    .pipe(gulp.dest(config.assets.fonts.dest));
});
gulp.task('font-awesome', function() {
    return gulp.src(config.assets.fontsAwesome.src)
    .pipe(plugins.changed(config.assets.fontsAwesome.dest))
    .pipe(gulp.dest(config.assets.fontsAwesome.dest));
});