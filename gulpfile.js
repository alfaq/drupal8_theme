var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var imageop = require('gulp-image-optimization');


gulp.task('copy:jslib', function () {
    return gulp.src('./source/js/lib/**')
        .pipe(gulp.dest('./build/js/lib'));
});

gulp.task('copy:csslib', function () {
    return gulp.src('./source/scss/lib/**')
        .pipe(gulp.dest('./build/css/lib'));
});

gulp.task('copy:fonts', function () {
    return gulp.src('./source/fonts/**')
        .pipe(gulp.dest('./build/css/fonts/'));
});

gulp.task('copy:images', function() {
    return gulp.src('./source/images/**')
        .pipe(imageop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('./build/images/'));
});

gulp.task('minify', function () {
    gulp.src('source/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('styles', function() {
    gulp.src('source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css/'))
});

gulp.task('build', ['copy:jslib', 'copy:csslib', 'copy:fonts', 'copy:images', 'minify', 'styles']);

//Watch task
gulp.task('default',function() {
//, ['copy:jslib'], ['copy:csslib'], ['copy:fonts'], ['copy:images']
    gulp.watch('source/scss/**/*.scss',['styles']);
});


