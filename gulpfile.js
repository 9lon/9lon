var gulp = require('gulp');
var htmlReplace = require('gulp-html-replace');

gulp.task('default',function(){
     gulp.src('src/nx-system.html')
    .pipe(htmlReplace({
        'import': {
                src:null,
                tpl: 
                '<script src="../../jwt-decode/build/jwt-decode.min.js"></script>\n'+
                '<script src="../../axios/dist/axios.min.js"></script>\n'+

                '<link rel="import" href="../../polymer/polymer.html">\n'+
                '<link rel="import" href="../../app-localize-behavior/app-localize-behavior.html">\n'+
                '<link rel="import" href="nx-behavior.html">\n'+

                '<link rel="import" href="../../app-route/app-location.html">\n'+
                '<link rel="import" href="../../app-route/app-route.html">\n'+
                '<link rel="import" href="nx-param.html">'
        }
    }))
    .pipe(gulp.dest('dist/'));



    gulp.src('src/nx-param.html')
    .pipe(htmlReplace({
        'import': {
                src:null,
                tpl: 
                '<link rel="import" href="../../polymer/polymer.html">'
        }
    }))
    .pipe(gulp.dest('dist/'));



    gulp.src(['src/nx-behavior.html','src/init-system.html']).pipe(gulp.dest('dist/'));




});
