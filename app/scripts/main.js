require.config({
  paths: {
    'domReady': '../../bower_components/requirejs-domready/domReady',
    'angular': '../../bower_components/angular/angular',
    'ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router.min',
    'netvisionApp.main': 'controllers/main',
    'netvisionApp.todo': 'controllers/todo'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'ui-router': {
      deps: ['angular']
    },
    'domReady': {
      deps: ['angular'],
      exports: 'domReady'
    }
  },

  deps: ['./bootstrap']
});
