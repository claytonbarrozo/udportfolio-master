var gulp = require ('gulp'),
	imagemin = require ('gulp-imagemin');

// Iamge Task
// Compress
gulp.task ('image',function() {
gulp.src('views/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('views/images'));
});