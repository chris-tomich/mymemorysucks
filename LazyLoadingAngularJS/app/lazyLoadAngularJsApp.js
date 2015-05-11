lazyLoadAngularJsApp = angular.module("lazyLoadAngularJsApp", ["ngRoute"]);

lazyLoadAngularJsApp.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "/LazyLoadingAngularJS/app/controllers/homeController/homeController.html",
            controller: "homeController"
        })
        .when("/dashboard", {
            templateUrl: "/LazyLoadingAngularJS/app/controllers/dashboardController/dashboardController.html",
            controller: "dashboardController",
            resolve: {
                scriptDependencies: ["$q", function($q) {
                    return $q(function(resolve, reject) {
                        var jsLibraries = [
                            "./app/controllers/dashboardController/dashboardController"
                        ];

                        requirejs(jsLibraries, function () {
                            resolve();
                        });
                    });
                }]
            }
        })
        .when("/help", {
            templateUrl: "/LazyLoadingAngularJS/app/controllers/helpController/helpController.html",
            controller: "helpController",
            resolve: {
                scriptDependencies: ["$q", function($q) {
                    return $q(function(resolve, reject) {
                        var jsLibraries = [
                            "./app/controllers/helpController/helpController",
                            "./app/directives/helpContent/helpContent"
                        ];

                        requirejs(jsLibraries, function() {
                            resolve();
                        });
                    });
                }]
            }
        })
}]);