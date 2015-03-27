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
    vm.topnavSize = new Transitionable([undefined, 64]);
    vm.topnavAlign = new Transitionable([0, -1]);
    //
    // vm.topnavTranslate.set([0, 0, 300], {
    //   duration: 800,
    //   curve: Easing.outExpo
    // });

    //sidenav
    var sidenavMobileSize = $window.innerWidth - 64;
    var sidenavMobileSizeNegative = sidenavMobileSize * -1;
    vm.sidenavTranslate = new Transitionable([sidenavMobileSizeNegative, 0, 299]);
    vm.sidenavSize = new Transitionable([sidenavMobileSize, undefined]);

    //main content
    vm.mainContentTranslate = new Transitionable([0, 0, 270]);
    vm.mainContentSize = new Transitionable([undefined, undefined]);
    vm.mainContentAlign = new Transitionable([0, 1]);

    //content view
    vm.contentViewTranslate = new Transitionable([0, 0, 260]);
    vm.contentViewSize = new Transitionable([undefined, undefined]);
    vm.contentViewAlign = new Transitionable([-1, 0]);

    responsiveCtrl.setDimensions = function($event) {
      $log.log($event);
      vm.width = $window.innerWidth;
      vm.height = $window.innerHeight;
      $log.log('window dimensions: ' + $window.innerWidth + ' by ' + $window.innerHeight);

      //**mobile
      if(vm.width < 600) {
        $log.log('sm');
        //top nav
        vm.topnavTranslate.set([0, 0, 300], {
          duration: 800,
          curve: Easing.outExpo
        });
        vm.topnavSize.set([undefined, 56], {
          duration: 800,
          curve: Easing.outExpo
        });
        vm.topnavAlign.set([0, 0], {
          duration: 300,
          curve: Easing.outExpo
        });

        //sidenav
        vm.sidenavTranslate.set([sidenavMobileSizeNegative, 0, 299], {
          duration: 400,
          curve: Easing.outExpo
        });
        vm.sidenavSize.set([sidenavMobileSize, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        //main content
        vm.mainContentTranslate.set([0, 0, 270], {
          duration: 800,
          curve: Easing.outExpo
        });
        vm.mainContentSize.set([$window.innerWidth, undefined], {
          duration: 800,
          curve: Easing.outExpo
        });
        vm.mainContentAlign.set([0, 0], {
          duration: 800,
          curve: Easing.outExpo
        });
        //content view
        vm.contentViewTranslate.set([0, 0, 270], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewSize.set([$window.innerWidth, undefined], {
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
          vm.topnavSize.set([undefined, 48], {
            duration: 800,
            curve: Easing.outExpo
          });
        } else {
          vm.topnavSize.set([undefined, 56], {
            duration: 800,
            curve: Easing.outExpo
          });
        }
        $log.log('md');
        //top nav
        vm.topnavTranslate.set([0, 0, 300], {
          duration: 800,
          curve: Easing.outExpo
        });

        vm.topnavAlign.set([0, 0], {
          duration: 800,
          curve: Easing.outExpo
        });
        //sidenav
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
        vm.mainContentSize.set([$window.innerWidth - 64, undefined], {
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
        var tabletViewSize = $window.innerWidth
        vm.contentViewSize.set([$window.innerWidth, undefined], {
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
        vm.topnavTranslate.set([0, 0, 300], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.topnavSize.set([undefined, 100], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.topnavAlign.set([0, 0], {
          duration: 300,
          curve: Easing.outExpo
        });
        //sidenav
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
          duration: 800,
          curve: Easing.outExpo
        });
        //content view
        vm.contentViewTranslate.set([480, 0, 270], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewSize.set([$window.innerWidth - 480, undefined], {
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
        $log.log('gt-lg');
        //top nav
        vm.topnavTranslate.set([0, 0, 300], {
          duration: 800,
          curve: Easing.outExpo
        });
        vm.topnavSize.set([undefined, 120], {
          duration: 800,
          curve: Easing.outExpo
        });
        vm.topnavAlign.set([0, 0], {
          duration: 800,
          curve: Easing.outExpo
        });
        //sidenav
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
        vm.contentViewSize.set([$window.innerWidth - 720, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewAlign.set([0, 0], {
          duration: 1000,
          curve: Easing.outExpo
        });
      }

    };
    $log.log($window);
    $scope.$on('resize', function($event) {
      $log.log('resize triggered');
      responsiveCtrl.setDimensions($event);
    });
    var vm = this;

    // tests
    vm.message = 'Hello World';
    vm.opacityTest = 0.1;
    //$log.log('window inner width: ', $window.innerWidth);
    vm.test = function() {
      $log.log('test button');
    }

    vm.layout = new Transitionable(0);
    vm.getLayout = $timeline([
      [0, [0, 100, 0], Easing.inOutQuad],
      [1, [15, 85, 0], Easing.inOutQuad],
      [2, [15, 30, 55], Easing.inOutQuad]
    ]);

    //toggles
    vm.sidenavExpanded = false;
    vm.expandSidenav = function() {
      $log.log('menu expand');
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
        vm.sidenavExpanded = true;
        vm.sidenavTranslate.set([0, 0, 299], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.sidenavSize.set([320, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.mainContentTranslate.set([320, 0, 299], {
          duration: 300,
          curve: Easing.outExpo
        });
        //content view
        vm.contentViewTranslate.set([720, 0, 270], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewSize.set([$window.innerWidth - 720, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });

      }

    }
    vm.sidenavClose = function() {
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
        vm.sidenavExpanded = false;
        vm.sidenavTranslate.set([0, 0, 299], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.sidenavSize.set([100, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.mainContentTranslate.set([100, 0, 270], {
          duration: 300,
          curve: Easing.outExpo
        });
        //content view
        vm.contentViewTranslate.set([500, 0, 270], {
          duration: 300,
          curve: Easing.outExpo
        });
        vm.contentViewSize.set([$window.innerWidth - 500, undefined], {
          duration: 300,
          curve: Easing.outExpo
        });
      }

      if(vm.width > 960) {

        $log.log('greater than mobile sidenav close button');

      }
    }

    vm.backgroundOptions = {
      translate: [0, 0, 10]
    };
    vm.navSize = 56;
    vm.navOptions = {
      translate: [0, 0, 200],
      size: [$window.innerWidth, 56]
    };
    vm.sidenavOptions = {
      translate: [0, 0, 180] //,
        //size: [250, undefined]
    };

    vm.mainContentOptions = {
      translate: [0, 0, 0],
      align: [0.15, 0],
      origin: [0, 0],
      size: [$window.innerWidth, undefined],
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

          }
        };
      }
    };
  };
  directive.$inject = directiveDeps;

  app.directive(directivename, directive);
};