module.exports = function (grunt) {
    var mozjpeg = require('imagemin-mozjpeg');
    var optipng=require('imagemin-optipng');
    var gifsicle=require('imagemin-gifsicle');
    var jpegtran=require('imagemin-jpegtran');
    var svgo=require('imagemin-svgo');
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
                    'build/styles/reset.css': ['styles/reset.css'],
                    'build/styles/normalize.css': ['styles/normalize.css']
                }
            }
        },
        imagemin: {
            options: {
                optimizationLevel: 7,
                svgoPlugins: [{ removeViewBox: false }],
                use:[mozjpeg(),optipng(),gifsicle(),jpegtran(),svgo()]
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'build/images'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['cssmin', 'htmlmin', 'imagemin']);
};
