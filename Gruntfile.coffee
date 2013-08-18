module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    bower:
      install:
        options:
          targetDir: './vendor' # ライブラリの配置先のディレクトリ
          layout: 'byType'
          install: true # grunt実行時にbower installを実行するかどうか
          verbose: false # ログの詳細を出すかどうか
          cleanTargetDir: true # targetDirを削除するかどうか
          cleanBowerDir: false # bowerのcomponentsディレクトリを削除するかどうか

    handlebars:
      compile:
        options:
          namespace: "MyApp.Templates"
          processName: (filepath) =>
            pieces = filepath.split "/";
            return pieces[pieces.length - 1].replace(/.hbs$/, '')
        files:
          "./js/template.js": "template/*.hbs"

    json:
      compile:
        options:
          namespace: 'MyJSONData',
          includePath: true,
          processName: (filename) =>
            return filename.toLowerCase()
        src: ['data.json']
        dest: './js/data.js'

  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-regarde'
  grunt.loadNpmTasks 'grunt-bower-task'
  grunt.loadNpmTasks 'grunt-contrib-handlebars'
  grunt.loadNpmTasks 'grunt-json'

  grunt.registerTask 'default', ['bower:install', 'handlebars', 'json']

