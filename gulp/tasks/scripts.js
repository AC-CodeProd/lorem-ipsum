var gulp = require('gulp');
var config = require('../config')
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});

var handleErrors = require('../util/handleErrors');

gulp.task('scripts', function() {
    return gulp.src([
            "./libraries/modernizr/modernizr.js",
            "./src/vendor/vendor.js",
        ].concat(config.scripts.src))
        .pipe(plugins.changed(config.scripts.dest))
        .pipe(plugins.plumber())
        .pipe(plugins.uglify())
        .pipe(plugins.jshint())
        .pipe(plugins.concat('vendors.min.js'))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.scripts.dest));
});