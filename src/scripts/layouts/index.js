'use strict';
require('angular-ui-router');
require('famous-angular');
require('ng-resize');

var modulename = 'layouts';

module.exports = function(namespace) {

  var fullname = namespace + '.' + modulename;

  var angular = require('angular');
  var app = angular.module(fullname, ['ui.router', 'famous.angular', 'ngResize']);
  // inject:folders start
  require('./controllers')(app);
  require('./directives')(app);
  require('./services')(app);
  // inject:folders end

  app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider.state('home', {
        url: '/',
        template: require('./views/home.html'),
        controller: fullname + '.main',
        controllerAs: 'mainCtrl'
      }).state('home.app', {
        url: 'app',
        views: {
          'sidenav': {
            template: require('./views/sidenav.html')
          },
          'topnav': {
            template: require('./views/topnav.html')
          },
          'main': {
            template: require('./views/main.html')
          },
          'expanded': {
            template: require('./views/expanded.html')
          }
        }
      });
    }
  ]);
  app.config(['resizeProvider', function(resizeProvider) {
    resizeProvider.throttle = 350;
    resizeProvider.initBind = true;
  }]);

  return app;
};