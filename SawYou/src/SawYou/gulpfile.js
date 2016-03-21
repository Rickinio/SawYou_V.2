/// <binding BeforeBuild='angular2' />
"use strict";

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify");

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.concatJsDest = paths.webroot + "js/site.min.js";

gulp.task("angular2:moveLibs", function () {
    return gulp.src([
            "node_modules/angular2/bundles/angular2-polyfills.js",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/systemjs/dist/system-polyfills.js",
            "node_modules/rxjs/bundles/Rx.js",
            "node_modules/angular2/bundles/angular2.dev.js"
    ])
        .pipe(gulp.dest(paths.webroot + "Angular"));

});

gulp.task("angular2:moveJs", function () {
    return gulp.src(["Angular/**/*.js"])
        .pipe(gulp.dest(paths.webroot + "Angular/app/"));

});


gulp.task("angular2", ["angular2:moveLibs", "angular2:moveJs"])