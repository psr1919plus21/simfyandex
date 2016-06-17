'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

const dirs = {
  src: './src',
  dest: './build'
}

const sassPaths = {
  src: `${dirs.src}/static/sass/achieves.all.scss`,
  single: `${dirs.src}/static/sass/**/*.scss`,
  dest: `${dirs.dest}/css/`
}

gulp.task('sass', () => {
  return gulp.src(sassPaths.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(sassPaths.dest));
})

gulp.task('watch', ['default'], () => {
  gulp.watch(sassPaths.single, () => {
    gulp.run('sass');
  })
})

gulp.task('default', ['sass']);
gulp.task('dev', ['watch']);
