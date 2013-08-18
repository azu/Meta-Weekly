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



  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-regarde'
  grunt.loadNpmTasks 'grunt-bower-task'

  grunt.registerTask 'default', ['bower:install']

