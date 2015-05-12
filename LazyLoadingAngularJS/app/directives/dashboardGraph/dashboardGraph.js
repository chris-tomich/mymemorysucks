function dashboardGraph() {
    this.restrict = "A";

    this.scope = {
        graphData: "=llGraphdata"
    };

    this.link = function (scope, element, attr, ctrl) {
        var ctx = element[0].getContext("2d");

        if (ctx !== undefined && ctx !== null) {
            scope.barChart = new Chart(ctx).Bar(scope.graphData);
        }
    };
}