var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('css', function(){
    return gulp.src('assets/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('css-w', function(){
    return gulp.watch([
        'assets/sass/*.scss',
    ], ['css']);
});