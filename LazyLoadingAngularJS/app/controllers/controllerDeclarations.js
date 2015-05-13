lazyLoadAngularJsApp.controller("homeController", ["$scope", function($scope) {
    var homeControllerInstance = new homeController($scope);
}]);

lazyLoadAngularJsApp.controller("dashboardController", ["$scope", "aflStatsService", function($scope, aflStatsService) {
    var dashboardControllerInstance = new dashboardController($scope, aflStatsService);
}]);

lazyLoadAngularJsApp.controller("helpController", ["$scope", function($scope) {
    var helpControllerInstance = new helpController($scope);
}]);