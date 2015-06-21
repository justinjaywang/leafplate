var gulp =      require('gulp');
var watch =     require('gulp-watch');
var less =      require('gulp-less');
var minifycss = require('gulp-minify-css');
var rename =    require('gulp-rename');
var util =      require('gulp-util');

var paths = {
  // markup:  ['source/**/*.html'],
  // scripts: ['source/js/**/*.js'],
  styles:  ['source/less/all.less']
};

var dest = {
  build: ''
};
// dest.markup =  dest.build;
// dest.scripts = dest.build + '/js';
dest.styles =  dest.build;

// // markup
// gulp.task('markup', function() {
//   return gulp.src(paths.markup)
//     // .pipe(htmlify())
//     .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
//     .pipe(gulp.dest(dest.markup))
//     .on('error', util.log);
// });
  
// // scripts
// gulp.task('scripts', function() {
//   return gulp.src(paths.scripts)
//     // .pipe(coffee())
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest(dest.scripts))
//     .pipe(uglify())
//     .pipe(rename({extname: '.min.js'}))
//     .pipe(gulp.dest(dest.scripts))
//     .on('error', util.log);
// });
  
// styles
gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(less())
    .pipe(gulp.dest(dest.styles))
    .pipe(minifycss())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(dest.styles))
    .on('error', util.log);
});

// rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(['source/less/*.less'], ['styles']);
});

// default task, called when you run `gulp`
gulp.task('default', ['styles', 'watch']);
