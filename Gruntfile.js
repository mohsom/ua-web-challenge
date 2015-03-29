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
                    'build/styles/style.min.css': ['build/styles/style.css']
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
                    'build/js/script.js': ['js/script.js'],
                    'build/js/jquery.min.js': ['js/jquery.min.js'],
                    'build/js/contact-widget.js':['js/contact-widget.js']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['styles/style.css', 'styles/big-screen.css', 'styles/small-screen.css','styles/medium-screen.css','normalize.css','reset.css'],
                dest: 'build/styles/style.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('build', ['concat','cssmin', 'htmlmin', 'imagemin','uglify']);
    grunt.registerTask('default', ['watch']);
};
