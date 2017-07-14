'use strict'

var browsers = [
  'last 2 versions',
  'ie 9',
  'ie 10',
  'Firefox ESR',
  'Opera 12.1'
]

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: '\n/*!\n * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("dd.mm.yyyy") %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>, <%= _.map(pkg.contributors, "name").join(", ") %>\n' +
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
          transform: [
            ['babelify', {presets: ['es2015']}],
          ],
          banner: '',
          watch: true
        },
        src: 'src/js/shariff.js',
        dest: 'demo/app.min.js'
      },
      dist_complete_min: {
        options: {
          transform: [
            ['babelify', {presets: ['es2015']}],
            ['uglifyify', { global: true }]
          ]
        },
        src: 'src/js/shariff.js',
        dest: 'build/shariff.complete.js'
      },
      dist_min: {
        options: {
          transform: [
            ['babelify', {presets: ['es2015']}],
            ['uglifyify', { global: true }],
            ['browserify-shim', { global: true }]
          ]
        },
        src: 'src/js/shariff.js',
        dest: 'build/shariff.min.js'
      },
      demo: {
        options: {
          transform: [
            ['babelify', {presets: ['es2015']}],
            ['uglifyify', { global: true }]
          ],
          watch: true
        },
        src: 'src/js/shariff.js',
        dest: 'demo/app.min.js'
      },
      specs: {
        src: [ 'src/js/*.js', 'spec/**/*Spec.js' ],
        dest: 'tmp/specs.js',
        options: {
          transform: [
            ['babelify', {presets: ['es2015']}],
          ],
          browserifyOptions: {
            debug: true,
            paths: [ './node_modules' ],
          }
        }
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

    eslint: {
      target: [
        'src/js/*.js',
        'src/js/services/*.js'
      ]
    },

    jasmine: {
      specs: {
        src: [],
        options: {
          outfile: 'tmp/_SpecRunner.html',
          specs: '<%= browserify.specs.dest %>'
        }
      }
    },

    watch: {
      scripts: {
        files: ['src/js/dom.js', 'spec/**/*Spec.js'],
        tasks: ['test']
      },
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
          port: 9000,
          base: 'demo',
          keepalive: true,
          // livereload: true,
          // open: true,
          // debug: true,
          middleware: function (connect, options, middlewares) {
            var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest
            return [
              proxy,
              connect.static(options.base[0]),
              connect.directory(options.base[0])
            ]
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
  })

  require('load-grunt-tasks')(grunt)

  grunt.registerTask('test', ['eslint', 'browserify:specs', 'jasmine:specs'])
  grunt.registerTask('build', ['test', 'less:demo', 'less:dist', 'less:dist_min', 'browserify:dist_complete_min', 'browserify:dist_min'])
  grunt.registerTask('demo', ['copy:demo', 'less:demo', 'browserify:demo', 'hapi', 'configureProxies:demo', 'connect'])
  grunt.registerTask('dev', ['copy:demo', 'less:demo', 'browserify:dev_demo', 'hapi', 'configureProxies:demo', 'connect'])
  grunt.registerTask('default', ['test', 'demo'])
}
