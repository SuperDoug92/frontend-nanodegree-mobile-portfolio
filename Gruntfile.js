module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    ngrok: {
      server: {
        proto: 'tcp',
        port: 8080,
        onConnected: function(url) {
          grunt.log.writeln('Local server exposed to %s!', url);
        }
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'imgmin'                  // Destination path prefix 
        }]
      }
    }
  });

  grunt.registerTask('default','ngrok');
}
