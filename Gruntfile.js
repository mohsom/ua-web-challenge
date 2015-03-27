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
                    'build/styles/style.css': ['styles/style.css'],
                    'build/styles/medium-screen.css': ['styles/medium-screen.css'],
                    'build/styles/small-screen.css': ['styles/small-screen.css'],
                    'build/styles/big-screen.css': ['styles/big-screen.css'],
                    'build/styles/reset.css': ['styles/reset.css'],
                    'build/styles/normalize.css': ['styles/normalize.css']
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
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('build', ['cssmin', 'htmlmin', 'imagemin']);
    grunt.registerTask('default', ['watch']);
};
