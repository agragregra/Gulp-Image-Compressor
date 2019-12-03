var gulp                   = require('gulp'),
		imagemin               = require('gulp-imagemin'),
		imageminJpegRecompress = require('imagemin-jpeg-recompress'),
		imageminPngquant       = require('imagemin-pngquant'),
		newer                  = require('gulp-newer');
 
exports.default = () => (
	gulp.src('_src/**/*')
	.pipe(newer('dest'))
	.pipe(imagemin([
		imageminJpegRecompress({
			progressive: true,
			min: 70, max: 75
		}),
		imageminPngquant({quality: [0.7, 0.75]})
	])).pipe(gulp.dest('dest'))
);
