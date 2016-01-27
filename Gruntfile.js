'use strict';

var browsers = [
    'last 2 versions',
    'ie 9',
    'ie 10',
    'Firefox ESR',
    'Opera 12.1'
];

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        meta: {
            banner: '\n/*!\n * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
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
            dist_complete_min: {
                options: {
                    transform: [ ['uglifyify', { global: true } ] ]
                },
                src: 'src/js/shariff.js',
                dest: 'build/shariff.complete.js'
            },
            dist_min: {
                options: {
                    transform: [
                        ['uglifyify', { global: true } ],
                        ['browserify-shim', { global: true } ]
                    ]
                },
                src: 'src/js/shariff.js',
                dest: 'build/shariff.min.js'
            },
            demo: {
                options: {
                    transform: [ ['uglifyify', { global: true } ] ],
                    watch: true
                },
                src: 'src/js/shariff.js',
                dest: 'demo/app.min.js'
            }
        },

        copy: {
            demo: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/font-awesome',
                        src: '{fonts,css}/*',
                        dest: 'demo/'
                    },
                    {
                        src: 'build/*',
                        dest: 'demo/'
                    }
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
                banner: '<%= meta.banner %>',
                paths: [
                    'node_modules/font-awesome/less',
                    'node_modules/shariff/src/style'
                ],
                plugins: [
                    new (require('less-plugin-autoprefix'))({browsers: browsers}),
                    new (require('less-plugin-clean-css'))({keepSpecialComments: 1})
                ],
                strictMath: true
            },
            demo: {
                options: {
                     modifyVars: {
                        'fa-font-path': '"fonts"'
                    },
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapFileInline: true,
                    plugins: [
                        new (require('less-plugin-autoprefix'))({
                            browsers: browsers,
                            map: true
                        }),
                        new (require('less-plugin-clean-css'))()
                    ],
                },
                src: 'src/style/demo.less',
                dest: 'demo/app.min.css'
            },
            dist: {
                options: {
                    modifyVars: {
                        'fa-font-path': '"https://netdna.bootstrapcdn.com/font-awesome/4.3.0/fonts"'
                    }
                },
                src: 'src/style/shariff-complete.less',
                dest: 'build/shariff.complete.css'
            },
            dist_min: {
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
                    // open: true,
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
                        context: '/shariff/',
                        host: 'localhost',
                        port: 3001,
                        https: false,
                        xforward: false
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-hapi');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['test', 'less:demo', 'less:dist', 'less:dist_min', 'browserify:dist_complete_min', 'browserify:dist_min']);
    grunt.registerTask('demo', ['copy:demo', 'less:demo', 'browserify:demo', 'hapi', 'configureProxies:demo', 'connect']);
    grunt.registerTask('default', ['test', 'demo']);
};
