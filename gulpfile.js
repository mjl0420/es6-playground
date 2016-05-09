var gulp = require('gulp');
var babel = require('gulp-babel');
var traceur = require('gulp-traceur');
var ts = require('gulp-typescript');
var del = require('del');

gulp.task('clean', () => {
    return del('dist');
});

gulp.task('babel', gulp.series('clean', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
}));

gulp.task('traceur', gulp.series('clean', () => {
    return gulp.src('src/*.js')
        .pipe(traceur())
        .pipe(gulp.dest('dist'));
}));

gulp.task('ts', gulp.series('clean', () => {
    return gulp.src('src/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('dist'));
}));