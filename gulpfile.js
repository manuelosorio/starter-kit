var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    pug = require("gulp-pug"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

var paths ={
  styles: {
      src: "src/assets/css/**/*.sass",
      dest: "_dist/css"
  },
  html: {
    src: "src/**/*.pug",
    dest: "_dist/"
  }
}
function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}
function html() {
  return gulp
    .src(paths.html.src)
    .pipe(pug({
    }))
    .pipe(gulp.dest(paths.html.dest))
}
function reload() {
  browserSync.reload();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./_dist"
    }
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.html.src, html).on('change', browserSync.reload);
}
exports.watch = watch
exports.style = style
exports.html = html

var build = gulp.parallel([html, style], watch);

gulp.task('default', build)
