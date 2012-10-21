module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    concat: {
      dist: {
        src: [
          'assets/js/vendor/jquery-1.8.2.min.js',
          'assets/js/vendor/add2home.js',
          'assets/js/vendor/autoscroll.js',
          'assets/js/vendor/underscore.js',
          'assets/js/vendor/backbone.js',
          'assets/js/vendor/handlebars.runtime.js',
          'assets/js/templates.js',
          'assets/js/templates-helper.js',
          'assets/js/app.js'
        ],
        dest: 'assets/js/main.js',
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
        dist: {
          src: ['assets/js/main.js'],
          dest: 'assets/js/main.min.js'
        }
      },
    },
    
    coffee: {
      app: {
        src: ['src/**/*.coffee'],
        dest: 'assets/js/src',
        options: {
          bare: true,
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

      app: {
        files: ['assets/js/vendor/*.js', 'assets/js/app.js'],
        tasks: 'concat min'
      }
    },

  });

  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-coffee');
  
  // Default task.
  grunt.registerTask('default', 'concat min');

  grunt.registerTask('test', 'coffee:spec concat:spec mocha');

  grunt.registerTask('test-watch', 'mocha watch:test');
};
