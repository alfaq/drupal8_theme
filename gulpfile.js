var gulp = require('gulp');
var sass = require('gulp-sass');


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

gulp.task('styles', function() {
    gulp.src('source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('source/scss/**/*.scss',['styles']);
});
