(function() {
    'use strict';
    angular.module('app.directives.cssTopScroll',[])
        .directive('cssTopScroll', ["$window", function ($window) {
            var linkFunction = function (scope) {
                scope.$on("$locationChangeSuccess", function () {
                    $window.scrollTo(0, 0);
                    $("html, body").animate({ scrollTop: 0 }, "slow");
                });
            };

            return {
                restrict: 'E',
                link: linkFunction
            };
        }]);

}).call(this);