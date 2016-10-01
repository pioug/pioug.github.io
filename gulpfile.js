const cssnano = require('gulp-cssnano')
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')

gulp.task('html', _ => {
  gulp.src('_site/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyJS: true,
      minifyCSS: true,
      removeComments: true,
      removeCommentsFromCDATA: true
    }))
    .pipe(gulp.dest('_site'))
})

gulp.task('css', _ => {
  gulp.src('_site/**/*')
    .pipe(cssnano({
      autoprefixer: {
        add: true,
        browsers: ['last 2 versions']
      }
    }))
    .pipe(gulp.dest('_site'))
})

gulp.task('images', _ => {
  gulp.src('_site/**/*.{jpg, png}')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('_site'))
})

gulp.task('default', ['html', 'images'])
