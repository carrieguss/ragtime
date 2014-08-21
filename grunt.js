module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass: {
   	dist: {
   		files: {
   			'css/main.css' : 'css/main.scss',
        'css/styles.css' : 'css/styles.scss'	// 'destination': 'source'
   		}
   	}
   },
   autoprefixer: {
   	options: {
   		browsers: ['last 5 versions', 'ie 7', 'ie 8', 'ie 9']
   	},
   	no_dest: {
   		src: 'css/main.css'
   	}
   },
   connect: {
   	server: {
   		options: {
   			port: 4444,
   			base: ''
   		}
   	}
   },
   csscomb: {
      options: {
         files: ['css/*.scss']
      }
   },
   jade: {
     compile: {
       options: {
         data: {
           debug: false
         }
       },
       files: {
         'index.html' : 'index.jade' // 'destination': 'source'
       }
     }
    },
    svginject: {
      all : {
        options: {},
        files: {
          'js/SVGinject.js': 'svgs/*.svg',//output : input],
        }
      }
    },
   watch: {
      css: {
         files: ['css/*.scss'],
         tasks: ['sass', 'autoprefixer']
      },
      jade: {
        files: ['*.jade'],
        tasks: ['jade']
      },
      options: {
         livereload: true
      }
   }
 });

 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-autoprefixer');
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-csscomb');
 grunt.loadNpmTasks('grunt-contrib-jade');
 grunt.loadNpmTasks('grunt-svginject');

 // Default task(s).
 grunt.registerTask('default', ['connect','watch']);
 grunt.registerTask('svg', ['svginject']);
};