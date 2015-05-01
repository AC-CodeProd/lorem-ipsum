/*var gulp        = require('gulp');
var protractor = plugins.protractor.protractor;
var webdriver_update = plugins.protractor.webdriver_update;
var webdriver_standalone = plugins.protractor.webdriver_standalone;
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
gulp.task('webdriver-update', webdriver_update);
gulp.task('webdriver-start', ["webdriver-update"], webdriver_standalone);

gulp.task('tests-protractor', function(cb) {
    return gulp.src('tests/scenarios/functional-tests.js', {
        read: false
    }).pipe(protractor({
        configFile: 'tests/protractor.config.js'
    }));
});

gulp.task('tests', ['browserSync'], function() {
    gulp.start('tests-protractor');
});*/