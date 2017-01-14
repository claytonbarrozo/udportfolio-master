	var gulp = require('gulp'), 
		urglify = require ('gulp-uglify');

gulp.task('default', function() {
  // place code for your default task here
  gulp.src('js/*')
  .pipe(urglify())
  .pipe(gulp.dest('minjs'))
});