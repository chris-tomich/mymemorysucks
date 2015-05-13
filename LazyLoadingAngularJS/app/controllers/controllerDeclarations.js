lazyLoadAngularJsApp.controller("homeController", ["$scope", function($scope) {
}]);

lazyLoadAngularJsApp.controller("dashboardController", ["$scope", "aflStatsService", function($scope, aflStatsService) {
    var dashboardControllerInstance = new dashboardController($scope, aflStatsService);
}]);

lazyLoadAngularJsApp.controller("aboutController", ["$scope", function($scope) {
    var aboutControllerInstance = new aboutController($scope);
}]);