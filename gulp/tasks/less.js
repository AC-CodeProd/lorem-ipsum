var gulp = require('gulp');
var config = require('../config')
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
var handleErrors = require('../util/handleErrors');
var browserSync = require('browser-sync');
gulp.task('less', function() {
    return gulp.src(config.stylesheet.src.concat([
        '!src/less/components/**/*.less',
        '!src/less/modules/**/*.less',
        '!src/less/utilities/**/*.less'
        ]))
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .on('error', handleErrors)
        .pipe(plugins.autoprefixer([
            "ie >= 8",
            "ie_mob >= 10",
            "ff >= 30",
            "chrome >= 30",
            "safari >= 7",
            "opera >= 23",
            "ios >= 6",
            "android >= 4",
            "bb >= 10"
        ]), {
            cascade: true
        })
        .pipe(plugins.pleeease({
            mqpacker: false,
            less: true,
            rem: true
        }))
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(config.stylesheet.dest))
});