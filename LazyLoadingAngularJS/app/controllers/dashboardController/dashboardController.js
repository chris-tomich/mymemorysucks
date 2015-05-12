function dashboardController($scope) {
    $scope.graphData = {
        labels: [
            "Adelaide Crows",
            "Brisbane Lions",
            "Carlton",
            "Collingwood",
            "Essendon",
            "Fremantle",
            "Geelong Cats",
            "Gold Coast Suns",
            "GWS Giants",
            "Hawthorn",
            "Melbourne",
            "North Melbourne",
            "Port Adelaide",
            "Richmond",
            "St Kilda",
            "Sydney Swans",
            "West Coast Eagles",
            "Western Bulldogs"
        ],
        datasets: [
            {
                label: "Average Kicks",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [229.2, 187.8, 188.5, 206.7, 221.3, 222.7, 193.5, 196, 204.3, 232, 190.7, 191.7, 209, 198, 205.7, 209, 203.2, 197.2]
            },
            {
                label: "Average Handballs",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [138.5, 152.7, 142.5, 147, 164, 162.7, 159.5, 146.3, 178.2, 173.8, 132.3, 171.3, 172.2, 168.2, 158.3, 174.5, 166, 154.5]
            }
        ]
    };

    $scope.pieData = [
        {
            value: 204.8,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Kicks"
        },
        {
            value: 159.0,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Handballs"
        }
    ]
}