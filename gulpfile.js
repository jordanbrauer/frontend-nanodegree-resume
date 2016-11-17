/**
  * gulpfile.js
  *
  * Author: Jordan Brauer <jbrauer.inc@gmail.com>
  * Created: 11/2016
  *
  * Description: Task runners for compiling, building, and cleaning.
  */

/*---------------------------------------------*\
  Plugins
\*---------------------------------------------*/

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const imgMin = require('gulp-imagemin');
const imgResize = require('gulp-image-resize');
const autoprefix = require('gulp-autoprefixer');
const del = require('del');

/*---------------------------------------------*\
  Tasks
\*---------------------------------------------*/

// default task
// $ gulp [default]
gulp.task('default', () => {
  console.log('Gulp is installed and working! :)');
});
