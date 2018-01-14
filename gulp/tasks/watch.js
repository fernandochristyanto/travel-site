var gulp  = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create(); //auto refresh whenever save

//gulp-watch plugin (Task watcher)
gulp.task('watch', function(){
    browserSync.init({
        notify : false,
        server: {
            baseDir : "app"
        } 
    });
    watch('./app/index.html', function(){
        browserSync.reload(); //refreshes the browser when save
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });

    //watch for webpack
    watch('./app/assets/scripts/**/*.js', function(){
        gulp.start('scriptsRefresh');
    })
});

gulp.task('cssInject', ['styles'], function(){
    /*
        whenever the css is saved, the cssInject is started,
        but cssInject has 'styles' task dependency (postCSS)
        it will start the styles task and when it finishes, 
        the cssInjct hands the latest css to browsersync, so browsrsync
        can inject the latest css to web
    */
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

//webpack task, then restart browsersync
gulp.task('scriptsRefresh', ['scripts'],  function(){
    browserSync.reload();
});