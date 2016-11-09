// 包装函数
module.exports = function(grunt) {
    // 任务配置，所有插件的配置信息
    grunt.initConfig({
        // 获取package.json的信息
        pkg: grunt.file.readJSON("package.json"),

        // uglify插件的配置信息
        uglify: {
            options: {
                stirpBanners: true,
                // 在生成的压缩文件第一行加一句话说明
                // 用到了pkg的值，即从package.json获取的信息
                banner: "/*! <%= pkg.name %>-<%= pkg.version %>.js <%= grunt.template.today('yyyy-mm-dd') %> */\n"
            },
            // 配置源文件和压缩文件，压缩谁，生成谁，叫啥
            build: {
                src: "src/hello.js",
                dest: "build/<%= pkg.name %>-<%= pkg.version %>.js.min.js"
            }
        }
    });

    // 告诉gurnt我们将使用插件
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // 告诉grunt当我们在终端中输入grunt时需要做些什么(注意先后顺序)
    //是否立即执行，如需则写上，不需要就不写
    grunt.registerTask("default",["uglify"]);
};