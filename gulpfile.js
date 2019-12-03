var gulp                   = require('gulp'),
		imagemin               = require('gulp-imagemin'),
		imageminJpegRecompress = require('imagemin-jpeg-recompress'),
		imageminPngquant       = require('imagemin-pngquant');
 
exports.default = () => (
	gulp.src('./_src/**/*')
	.pipe(imagemin([
		imageminJpegRecompress({
			progressive: true,
			min: 70, max: 75
		}),
		imageminPngquant({quality: [0.7, 0.75]})
	])).pipe(gulp.dest('dest'))
);
