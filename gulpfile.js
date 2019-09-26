var gulp = requier('gulp');

function defaultSomeTask(done) {
    console.log("All is working!");
    done();
}
function printHello(done) {
    console.log("Hello world!");
    done();
}
// gulp.task(printHello);
// gulp.task("default", defaultSomeTask);

exports.default = defaultSomeTask;
exports.printHello = printHello;