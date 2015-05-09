lazyLoadAngularJsApp = angular.module("lazyLoadAngularJsApp", ["ngRoute"]);

lazyLoadAngularJsApp.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "",
            controller: "",
            resolve: {
                scriptDependencies: ["$q", function($q) {
                    return $q(function(resolve, reject) {
                        requirejs(["./apps/controllers/homeController/homeController"], function() {
                            resolve();
                        });
                    });
                }]
            }
        })
}]);