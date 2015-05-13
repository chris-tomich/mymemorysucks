function dashboardController($scope, aflStatsService) {
    $scope.graphData = aflStatsService.getGraphData();

    $scope.pieData = aflStatsService.getPieData();

    $scope.teamStatsData = aflStatsService.getTableData();
}