import gulp from 'gulp'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'

gulp.task('sass', () => {
  return gulp
    .src('./src/i-colors.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('sass:watch', () => {
  gulp.watch('./src/**/*.scss', ['sass'])
})
