var gulp = require('gulp');
var concat = require('gulp-concat');
var {src,dest,series} = require('gulp');
var minify = require('gulp-minify');
var sourcemaps = require('gulp-sourcemaps');
var ejs = require('gulp-ejs');
var log = require('fancy-log');
var css = require('gulp-clean-css');
var del = require('del');
var html = require('gulp-html');
var jsonConfig = require('gulp-json-config');

async function JSconcat() {
    return src([
      "./src/init.js",
      "./src/parkersCustomFunctions.js",
      "./src/util.js",
      "./src/server.js",
    ])
      .pipe(sourcemaps.init())
      .pipe(concat("all.js"))
      .pipe(sourcemaps.write("."))
      .pipe(dest("./dist/"));
  }


