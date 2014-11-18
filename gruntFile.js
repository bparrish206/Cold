module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-simple-mocha');

grunt.initConfig({


simplemocha: {
  src: ['test/**/*.js']
}
});

grunt.registerTask('test', ['simplemocha']);
grunt.registerTask('default', ['test']);
};
