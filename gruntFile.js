module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-jscs');

grunt.initConfig({
  jshint: {
    options:
    {
      curly: true,
      eqeqeq: true
    },
    target1: ['Gruntfile.js', 'index.js','public/**/*.js', 'public/**/*.html', 'src/**/*.js']
  },

  jscs: {
    options:
    {
      'maxErrors':25,
      "requireCurlyBraces": [
      "if",
      "else",
      "for",
      "while",
      "do",
      "try",
      "catch",
      "case",
],
"requireSpaceAfterKeywords": [
    "do",
    "for",
    "if",
    "else",
    "switch",
    "case",
    "try",
    "catch",
    "void",
    "while",
    "with",
    "return",
    "typeof",
]
    },
  target2: ['Gruntfile.js', 'index.js', 'public/**/*.js', 'public/**/*.html', 'src/**/*.js']
},
});

grunt.registerTask('test', ['jshint', 'jscs']);
grunt.registerTask('default', ['test']);
};
