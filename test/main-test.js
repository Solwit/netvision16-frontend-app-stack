var allTestFiles = [];
var TEST_REGEXP = /(.spec|.test)\.js$/i;
for (var file in window.__karma__.files) {
  if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}

require.config({
  // basePath: '',
  baseUrl: '/base',

  paths: {
    'domReady': 'bower_components/requirejs-domready/domReady',
    'angular': 'bower_components/angular/angular',
    'ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
    'ng-mocks': 'bower_components/angular-mocks/angular-mocks',
    'netvisionApp.main': 'app/scripts/controllers/main',
    'netvisionApp.todo': 'app/scripts/controllers/todo'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'ui-router': {
      deps: ['angular']
    },
    'ng-mocks': {
      deps: ['angular']
    }
  },

  deps: allTestFiles,
  callback: window.__karma__.start
});
