module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        aglio: {
            'all': {
                'files': { 'docs/index.html': ['src/index.apib'],  'docs/auth.html': ['src/auth.apib'],  'docs/proposals.html': ['src/proposals.apib']},
                'options': {
                    'theme': 'default',
                    'separator': '\\n',
                    'includePath': 'src',
                    'themeTemplate': 'templates/index.jade',
                    'themeFullWidth': true,
                    'themeStyle': 'styles/styles.less'
                }
                
            }
        },
        watch: {
            'aglio': {
                'files': [
                    'src/**/*.apib',
                    'src/**/*.md',
                    'src/**/*.json',
                    'templates/*',
                    'styles/*'
                ],
                'tasks': ['aglio'],
                'options': { 'livereload': '<%= connect.options.livereload %>' }
            }
        },
        connect: {
            options: {
                port: 8080,
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: false,
                    base: 'docs'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-aglio');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('build', ['aglio']);
    grunt.registerTask('serve', [
        'build',
        'connect:livereload',
        'watch'
    ]);
};