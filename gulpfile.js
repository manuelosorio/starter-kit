const gulp = require("gulp");
const clean = require("gulp-clean");
const { publish } = require('gh-pages');
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const pug = require("gulp-pug");
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const autoPrefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const bourbon = require('node-bourbon').includePaths;
const uglify = require('gulp-uglify-es').default;
const babelify = require('babelify');
const resets = require('scss-resets').includePaths;
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const file = require('gulp-file');
const tsify = require('tsify');
const source = require("vinyl-source-stream");
const glob = require('glob');
const packer = require("@hail2u/css-mqpacker");
const purgeCSS = require('@fullhuman/postcss-purgecss');

let config = {
  cname: 'starter-kit.manuelosorio.me'
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
    watch: "src/assets/scripts/**/*.{ts, tsx}",
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
    .pipe(postcss([
      autoPrefixer()],
      packer({
        sort: true
      }),
      purgeCSS({
        content: [
          paths.html.dest + '**/*.html'
        ]
      })
    ))
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
    .pipe(gulp.dest(paths.html.dest));
}
function font() {
  return gulp
    .src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest))
}
async function images() {
  const gulpImagemin = await import('gulp-imagemin');
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(
      gulpImagemin.default([
        gulpImagemin.gifsicle({ interlaced: true }),
        gulpImagemin.mozjpeg({ progressive: true }),
        gulpImagemin.optipng({ optimizationLevel: 5 }),
        gulpImagemin.svgo({
          plugins: [
            { removeViewBox: false },
            { collapseGroups: true }
          ]
        })
      ])

    )
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream())
}
function scripts() {
  return glob(paths.scripts.watch, {}, (err, files) => {
    if (err) {
      console.log('Error')
    }
    const b = browserify({
      debug: true,
      cache: {},
      packageCache: {},
    });
    files.forEach((file) => {
      console.log(file)
      b.add(file);
    })
    b.plugin(tsify)
      .transform(babelify, {
        extensions: ['.ts'],
      })
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest(paths.scripts.dest))
  })
}
function scriptsMinify() {
  const bundler = browserify({
    debug: true,
    baseDir: '.',
    entries: [paths.scripts.src],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .transform(babelify, {
      extensions: ['.ts']
    }).bundle();
  return bundler.pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
}
function fonts() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest))
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
  gulp.watch(paths.fonts.src, fonts).on('change', browserSync.reload);
  gulp.watch(paths.html.src, html).on('change', browserSync.reload);
}

function ghPages() {
  gulp.src("./_dist/**/*")
    .pipe(file('CNAME', config.cname))
    .pipe(gulp.dest('./.publish'));

  return publish(
    ".publish",
    {
      remoteUrl: "https://github.com/manuelosorio/starter-kit.git",
      branch: 'gh-pages',
      // cacheDir: '.publish',
      message: 'Update ' + new Date().toISOString()
    },
    (err) => {
      if (err) {
        console.log(err)
      }
    }
  );
}

exports.cleanDist = cleanDist
exports.watch = watch
exports.style = style
exports.font = font
exports.images = images
exports.html = html
exports.scripts = scripts
exports.scriptsMinify = scriptsMinify
exports.ghPages = ghPages

let build = gulp.parallel([html, fonts, scriptsMinify, fonts], style, images,);
let buildWatch = gulp.series(gulp.parallel([html, fonts, scripts, fonts]), images, style, watch);
let staticBuild = gulp.series(cleanDist, build)

gulp.task('default', gulp.series(cleanDist, buildWatch))
gulp.task('static', gulp.series(staticBuild))
// scriptsMinify
gulp.task('deploy', gulp.series(staticBuild, ghPages));
