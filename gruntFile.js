module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({

    simplemocha: {
      src: ['test/weatherTest.js']
    }
  });
  grunt.registerTask('default', ['simplemocha']);
};
