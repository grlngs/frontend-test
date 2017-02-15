// Start with Gulp itself
var gulp         = require('gulp');

// Tiny parts of general functionality, added to gulp
var filter       = require('gulp-filter');
var sourcemaps   = require('gulp-sourcemaps');
var useref       = require('gulp-useref');
var sass         = require('gulp-sass');
var gulpif       = require('gulp-if');
var uglify       = require('gulp-uglify');
var cleanCSS     = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var jshint       = require('gulp-jshint');

// Provide a browsersync session for hot reloading
var browserSync  = require('browser-sync').create();
var wiredep      = require('wiredep').stream;

// Setup Paths and Patterns
var develop      = './app/';
var production   = './dist/';
var assets       = './assets/';

var paths = {
    html: develop + '/**/*.html',
    static: develop + assets + '/**/*',
    sass: {
        input: assets + '/scss/**/*.scss',
        output: develop + assets + '/css'
    },
    js: {
        input: assets + '/js/**/*.js',
        output: develop + assets + '/scripts',
    },
    bower: ['./bower_components','./bower_components/foundation-sites/scss']
}

// Other config variables
var config = {
    sass: {
        errLogToConsole: true,
        outputStyle: 'expanded',
        includePaths: paths.bower
    },
    autoprefixer: {
        browsers: [
            'last 2 versions',
            '> 5%',
            'Firefox ESR'
        ]
    }
}

// Static server
gulp.task('serve', function() {
  browserSync.init({
      proxy: "http://localhost/frontend-test/app/",
      online: true
   });
});

gulp.task('watch', ['serve'], function() {

    gulp
        // Watch the html-files in app for changes,
        // and reload connected browsers when something happens
        .watch(paths.html)
        .on('change', function(event){
            console.log('File ' + event.path + ' was ' + event.type + '.');
            browserSync.reload();
        });

    gulp
        // Watch the asset/scss folder for change,
        // and run sass task when something happens
        .watch(paths.sass.input, ['dev-sass'])
        // When there is a change,
        // log a message in the console
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });

    gulp
        // Watch the asset/js folder for change,
        // and run js task when something happens
        .watch(paths.js.input, ['dev-js'])
        // When there is a change,
        // log a message in the console
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });

    return gulp;
});


// Use wiredep to implement used bower components (Experimental...)
gulp.task('bower', function () {
    return gulp
        .src(paths.html)
        .pipe(wiredep())
        .pipe(gulp.dest(develop));
});

gulp.task('dev-sass', function () {
    return gulp
        .src(paths.sass.input)
        .pipe(sourcemaps.init())
        .pipe(sass(config.sass).on('error', sass.logError))
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.sass.output))
        .pipe(browserSync.stream())
        .resume();
});

gulp.task('dev-js', function() {
    return gulp
        .src(paths.js.input)
        .pipe(sourcemaps.init())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.js.output));
});

gulp.task('dist-sass', function () {
    return gulp
        .src(paths.sass.input)
        .pipe(sass(config.sass).on('error', sass.logError))
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(gulp.dest(paths.sass.output));
});


gulp.task('dist-copy-assets', function(){
    gulp.src([
            paths.static,
            '!' + paths.sass.output,
            '!' + paths.js.output,
            '!' + paths.sass.output + '/**',
            '!' + paths.js.output + '/**'
        ])
        .pipe(gulp.dest(production));
});

gulp.task('dist-html',['dist-sass'], function() {
    return gulp
        .src(paths.html)
        .pipe(useref())
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest(production));
});

// Tasks run in sequence when running 'gulp'
gulp.task('dist',           ['dist-copy-assets', 'dist-html']);
gulp.task('dev',            ['serve', 'dev-sass', 'dev-js', 'watch']);
gulp.task('default',        ['dev'] );

// TODO: Find proper documentation format for gulp
