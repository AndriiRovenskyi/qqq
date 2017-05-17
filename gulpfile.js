var gulp = require('gulp');
// var less = require('gulp-less');


gulp.task('html',function(){
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('build'))
})

gulp.task('css',function(){
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('build'))
})
gulp.task('js', function(){
    return gulp.src('app/**/*.js')
        .pipe(gulp.dest('build'))
})
gulp.task('watch',function(){
    gulp.watch('./app/**/*.css',['css'])
    gulp.watch('./app/**/*.html', ['html'])
    gulp.watch('./app/**/*.js',['js'])
})



gulp.task('default', ['watch', 'js', 'css', 'html']);