module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'index.html'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/styles/style.css': ['styles/style.css']
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'build/images'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'build/js/script.js': ['build/js/script.js']
                }
            }
        },
        concat: {
            js:{
                src:['js/script.js'],
                dest:'build/js/script.js'
            }
        },

        clean:{
            build:['build']
        },
        sass: {
            dist: {
                files: {
                    'styles/style.css':'styles/style.scss'
                }
            }
        },

        connect:{

            options:{
                port:3000,
                hostname:'localhost',
                livereload:35719
            },

            livereload:{
                options:{
                    open:true
                }
            }
        },

        watch: {
            scss:{
                files:['styles/*.scss'],
                task:['sass']
                //options:{
                //    livereload: '<%= connect.options.livereload %>',
                //}
            },
            html:{
                files:['index.html']
            },
            js:{
                files:['js/*.js','Gruntfile.js']
            },
            options:{
                //livereload: '<%= connect.options.livereload %>'
            },
            livereload:{
                files:[
                    'styles/*.scss',
                    '<%=watch.html.files%>',
                    '<%=watch.js.files%>'
                ],
                options:{
                    livereload: '<%= connect.options.livereload %>'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('build', ['clean:build', 'sass','cssmin', 'htmlmin', 'imagemin','concat:js','uglify']);
    grunt.registerTask('serve', ['sass','connect','watch']);
};
