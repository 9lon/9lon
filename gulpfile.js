var gulp = require('gulp');
// var vulcanize = require('gulp-vulcanize');



// gulp.task('copy',function(){
//   return gulp.src(
//     [
//       'service-worker.js',
//       'favicon.ico',
//       'bower.json'
//     ]
//   )
//   .pipe(gulp.dest('dist'));
// });

// gulp.task('copyLib',function(){
//   return gulp.src(
//     [
//       'bower_components/jwt-decode/build/jwt-decode.min.js',
//       'bower_components/webcomponentsjs/webcomponents-lite.min.js'
//     ]
//   )
//   .pipe(gulp.dest('dist/js'));
// });

// gulp.task('copyApp',function(){
//   return gulp.src(
//     [
//       'src/*apps/**/*',
//       'src/*template/**/*'
//     ]
//   )
//   .pipe(gulp.dest('dist/src'));
// });

// gulp.task('vulcanize',function(){
//   return gulp.src('src/nx-system.html')
//   .pipe(vulcanize({
//     stripComments:true,
//     inlineScripts:true,
//     inlineCss:true
//   }))
//   .pipe(gulp.dest('dist/src'));
// });


// gulp.task('default', ['vulcanize','copy','copyLib','copyApp']);



gulp.task('dist',function(){
  return gulp.src(
    [
      'src/nx-system.html',
      'src/nx-param.html',
      'src/nx-behavior.html'
    ]
  )
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['dist']);
