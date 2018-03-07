/**
 * Gulp task to run the web server and live reload the changes in browser
 *
 * @usage
 *   $ gulp webserver --gulpfile webserver-gulpfile.js
 *          OR  if you have npm-run on the system
 *   $ npm-run  gulp webserver --gulpfile webserver-gulpfile.js
 */

var gulp   = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('./app')
    .pipe(server({
      livereload:       true,
      fallback: 'index.html',
      open:             true,
      log:              'debug',
      clientConsole:    true
    }));
});