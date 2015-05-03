var destPath = './build';
var srcPath = './src';
var assetsPath = '/assets';
var gulpPath = './gulp';

//external
var fontsAwesomePath = './libraries/font-awesome/fonts';
var html5jsPath = './html5shiv/dist/html5shiv.min.js';

module.exports = {
    browserSync: {
        server: {
            baseDir: destPath
        }
    },
    index: {
        src: [srcPath + "/index.html"],
        dest: destPath
    },
    html5js: {
        src: [html5jsPath],
        dest: destPath+ "/js"
    },
    scripts: {
        src: [srcPath + "/js/**/*.js"],
        dest: destPath + "/js"
    },
    stylesheet: {
        src: [srcPath + "/less/**/*.less"],
        dest: destPath + "/css"
    },
    assets: {
        images: {
            src: srcPath + assetsPath + "/images/**",
            dest: destPath + assetsPath + "/images"
        },
        fonts: {
            src: srcPath + assetsPath + "/fonts/**",
            dest: destPath + assetsPath + "/fonts"
        },
        fontsAwesome: {
            src: fontsAwesomePath + "/**",
            dest: destPath + assetsPath + "/fonts/font-awesome"
        },
        files: {
            src: srcPath + assetsPath + "/files/**",
            dest: destPath + assetsPath + "/files"
        }
    },
    favicons:{
        src: srcPath + "/favicons/favicon.ico",
        dest: destPath+ "/favicons"
    }
};