module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'js/script.js',
        dest: 'js/script.min.js'
      }
    },
    watch: {
      all: {
        files: ['sass/style.scss', 'css/style.css', 'js/script.js'],
        tasks: ['sass','csslint','jshint']
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['style.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
    sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'css/style.css': 'sass/style.scss',       // 'destination': 'source'
      }
    }
  },
    jshint: {
    all: ['Gruntfile.js', 'js/script.js']
  },

  // htmllint: {
  //   all: ['*.html']
  // },
  csslint: {

      lax: {
        options: {
          import: false,
          'order-alphabetical' :false
        },
        src: ['css/*.css','!*.min.css']
      }
    },

    imagemin: {
        static: {
            // options: {
            //     optimizationLevel: 3,
            //     svgoPlugins: [{removeViewBox: false}],
            //     use: [mozjpeg()] // Example plugin usage
            // },
            files: {
                'imagemin/coverimg2.jpg': 'images/coverimg2.jpg',
                'imagemin/coverimg4.jpg': 'images/coverimg4.jpg'
            }
        },
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['images/*.{png,jpg,gif}'],
                dest: 'imagemin/'
            }]
        }
    }

  });

  // // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  // grunt.registerTask('validate', ['sass','csslint']);
  grunt.registerTask('default', ['watch']); //run this using grunt
  grunt.registerTask('minimise', ['cssmin','imagemin','uglify']); //run this using grunt test
};
