({
  appDir: 'www/core',

  baseUrl: '.',

  dir: 'www/build',

  fileExclusionRegExp: /^\./,

  findNestedDependencies: true,

  mainConfigFile: 'www/core/js/main.js',

  modules: [{

    excludeShallow: [
      'app/main'
    ],

    include: [
      'lib/almond/almond'
    ],

    name: 'app/main'
  }],

  preserveLicenseComments: false,

  skipDirOptimize: true
})
