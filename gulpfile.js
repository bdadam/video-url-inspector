var gulp = require('gulp');

gulp.task('test', function () {
	var mocha = require('gulp-mocha');
    return gulp.src('tests/**/*.js', { read: false }).pipe(mocha({reporter: 'list'}));
});

gulp.task('browserify', function() {
	var browserify = require('gulp-browserify');
	var rename = require('gulp-rename');

    return gulp.src('./index.js')
		        .pipe(browserify({
		          debug : false,
		          standalone: 'videoUrlInspector',
		          transform: [
		          	[{ global: true }, 'uglifyify']
		          ]
		        }))
		        .pipe(rename('videoUrlInspector.js'))
		        .pipe(gulp.dest('build'))
});

gulp.task('default', ['build']);

gulp.task('build', ['test', 'browserify']);