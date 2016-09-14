module.exports = function(grunt) {

 grunt.initConfig({
  // revizor: {
  //   options: {},
  //   src: ['css/*.css', 'html/*.html', 'js/src/*.js']
  // },
cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'css/all.css': ['css/style1.css', 'css/style2.css']
    }
  }
},

 concat: {
    options: {
   
    separator: ';'
  },
  dist: {
   
    src: ['js/src/*.js'], 
   
    dest: 'js/dist/main.js'
  }
},



});
// grunt.loadNpmTasks('grunt-revizor');
// grunt.registerTask('default', ['revizor']);
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default', ['cssmin']);

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.registerTask('default', ['concat']);
};










https://github.com/gruntjs/grunt-contrib-cssmin



https://github.com/atrolov/grunt-revizor




















