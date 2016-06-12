module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-ngrok');

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
  });

  grunt.registerTask('default','ngrok');
}
