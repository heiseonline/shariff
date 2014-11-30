'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        meta: {
            banner: '\n/*\n * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("dd.mm.yyyy") %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>, <%= _.pluck(pkg.contributors, "name").join(", ") %>\n' +
                ' * Licensed under the <%= pkg.license %> license\n */\n\n'
        },

        browserify: {
            options: {
                browserifyOptions: {
                    fullPaths: false
                },
                banner: '<%= meta.banner %>'
            },
            dev: {
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                    keepAlive: true,
                    watch: true
                },
                src: 'src/js/shariff.js',
                dest: 'build/shariff.js'
            },
            dev_demo: {
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                    keepAlive: true,
                    watch: true
                },
                src: 'src/js/shariff.js',
                dest: 'demo/app.min.js'
            },
            dist: {
                src: 'src/js/shariff.js',
                dest: 'build/shariff.js'
            },
            dist_min: {
                options: {
                    transform: [ ['uglifyify', { global: true } ] ]
                },
                src: 'src/js/shariff.js',
                dest: 'build/shariff.min.js'
            },
            demo: {
                options: {
                    transform: [ ['uglifyify', { global: true } ] ],
                    watch: true,
                },
                src: 'src/js/shariff.js',
                dest: 'demo/app.min.js'
            },
        },

        copy: {
            demo: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['node_modules/font-awesome/fonts/fontawesome*'],
                        dest: 'demo/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/img/*'],
                        dest: 'demo/',
                        filter: 'isFile'
                    },
                ]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: [
                'src/js/*.js',
                'src/js/services/*.js'
            ]
        },

        less: {
            options: {
                strictMath: true,
                compress: true,
                report: 'min'
            },
            demo: {
                options: {
                    sourceMap: true,
                    outputSourceFiles: true
                },
                src: ['src/style/shariff.less', 'src/style/demo.less'],
                dest: 'demo/app.min.css'
            },
            dist: {
                options: {
                    compress: true,
                },
                src: 'src/style/shariff.less',
                dest: 'build/shariff.min.css'
            }
        },

        hapi: {
            shariff: {
                options: {
                    server: require('path').resolve('./node_modules/shariff-backend-node/server.js'),
                    // noasync: true,
                }
            }
        },

        connect: {
            demo: {
                options: {
                    hostname: '0.0.0.0',
                    // hostname: 'localhost',
                    port: 8080,
                    base: 'demo',
                    keepalive: true,
                    // livereload: true,
                    open: true,
                    // debug: true,
                    middleware: function (connect, options, middlewares) {
                        var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
                        return [
                            proxy,
                            connect.static(options.base[0]),
                            connect.directory(options.base[0])
                        ];
                    }
                },
                proxies: [
                    {
                        rewrite: {
                            '^/shariff': ''
                        },
                        context: '/shariff',
                        host: 'localhost',
                        port: 3001,
                        https: false,
                        xforward: false
                    }
                ]
            }
        },

        release: {
            options: {
                tagName: 'v<%= version %>',
                github: {
                   repo: 'heiseonline/shariff',
                   usernameVar: 'GITHUB_USERNAME',
                   passwordVar: 'GITHUB_PASSWORD'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-hapi');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['test', 'less:demo', 'less:dist', 'browserify:dist', 'browserify:dist_min'])
    grunt.registerTask('demo', ['copy:demo', 'less:demo', 'browserify:demo', 'hapi', 'configureProxies:demo', 'connect']);
    grunt.registerTask('default', ['test', 'browserify:dev']);
};
