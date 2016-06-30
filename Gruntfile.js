module.exports = function(grunt) {
    grunt.initConfig({
      uglify: {
        my_target: {
          files: {
            'dist/minified.js': ['js/check.js', 'js/Punkt.js']
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify'); 
    grunt.registerTask('default', ['uglify']); 
  };