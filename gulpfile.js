const gulp = require("gulp"),
  clean = require("gulp-clean"),
  deploy = require('gulp-gh-pages'),
  sass = require("gulp-dart-sass"),
  postcss = require("gulp-postcss"),
  pug = require("gulp-pug"),
  imagemin = require('gulp-imagemin'),
  newer = require('gulp-newer'),
  plumber = require('gulp-plumber'),
  autoPrefixer = require("autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  browserSync = require("browser-sync").create(),
  bourbon = require('node-bourbon').includePaths,
  uglify = require('gulp-uglify-es').default,
  babelify = require('babelify'),
  resets = require('scss-resets').includePaths,
  buffer = require('vinyl-buffer'),
  browserify = require('browserify'),
  file = require('gulp-file'),
  tsify = require('tsify'),
  source = require("vinyl-source-stream");

let config = {
  cname: ''
}
let paths ={
  styles: {
    src: "src/assets/css/**/*.{sass,scss}",
    dest: "_dist/css"
  },
  fonts: {
    src: "src/assets/fonts/**",
    dest: "_dist/fonts"
  },
  html: {
    src: "src/**/*.pug",
    exclude: "!src/includes/*.pug",
    dest: "_dist/"
  },
  images: {
    src: "src/assets/images/**/*.{jpg,jpeg,png,svg}",
    dest: "_dist/images"
  },
  scripts: {
    core_js: "src/assets/scripts/core.ts",
    src: "src/assets/scripts/main.ts",
    watch: "src/assets/scripts/**/*.ts",
    dest: "_dist/scripts"
  },
}
function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({
      includePaths: resets.concat(bourbon),
      outputStyle: "expanded"
    }).on('error', sass.logError))
    .pipe(postcss([autoPrefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}
function html() {
  return gulp
    .src([
      paths.html.src,
      paths.html.exclude
    ])
    .pipe(pug({
      pretty: true
    }))
    .pipe(plumber())
    .pipe(gulp.dest(paths.html.dest))
}
function font() {
  return gulp
    .src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest))
}
function images () {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ progressive: true }),
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
const bundler = browserify({
  debug: true,
  entries: [paths.scripts.src],
  cache: {}
  })
  .plugin(tsify, {target: 'es6'})
  .transform(babelify, {
    extensions: ['.ts']
  }).bundle();
function scripts() {
  return bundler.pipe(source('main.js'))
    .pipe(gulp.dest(paths.scripts.dest))
}
function scriptsMinify() {
  return bundler.pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify()) // Figure out why I can't .pipe(uglify()) to work.
    .pipe(gulp.dest(paths.scripts.dest))
}
function fonts() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest))
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
    },
    open: false
  });
  gulp.watch(paths.styles.src, style).on('change', browserSync.reload);
  gulp.watch(paths.images.src, images).on('change', browserSync.reload);
  gulp.watch(paths.scripts.watch, scripts).on('change', browserSync.reload);
  gulp.watch(paths.fonts.src, scripts).on('change', browserSync.reload);
  gulp.watch(paths.html.src, html).on('change', browserSync.reload);
}

function ghPages() {
  return gulp.src("./_dist/**/*")
    .pipe(file('CNAME', config.cname))
    .pipe(deploy({
      remoteUrl: "https://github.com/manuelosorio/starter-kit.git",
      branch: "gh-pages"
    }))
}

exports.cleanDist = cleanDist
exports.watch = watch
exports.style = style
exports.font = font
exports.images = images
exports.html = html
exports.scripts = scripts
exports.scriptsMinify = scriptsMinify
exports.fonts = fonts


let build = gulp.series([html, style, fonts, images, scripts, fonts]);
let buildWatch = gulp.parallel([html, style, fonts, images, scriptsMinify, fonts], watch);

gulp.task('default', gulp.series(cleanDist, buildWatch))
gulp.task('static', gulp.series(cleanDist, build))
// scriptsMinify
gulp.task('deploy', gulp.series(cleanDist, build, ghPages));
