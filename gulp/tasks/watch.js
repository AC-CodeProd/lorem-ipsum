var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');
gulp.task('watch', function(callback){

    gulp.watch(config.index.src, ['index','browser-sync-reload']);
    gulp.watch(config.stylesheet.src, ['less','browser-sync-reload']);
    gulp.watch(config.scripts.src, ['scripts','browser-sync-reload']);

    gulp.watch(config.assets.images.src, ['images']);
    gulp.watch(config.assets.fonts.src, ['fonts']);

    gulp.watch(config.assets.fontsAwesome.src, ['font-awesome']);
});