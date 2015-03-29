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
                    'build/styles/style.min.css': ['build/styles/style.min.css']
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
        watch: {
            css:{
                files:['styles/*.css'],
                tasks:['build']
            },
            html:{
                files:['index.html'],
                tasks:['build']
            },
            js:{
                files:['js/*.js'],
                tasks:['build']
            }
        },
        uglify: {
            my_target: {
                files: {
                    'build/js/script.min.js': ['build/js/script.min.js']
                }
            }
        },
        concat: {
            css: {
                src: ['styles/reset.css','styles/normalize.css','styles/style.css', 'styles/big-screen.css', 'styles/small-screen.css','styles/medium-screen.css'],
                dest: 'build/styles/style.css'
            },
            js:{
                src:['js/script.js','js/contact-widget.js','js/jquery.min.js'],
                dest:'build/js/script.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('build', ['concat:css','cssmin', 'htmlmin', 'imagemin','concat:js','uglify']);
    grunt.registerTask('default', ['watch']);
};
