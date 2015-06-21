var gulp =          require('gulp');
// var clean =         require('gulp-clean');
var watch =         require('gulp-watch');
// var htmlmin =       require('gulp-htmlmin');
// var concat =        require('gulp-concat');
// var uglify =        require('gulp-uglify');
var less =          require('gulp-less');
// var autoprefixer =  require('gulp-autoprefixer');
var minifycss =     require('gulp-minify-css');
var rename =        require('gulp-rename');
// var cache =         require('gulp-cache');
// var changed =       require('gulp-changed');
var util =          require('gulp-util');

var paths = {
  // markup:     ['source/**/*.html'],
  // scripts:    ['source/js/**/*.js'],
  styles:     ['source/less/all.less']
};

var dest = {
  build:  ''
};
// dest.markup =     dest.build;
// dest.scripts =    dest.build + '/js';
dest.styles =     dest.build;

// // minify HTML
// gulp.task('markup', function() {
//   return gulp.src(paths.markup)
//     // .pipe(htmlify())
//     .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
//     .pipe(gulp.dest(dest.markup))
//     .on('error', util.log);
// });
  
// // minify and copy all JavaScript (except vendor scripts)
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
  
// compile Less, and minify the resulting CSS
gulp.task('styles', function () {
  return gulp.src(paths.styles)
    // .pipe(changed(dest.styles)) // exclude unmodified files
    .pipe(less())
    // .pipe(autoprefixer())
    .pipe(gulp.dest(dest.styles))
    .pipe(minifycss())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(dest.styles))
    .on('error', util.log);
});

// // copy over miscellaneous files
// gulp.src('source/fonts/icons.*')
//   .pipe(gulp.dest('build/fonts'))
//   .on('error', util.log);

// gulp.src('source/.htaccess')
//   .pipe(gulp.dest('build'))
//   .on('error', util.log);

// gulp.src('source/robots.txt')
//   .pipe(gulp.dest('build'))
//   .on('error', util.log);

// gulp.src('source/favicon.ico')
//   .pipe(gulp.dest('build'))
//   .on('error', util.log);
  
// rerun the task when a file changes
gulp.task('watch', function() {
  // gulp.watch(paths.markup, ['markup']);
  gulp.watch(['source/less/*.less'], ['styles']);
});

// default task (called when you run `gulp` from cli)
gulp.task('default', ['styles', 'watch']);
