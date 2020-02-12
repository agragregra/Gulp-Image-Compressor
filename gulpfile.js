var gulp                   = require('gulp'),
		imagemin               = require('gulp-imagemin'),
		plumber                = require("gulp-plumber"),
		imageminJpegRecompress = require('imagemin-jpeg-recompress'),
		imageminPngquant       = require('imagemin-pngquant'),
		newer                  = require('gulp-newer'),
		debug                  = require('gulp-debug');

exports.default = () => (
	gulp.src('_src/**/*')
	.pipe(newer('dest'))
	.pipe(plumber())
	.pipe(imagemin([
		imageminJpegRecompress({
			progressive: true,
			min: 70, max: 75
		}),
		imageminPngquant({quality: [0.7, 0.75]})
	]))
	.pipe(debug({
		title: 'Processing:',
		showCount: false
	}))
	.pipe(gulp.dest('dest'))
);
