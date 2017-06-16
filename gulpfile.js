var gulp = require('gulp'), // Сообственно Gulp JS
    uglify = require('gulp-uglify'), // Минификация JS
    concat = require('gulp-concat'), // Склейка файлов
    imagemin = require('gulp-imagemin'), // Минификация изображений
    csso = require('gulp-csso'), // Минификация CSS
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'); // browserSync
    sass = require('gulp-sass'); // Конверстация SASS (SCSS) в CSS


gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe( sass() )
        .pipe(autoprefixer(['last 15 version']), ' > 1%', 'ie 8', 'ie 7', { cascade: true})
        .pipe( gulp.dest('app/css') )
        .pipe( browserSync.reload( { stream:true } ) )
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir : 'app',
        },
        notify: false
    });
});

gulp.task('watch',['browserSync'], function () {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});