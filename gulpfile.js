var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('build',function(){
     gulp.src(['src/nx-system.html','src/nx-param.html','src/nx-behavior.html'])
    .pipe($.replace('../bower_components/','../../'))
    .pipe($.crisper({scriptInHead:false}))
    .pipe($.sourcemaps.init())
    .pipe($.if('*.js',$.babel({ presets: ['es2015'] })))
    .pipe($.if('*.js',$.uglify()))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/'))

});

gulp.task('watch',function(){
    gulp.watch('src/nx-system.html',['build']);
});

gulp.task('default',['build']);