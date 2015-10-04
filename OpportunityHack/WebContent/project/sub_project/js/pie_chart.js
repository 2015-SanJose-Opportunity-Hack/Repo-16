$(function () {
    $('#pie_chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: true,
            type: 'pie'
        },
        title: {
            text: 'Volunteers'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.0f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>',
                    distance: 10,
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: "Volunteers",
            colorByPoint: true,
            data: [{
                name: "Runners",
                y: 56
            }, {
                name: "Teachers",
                y: 24,
                sliced: true,
                selected: true
            }, {
                name: "Dancers",
                y: 10
            }, {
                name: "Painters",
                y: 4
            }, {
                name: "Jumpers",
                y: 3
            }, {
                name: "Donors",
                y: 2
            }]
        }]
    });
});
