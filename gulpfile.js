var gulp = require("gulp"),
    clean = require("gulp-clean"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    pug = require("gulp-pug"),
    imagemin = require('gulp-imagemin'),
    newer = require('gulp-newer'),
    plumber = require('gulp-plumber'),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

var paths ={
  styles: {
      src: "src/assets/css/**/*.{sass,scss}",
      dest: "_dist/css"
  },
  html: {
    src: "src/**/*.pug",
    dest: "_dist/"
  },
  images: {
    src: "src/assets/images/**/*.{jpg,png,svg}",
    dest: "_dist/images"
  }
}
function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }))
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}
function html() {
  return gulp
    .src(paths.html.src)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(paths.html.dest))
}

function images () {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream());
}

function reload() {
  browserSync.reload();
}
function cleanDist() {
  return gulp.src('./_dist', {allowEmpty:true})
        .pipe(clean())
}
function watch() {
  browserSync.init({
    server: {
      baseDir: "./_dist"
    }
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.html.src, html).on('change', browserSync.reload);
}
exports.watch = watch
exports.style = style
exports.images = images
exports.html = html
exports.cleanDist = cleanDist

var build = gulp.parallel([cleanDist,[html, style, images]], watch);

gulp.task('default', build)
