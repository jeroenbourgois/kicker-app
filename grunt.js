module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    concat: {
      app: {
        src: [
          'public/javascripts/src/app/app.js',
          'public/javascripts/src/app/config.js',
          'public/javascripts/src/app/router.js',
          'public/javascripts/src/app/helpers/*.js',
          'public/javascripts/src/app/models/*.js',
          'public/javascripts/src/app/views/*.js',
        ],
        dest: 'public/javascripts/app.js',
        separator: ';'
      },
      dist: {
        src: [
          'public/javascripts/vendor/jquery.js',
          'public/javascripts/vendor/lodash.js',
          'public/javascripts/vendor/backbone.js',
          'public/javascripts/vendor/handlebars.js',
          'public/javascripts/templates.js',
          'public/javascripts/templates-helper.js',
          'public/javascripts/app.js'
        ],
        dest: 'public/javascripts/main.js',
        separator: ';'
      },

      spec: {
        src: [
          'tmp/test/spec/**/*.js'
        ],
        dest: 'test/spec/specs.js',
        separator: ';'
      }
    },

    min: {
      app: {
        src: ['public/javascripts/main.js'],
        dest: 'public/javascripts/main.min.js'
      },
    },
    
    coffee: {
      app: {
        src: ['app/**/*.coffee'],
        dest: 'public/javascripts/src',
        options: {
          bare: false,
          preserve_dirs: true
        }
      },

      spec: {
        src: ['test/spec/**/*.coffee'],
        dest: 'tmp',
        options: {
          bare: true,
          preserve_dirs: true
        }
      }
    },

    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css': 'public/stylesheets/style.sass'
        }
      }
    },

    mocha: {
      index: ['test/browser/index.html'],
      mocha: {
        ignoreLeaks: false,
        grep: 'food',
        reporter: 'spec'
      },
    },

    watch: {
      test: {
        files: ['spec/unit/**/*.coffee'],
        tasks: 'mocha'
      }, 

      // sass: {
      //   files: [ 'public/stylesheets/*.sass' ],
      //   tasks: 'sass'
      // },

      app: {
        files: [
          'app/**/*.coffee',
          'public/javascripts/vendor/*.js',
          'public/javascripts/app.js'
          ],
        tasks: 'coffee:app concat min'
      }
    },

  });

  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  // Default task.
  grunt.registerTask('default', 'coffee:app concat min sass');

  grunt.registerTask('test', 'coffee:spec concat:spec mocha');

  grunt.registerTask('test-watch', 'mocha watch:test');
};
