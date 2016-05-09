var gulp = require('gulp');
var babel = require('gulp-babel');
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
