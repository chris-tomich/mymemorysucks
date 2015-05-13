function aflStatsService() {
    this.getGraphData = function () {
        return {
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
    };

    this.getPieData = function() {
        return [
            {
                value: 204.8,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "Kicks"
            },
            {
                value: 159.0,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Handballs"
            }
        ];
    };

    this.getTableData = function() {
        return [
            {
                teamName: "Adelaide Crows",
                kicks: 229.2,
                handballs: 138.5,
                disposals: 367.7,
                marks: 102.3,
                hitOuts: 42.2,
                freesFor: 16.5,
                freesAgainst: 16.7,
                tackles: 69.5,
                goals: 14.3,
                behinds: 12
            },
            {
                teamName: "Brisbane Lions",
                kicks: 187.8,
                handballs: 152.7,
                disposals: 340.5,
                marks: 81.2,
                hitOuts: 44.3,
                freesFor: 18.7,
                freesAgainst: 21,
                tackles: 62.3,
                goals: 9,
                behinds: 10.3
            },
            {
                teamName: "Carlton",
                kicks: 188.5,
                handballs: 142.5,
                disposals: 331,
                marks: 72.7,
                hitOuts: 43.3,
                freesFor: 20.2,
                freesAgainst: 17.5,
                tackles: 58.8,
                goals: 11,
                behinds: 11.5
            },
            {
                teamName: "Collingwood",
                kicks: 206.7,
                handballs: 147,
                disposals: 353.7,
                marks: 76.7,
                hitOuts: 36.7,
                freesFor: 19.8,
                freesAgainst: 18,
                tackles: 72.8,
                goals: 12.8,
                behinds: 12.5
            },
            {
                teamName: "Essendon",
                kicks: 221.3,
                handballs: 164,
                disposals: 385.3,
                marks: 98.7,
                hitOuts: 36,
                freesFor: 19.5,
                freesAgainst: 21.8,
                tackles: 70.2,
                goals: 10.2,
                behinds: 10
            },
            {
                teamName: "Fremantle",
                kicks: 222.7,
                handballs: 162.7,
                disposals: 385.3,
                marks: 111.2,
                hitOuts: 48.3,
                freesFor: 21,
                freesAgainst: 17,
                tackles: 55,
                goals: 14,
                behinds: 9.7
            },
            {
                teamName: "Geelong Cats",
                kicks: 193.5,
                handballs: 159.5,
                disposals: 353,
                marks: 94.7,
                hitOuts: 31.7,
                freesFor: 15.3,
                freesAgainst: 21.8,
                tackles: 64.8,
                goals: 11.5,
                behinds: 10.7
            },
            {
                teamName: "Gold Coast Suns",
                kicks: 196,
                handballs: 146.3,
                disposals: 342.3,
                marks: 71.8,
                hitOuts: 37.2,
                freesFor: 18.8,
                freesAgainst: 18,
                tackles: 62.8,
                goals: 12,
                behinds: 13
            },
            {
                teamName: "GWS Giants",
                kicks: 204.3,
                handballs: 178.2,
                disposals: 382.5,
                marks: 91.2,
                hitOuts: 40,
                freesFor: 22.2,
                freesAgainst: 18.3,
                tackles: 62.3,
                goals: 12.5,
                behinds: 14.7
            },
            {
                teamName: "Hawthorn",
                kicks: 232,
                handballs: 173.8,
                disposals: 405.8,
                marks: 108.5,
                hitOuts: 44.8,
                freesFor: 16.2,
                freesAgainst: 18.3,
                tackles: 60,
                goals: 15.5,
                behinds: 14.5
            },
            {
                teamName: "Melbourne",
                kicks: 190.7,
                handballs: 132.3,
                disposals: 323,
                marks: 76.3,
                hitOuts: 40.3,
                freesFor: 19,
                freesAgainst: 20.5,
                tackles: 73.5,
                goals: 9.5,
                behinds: 11.2
            },
            {
                teamName: "North Melbourne",
                kicks: 191.7,
                handballs: 171.3,
                disposals: 363,
                marks: 85.7,
                hitOuts: 43.8,
                freesFor: 20.2,
                freesAgainst: 18.7,
                tackles: 54.3,
                goals: 13.8,
                behinds: 10.8
            },
            {
                teamName: "Port Adelaide",
                kicks: 209,
                handballs: 172.2,
                disposals: 381.2,
                marks: 95.8,
                hitOuts: 39.3,
                freesFor: 19.3,
                freesAgainst: 17.8,
                tackles: 70.7,
                goals: 12.7,
                behinds: 8.5
            },
            {
                teamName: "Richmond",
                kicks: 198,
                handballs: 168.2,
                disposals: 366.2,
                marks: 83.3,
                hitOuts: 36.2,
                freesFor: 25.5,
                freesAgainst: 19.7,
                tackles: 60.8,
                goals: 12,
                behinds: 12.8
            },
            {
                teamName: "St Kilda",
                kicks: 205.7,
                handballs: 158.3,
                disposals: 364,
                marks: 91,
                hitOuts: 45.7,
                freesFor: 19,
                freesAgainst: 24.3,
                tackles: 68.2,
                goals: 12.3,
                behinds: 9.8
            },
            {
                teamName: "Sydney Swans",
                kicks: 209,
                handballs: 174.5,
                disposals: 383.5,
                marks: 77.7,
                hitOuts: 53.3,
                freesFor: 17.8,
                freesAgainst: 20.8,
                tackles: 76.7,
                goals: 11.7,
                behinds: 12.7
            },
            {
                teamName: "West Coast Eagles",
                kicks: 203.2,
                handballs: 166,
                disposals: 369.2,
                marks: 93,
                hitOuts: 48,
                freesFor: 18.7,
                freesAgainst: 15.3,
                tackles: 62.7,
                goals: 15.3,
                behinds: 10.5
            },
            {
                teamName: "Western Bulldogs",
                kicks: 197.2,
                handballs: 154.5,
                disposals: 351.7,
                marks: 74.5,
                hitOuts: 33.8,
                freesFor: 15.7,
                freesAgainst: 17.7,
                tackles: 75,
                goals: 12.7,
                behinds: 12
            }
        ];
    }
}