const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync').create();
const newer        = require('gulp-newer');
const sass         = require('gulp-sass');
const size         = require('gulp-size');
const sourcemaps   = require('gulp-sourcemaps');

const config = {
  browserSync: {
    'localhost': {
      'server': {
        'baseDir': './'
      },
      'port': 9000,
      'notify': false
    }
  },
  css: {
    src: './src/**/*.scss',
    dest: './dist/css'
  }
}

/* --------------------------------------------------------------------------
   Server
   -------------------------------------------------------------------------- */

const reload = browserSync.reload;

const browserSyncTask = () => {
  gulp.watch(config.css.src, ['sass', reload]);
};

gulp.task('s', () => {
  browserSync.init(config.browserSync.localhost);
  browserSyncTask();
});

/* --------------------------------------------------------------------------
   Styles
   -------------------------------------------------------------------------- */

gulp.task('sass', () => {
  gulp.src(config.css.src)
    .pipe(newer(config.css.dest))
    .pipe(sourcemaps.init())
    .pipe(sass({
      // outputStyle: 'nested', // libsass doesn't support expanded yet
      precision: 4,
      includePaths: ['.']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.css.dest))
    // Minify styles
    // .pipe(cleanCSS ({
    //   // aggressiveMerging: false,
    //   keepSpecialComments: 0
    // }))
    .pipe(size({title: 'styles'}))
    .pipe(gulp.dest(config.css.dest))
});
