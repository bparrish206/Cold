module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ['public/js**/*.js'],
      options: {
        jshintrc: true
      }
    },

      jscs: {
      src: ['public/js**/*.js', 'test/client/cl_test.js'],
      options: {
        config: '.jscsrc'
      }
    },

    clean:{
      dev:{
      src: ['build/']
    }
  },

  copy: {
    dev: {
      cwd: 'public/',
      src: ['**/*/html', 'css/**/*.css'],
      expand:true,
      dest: 'build'
    }
},

browserify: {
    dev: {
      require : { jquery : 'jquery-browserify' },
      src: ['public/js**/*.js'],
      dest: 'build/bundle.js',
      options: {
        transform: ['debowerify']
      }
    },

    test:{
      src: ['test/client/**/*test.js'],
      dest: 'test/test_bundle.js',
      options: {
        transform: ['debowerify']
      }
    }
  }
  });

  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('test', ['jshint', 'jscs']);
  grunt.registerTask('default', ['test']);
};
