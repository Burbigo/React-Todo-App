var gulp = require('gulp');
var typescript = require('gulp-typescript');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('server', function () {
    browserSync.init({
        server: { baseDir: 'dist' }
    });
});

gulp.task('scripts', function () {
    gulp.src('./src/component/*.+(ts|tsx)')
        .pipe(typescript())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/component/'));
});

gulp.task('styles', function () {
    gulp.src('./src/assets/styles/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/assets/styles'));
});

gulp.task('copy', function () {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('./src/component/*.+(ts|tsx)', ['scripts']).on('change', reload);
    gulp.watch('./src/assets/styles/*.scss', ['styles']).on('change', reload);
    gulp.watch('./src/*.html', ['copy']).on('change', reload);
});

gulp.task('on-change', function () {

});

gulp.task('default', ['start']);

gulp.task('start', ['scripts', 'styles', 'copy', 'server', 'watch', 'on-change']);
