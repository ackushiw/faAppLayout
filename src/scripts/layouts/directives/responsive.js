'use strict';
/*eslint consistent-this:[2,  "responsiveCtrl"] */
var directivename = 'responsive';

module.exports = function(app) {

  // controller
  var controllerDeps = ['$scope', '$window', '$famous', '$timeline', 'resize', '$log'];
  var controller = function($scope, $window, $famous, $timeline, resize, $log) {
    //famous
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Easing = $famous['famous/transitions/Easing'];
    var EventHandler = $famous['famous/core/EventHandler'];

    var responsiveCtrl = this;
    var vm = responsiveCtrl;

    //init state - all surfaces off screen
    //top nav
    vm.topnavTranslate = new Transitionable([0, 0, 300]);
    vm.topnavSize = new Transitionable([$window.innerWidth, 64]);
    vm.topnavAlign = new Transitionable([0, -1]);
    //
    // vm.topnavTranslate.set([0, 0, 300], {
    //   duration: 300,
    //   curve: Easing.outExpo
    // });

    //main content
    vm.mainContentTranslate = new Transitionable([0, 0, 270]);
    vm.mainContentSize = new Transitionable([undefined, undefined]);
    vm.mainContentAlign = new Transitionable([0, 1]);

    //content view
    vm.contentViewTranslate = new Transitionable([0, 0, 260]);
    vm.contentViewSize = new Transitionable([undefined, undefined]);
    vm.contentViewAlign = new Transitionable([-1, 0]);

    responsiveCtrl.setDimensions = function($event) {
      $log.log('event ', $event.width);
      vm.width = $window.innerWidth;
      vm.height = $window.innerHeight;
      $log.log('window dimensions: ' + vm.width + ' by ' + vm.height);
      //sidenav
      var sidenavMobileSize = vm.width - 64;
      var sidenavMobileSizeNegative = sidenavMobileSize * -1;
      vm.sidenavTranslate = new Transitionable([sidenavMobileSizeNegative, 0, 299]);
      vm.sidenavSize = new Transitionable([sidenavMobileSize, undefined]);
      vm.sidenavState = false;

      //**mobile
      if(vm.width < 600) {
        $log.log('sm');
        //top nav
        vm.topnavTranslate.set([0, 0, 300], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.topnavSize.set([vm.width, 56], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.topnavAlign.set([0, 0], {
          duration: 300,
          curve: Easing.outExpo
        });

        //sidenav
        vm.sidenavState = false;
        vm.sidenavTranslate.set([sidenavMobileSizeNegative, 0, 299], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.sidenavSize.set([sidenavMobileSize, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        //main content
        vm.mainContentTranslate.set([0, 0, 270], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.mainContentSize.set([vm.width, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.mainContentAlign.set([0, 0], {
          duration: 300,
          curve: Easing.outExpo
        });
        //content view
        vm.contentViewTranslate.set([0, 0, 270], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewSize.set([vm.width, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewAlign.set([1, 0], {
          duration: 300,
          curve: Easing.outExpo
        });

      } else if(vm.width < 960) {
        if(vm.width > vm.height) {
          $log.log('landscape');
          vm.topnavSize.set([vm.width - 64, 48], {
            duration: 300300,
            curve: Easing.outExpo
          });
        } else {
          vm.topnavSize.set([vm.width - 64, 56], {
            duration: 300300,
            curve: Easing.outExpo
          });
        }
        $log.log('md');
        //top nav
        vm.topnavTranslate.set([64, 0, 300], {
          duration: 300,
          curve: Easing.outExpo
        });

        vm.topnavAlign.set([0, 0], {
          duration: 300,
          curve: Easing.outExpo
        });
        //sidenav
        vm.sidenavState = false;
        vm.sidenavTranslate.set([0, 0, 299], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.sidenavSize.set([64, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        //main content
        vm.mainContentTranslate.set([64, 0, 270], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.mainContentSize.set([vm.width - 64, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.mainContentAlign.set([0, 0], {
          duration: 300,
          curve: Easing.outExpo
        });
        //content view
        vm.contentViewTranslate.set([364, 0, 250], {
          duration: 300,
          curve: Easing.outExpo
        });
        var tabletViewSize = vm.width;
        vm.contentViewSize.set([vm.width, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewAlign.set([-1, 0], {
          duration: 300,
          curve: Easing.outExpo
        });

      } else if(vm.width < 1200) {
        $log.log('lg');
        //top nav
        vm.topnavTranslate.set([100, 0, 300], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.topnavSize.set([vm.width - 100, 100], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.topnavAlign.set([0, 0], {
          duration: 300,
          curve: Easing.outExpo
        });
        //sidenav
        vm.sidenavState = false;
        vm.sidenavTranslate.set([0, 0, 301], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.sidenavSize.set([100, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        //main content
        vm.mainContentTranslate.set([100, 0, 270], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.mainContentSize.set([380, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.mainContentAlign.set([0, 0], {
          duration: 300,
          curve: Easing.outExpo
        });
        //content view
        vm.contentViewTranslate.set([480, 0, 270], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewSize.set([vm.width - 480, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewAlign.set([0, 0], {
          duration: 300,
          curve: Easing.outExpo
        });

      }
      if(vm.width >= 600) {
        $log.log('gt-sm');
      }

      if(vm.width >= 960) {

        $log.log('Greater than md');

      }

      if(vm.width >= 1200) {
        vm.sidenavState = true;
        $log.log('gt-lg');
        //top nav
        vm.topnavTranslate.set([240, 0, 300], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.topnavSize.set([vm.width - 240, 120], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.topnavAlign.set([0, 0], {
          duration: 300,
          curve: Easing.outExpo
        });
        //sidenav
        vm.sidenavState = true;
        vm.sidenavTranslate.set([0, 0, 301], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.sidenavSize.set([240, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        //main content
        vm.mainContentTranslate.set([240, 0, 270], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.mainContentSize.set([480, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.mainContentAlign.set([0, 0], {
          duration: 300,
          curve: Easing.outExpo
        });
        //content view
        vm.contentViewTranslate.set([720, 0, 260], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewSize.set([vm.width - 720, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewAlign.set([0, 0], {
          duration: 1000,
          curve: Easing.outExpo
        });
      }

    };

    var vm = this;

    // tests
    vm.message = 'Hello World';
    vm.opacityTest = 0.1;
    //$log.log('window inner width: ', $window.innerWidth);
    vm.test = function(message) {
      $log.log('test button', message);
    };

    //toggles

    function expandSidenav(state) {
      $log.log('menu expand');
      vm.sidenavState = true;
      if(vm.width < 600 || vm.width < 960) {

        vm.sidenavTranslate.set([0, 0, 500], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.sidenavSize.set([sidenavMobileSize, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
      } else {
        vm.topnavTranslate.set([240, 0, 300], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.topnavSize.set([vm.width - 240, 120], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.sidenavTranslate.set([0, 0, 299], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.sidenavSize.set([240, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.mainContentTranslate.set([240, 0, 299], {
          duration: 300,
          curve: Easing.outExpo
        });
        //content view
        vm.contentViewTranslate.set([720, 0, 270], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewSize.set([vm.width - 720, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });

      }

    }

    function sidenavClose() {
      vm.sidenavState = false;
      $log.log('mobile sidenav close button');
      if(vm.width < 960) {
        vm.sidenavTranslate.set([sidenavMobileSizeNegative, 0, 299], {
          duration: 500,
          curve: Easing.outQuad
        });
        vm.sidenavSize.set([sidenavMobileSize, undefined], {
          duration: 500,
          curve: Easing.outQuad
        });
      } else {
        vm.topnavTranslate.set([100, 0, 300], {
          duration: 300,
          curve: Easing.inOutExpo
        });
        vm.topnavSize.set([vm.width - 100, 120], {
          duration: 300,
          curve: Easing.inOutExpo
        });
        vm.sidenavTranslate.set([0, 0, 299], {
          duration: 300,
          curve: Easing.inOutExpo
        });
        vm.sidenavSize.set([100, undefined], {
          duration: 300,
          curve: Easing.inOutExpo
        });
        vm.mainContentTranslate.set([100, 0, 270], {
          duration: 300,
          curve: Easing.inOutExpo
        });
        //content view
        vm.contentViewTranslate.set([500, 0, 270], {
          duration: 300,
          curve: Easing.inOutExpo
        });
        vm.contentViewSize.set([vm.width - 500, undefined], {
          duration: 300,
          curve: Easing.inOutExpo
        });
      }

      if(vm.width > 960) {

        $log.log('greater than mobile sidenav close button');

      }
    }

    vm.toggleSidenav = function(state) {
      if(!state) {
        expandSidenav();
        vm.sidenavState = state;
      } else {
        sidenavClose();
        vm.sidenavState = state;
      }
    };

    vm.backgroundOptions = {
      translate: [0, 0, 10]
    };
    vm.navSize = 56;
    vm.navOptions = {
      translate: [0, 0, 200],
      size: [vm.width, 56]
    };
    vm.sidenavOptions = {
      translate: [0, 0, 180] //,
        //size: [250, undefined]
    };

    vm.mainContentOptions = {
      translate: [0, 0, 0],
      align: [0.15, 0],
      origin: [0, 0],
      size: [vm.width, undefined],
      proportions: [0.3, 1]
    };
    vm.mainLayoutOptions = {
      translate: [0, 0, 25] //,

    };
    vm.lgContentOptions = {
      translate: [0, 0, 30] //,
        //size: [1000, undefined]
    };
    vm.actionOptions = {
      align: [0, 0.86],
      translate: [600, 0, 0],
      size: [60, 60]
    };

    function getScreenSize(screen) {
      $log.log('fetching Screen size', screen);
      vm.layout = new Transitionable(screen);
    }

    //activate functions
    var activate = function() {

    };
    activate();

    responsiveCtrl.directivename = directivename;
  };
  controller.$inject = controllerDeps;

  /*eslint-disable consistent-this */

  // directive
  var directiveDeps = [];
  var directive = function() {
    return {
      restrict: 'AE',
      scope: {
        title: '@' // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
      },
      controller: controller,
      controllerAs: 'responsiveCtrl',
      bindToController: true,
      template: require('./responsive.html'),
      compile: function(tElement, tAttrs) {
        return {
          pre: function(scope, element, attrs) {

          },
          post: function(scope, element, attrs) {
            scope.$on('resize', function($event) {

              scope.responsiveCtrl.setDimensions($event);
            });

          }
        };
      }
    };
  };
  directive.$inject = directiveDeps;

  app.directive(directivename, directive);
};