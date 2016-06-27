'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

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

const jsPaths = {
  src: `${dirs.src}/static/js/*.js`,
  dest: `${dirs.dest}/static/js/`
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

gulp.task('jsbrowserify', () => {
  return browserify({entries: './src/static/js/achieves.js', extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(jsPaths.dest));
});

gulp.task('watch', ['default'], () => {
  gulp.watch(sassPaths.single, () => {
    gulp.run('sass');
  })
  gulp.watch(jsPaths.src, () => {
    gulp.run('jsbrowserify');
  })
})

gulp.task('default', ['sass', 'imagemin', 'jsbrowserify']);
gulp.task('dev', ['watch']);
