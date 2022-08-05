const concat = require('gulp-concat');
const {src, dest} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
require('dotenv').config();

/**
 * Used to concat all javascript files
 */
async function JSconcat() {
  return src([
    './dist/*.js',
  ])
      .pipe(sourcemaps.init())
      .pipe(concat('all.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(dest('./dist/combine'));
}

module.exports.concat = JSconcat;

