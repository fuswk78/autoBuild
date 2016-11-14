// // 加载插件
// // 
// // grunt的imagemin插件利用了缓存来避免重复压缩
// // 而gulp要利用gulp-cache来完成
//     var gulp = require("gulp"),
//         sass = require("gulp-ruby-sass"),
//         autorefixer = require("gulp-autoprefixer"),
//         cleanCss = require("gulp-clean-css"),
//         jshint = require("gulp-jshint"),
//         uglify = require("gulp-uglify"),
//         imagemin = require("gulp-imagemin"),
//         rename = require("gulp-rename"),
//         concat = require("gulp-notify"),
//         cache = require("gulp-cache"),
//         livereload = require("gulp-livereload"),
//         del = require("del");

// // 编译sass，自动添加css前缀和压缩
// // gulp.task创建任务，命令行输入gulp styles来执行
//     gulp.task("styles", function() {
//         return
//                 //设置需要处理的文件的路径，可[数组指定多个文件]，或用正则表示 
//             gulp.src("src/styles/main.scss")
//                 // 导向sass插件
//                 .pipe(sass({style: "expanded"}))
//                 .pipe(autorefixer("last 2 version", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"))
//                 // gulp.dest设置生成文件的路径
//                 .pipe(gulp.dest("dist/assets/css"))
//                 .pipe(rename({suffix: ".min"}))
//                 .pipe(minifycss())
//                 .pipe(gulp.dest("dist/assets/css"))
//                 .pipe(notify({message: "Styles task complete"}));
//     });
//     
//     
//     


