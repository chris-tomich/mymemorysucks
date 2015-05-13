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
                            "./app/controllers/dashboardController/dashboardController",
                            "./app/services/aflStatsService/aflStatsService",
                            "./app/directives/dashboardGraph/dashboardGraph",
                            "./app/directives/dashboardPieChart/dashboardPieChart",
                            "./js/chart"
                        ];

                        requirejs(jsLibraries, function () {
                            resolve();
                        });
                    });
                }]
            }
        })
        .when("/about", {
            templateUrl: "/LazyLoadingAngularJS/app/controllers/aboutController/aboutController.html",
            controller: "aboutController",
            resolve: {
                scriptDependencies: ["$q", function($q) {
                    return $q(function(resolve, reject) {
                        var jsLibraries = [
                            "./app/controllers/aboutController/aboutController"
                        ];

                        requirejs(jsLibraries, function() {
                            resolve();
                        });
                    });
                }]
            }
        })
}]);