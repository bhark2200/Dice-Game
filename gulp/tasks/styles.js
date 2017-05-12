var gulp = require('gulp'),
    postCSS = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvar = require('postcss-simple-vars'),
    nestedcss = require('postcss-nested'),
    mixins = require('postcss-mixins'),
    importCss = require('postcss-import');


gulp.task('styles', function() {
    return gulp.src('./app/assets/css/styles.css')
        .pipe(postCSS([importCss, mixins, nestedcss, cssvar, autoprefixer]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/assets/temp'));
});