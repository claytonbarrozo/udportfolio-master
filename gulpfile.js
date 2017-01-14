var gulp = require ('gulp'),
	imagemin = require ('gulp-imagemin');

// Iamge Task
// Compress
gulp.task ('image',function() {
gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img/*'));
});