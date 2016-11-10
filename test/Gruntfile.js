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
                src: "build/jsConcat/<%= pkg.name %>-<%= pkg.version %>.js",
                dest: "build/<%= pkg.name %>-<%= pkg.version %>.js.min.js"
            }
        },

        // jshint插件的配置信息
        jshint: {
            // 要检查哪些js文档的语法
            build: ["Gruntfile.js", "src/*.js"],
            // 可以替换buil的写法，拆开来写
            // test1: ["Gruntfile.js"],
            // test2: ["src/*.js"],

            // 要通过什么规则检查语法，描述文件保存在根目录下的.jshintrc的文件中
            // 需添加此文档并且填写文件内容
            options: {
                jshintrc: ".jshintrc"
            }
        },

        // csslint插件的配置信息
        csslint: {
            options: {
                csslintrc: ".csslintrc"
            },
            build: ["src/*.css"]

        },

        // concat插件的配置信息
        concat: {
            options: {
                // 允许合并时输出头部信息
                stripBanners: true,
                banner: "/*<%= pkg.name %>-<%= pkg.version %>-" + "<%= grunt.template.today('yyyy-mm-dd') %> */\n"
            },
            cssConcat: {
                src: ["src/*.css"],
                dest: "build/cssConcat/<%= pkg.name %>-<%= pkg.version %>.css"
            },
            jsConcat: {
                src: ["src/*.js"],
                dest: "build/jsConcat/<%= pkg.name %>-<%= pkg.version %>.js"
            }
        },

        // 压缩css
        cssmin: {
            options: {
                stripBanners: true,
                banner: "/*!<%= pkg.name%>-<%= pkg.version%>-" + "<%= grunt.template.today('yyyy-mm-dd') %>*/\n"
            },
            build: {
                src: "build/cssConcat/<%= pkg.name %>-<%= pkg.version %>-" + "<%= grunt.template.today('yyyy-mm-dd') %>.css",
                dest: "build/<%= pkg.name %>-<%= pkg.version %>.min.css"
            }
        },
        //watch插件的配置信息
        watch: {
            build: {
                files: ["src/*.js", "src/*.css"],
                tasks: ["jshint", "csslint", "concat", "cssmin", "uglify"],
                options: {spawn: false}
            }
        }
    });

    // 告诉gurnt我们将使用插件
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-csslint");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // 告诉grunt当我们在终端中输入grunt时需要做些什么(注意先后顺序)
    //是否立即执行，如需则写上，不需要就不写
    //注意顺序，先检查,合并，再压缩 
    grunt.registerTask("default", ["jshint","csslint","concat", "cssmin", "uglify", "watch"]);

}; 