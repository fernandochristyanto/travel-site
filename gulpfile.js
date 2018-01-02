var gulp  = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss'); //Filters css, accepts array of filters that wanted to be done
var autoprefixer = require('autoprefixer'); //Auto prefixes css that needs to be prefixed
var cssvars = require('postcss-simple-vars'); //enables making vars in css
var nested = require('postcss-nested'); //enables nested css

gulp.task('default', function(){
    console.log("Gulp task created");
});

/*
    * To run default task, type gulp in cmd,
    * To run specific function, type gulp <taskname>
*/

gulp.task('html', function(){
    console.log("Imagine sth useful being done to your html here");
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([nested, cssvars, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

//gulp-watch plugin
gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});