var chart;
$(function () {
    $('#evnt_bar').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Volunteers vs Victims'
        },
        xAxis: [{
            categories: ['Hackathon-San Jose','Begathon','FoodServes','ChildCares']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Volunteers',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Victims',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],

        tooltip: {
            shared: false
        },

        series: [{
            name: 'Victims',
            type: 'column',
            yAxis: 1,
            data: [49, 71, 106, 129],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}</b> '
            }
        }, {
            name: 'Victims error',
            type: 'errorbar',
            yAxis: 1,
            data: [[48, 51], [68, 73], [92, 110], [128, 136]],
            tooltip: {
                pointFormat: '(range: {point.low}-{point.high})<br/>'
            }
        }, {
            name: 'Volunteers',
            type: 'spline',
            data: [7, 6, 9, 14],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}</b> '
            }
        }, {
            name: 'Volunteers error',
            type: 'errorbar',
            data: [[6, 8], [5, 7], [9, 10], [14, 15]],
            tooltip: {
                pointFormat: '(range: {point.low}-{point.high})<br/>'
            }
        }]
    });
});