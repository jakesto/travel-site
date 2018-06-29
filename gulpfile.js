var gulp = require('gulp'),
  watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("Hooray - you created a gulp task.")
})

gulp.task('html', function(){
  console.log("Something useful done here.")
})

gulp.task('styles', function(){
  console.log("postcss tasks running here")
})

gulp.task('watch',function(){

  watch('./app/index.html',function(){
    gulp.start('html')
  })

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles')
  })
})
