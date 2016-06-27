'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';

const dirs = {
  src: './src',
  dest: './build'
}

const sassPaths = {
  src: `${dirs.src}/static/sass/achieves.all.scss`,
  single: `${dirs.src}/static/sass/**/*.scss`,
  dest: `${dirs.dest}/static/css/`
}

const imgPaths = {
  src: `${dirs.src}/static/img/*.*`,
  dest: `${dirs.dest}/static/img/`
}

gulp.task('sass', () => {
  return gulp.src(sassPaths.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(sassPaths.dest));
})

gulp.task('imagemin', () => {
  return gulp.src(imgPaths.src)
    .pipe(imagemin())
    .pipe(gulp.dest(imgPaths.dest));
})

gulp.task('watch', ['default'], () => {
  gulp.watch(sassPaths.single, () => {
    gulp.run('sass');
  })
})

gulp.task('default', ['sass', 'imagemin']);
gulp.task('dev', ['watch']);
