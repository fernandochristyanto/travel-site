var gulp  = require('gulp');
var postcss = require('gulp-postcss'); //Filters css, accepts array of filters that wanted to be done
var autoprefixer = require('autoprefixer'); //Auto prefixes css that needs to be prefixed
var cssvars = require('postcss-simple-vars'); //enables making vars in css
var nested = require('postcss-nested'); //enables nested css
var cssImport = require('postcss-import'); //makes @import into a whole css
var mixins = require('postcss-mixins'); 

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer]))
    .on('error', function(error){
        console.log(error.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});