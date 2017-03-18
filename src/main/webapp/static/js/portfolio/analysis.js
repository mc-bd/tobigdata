/**
 * 
 */
$(document).ready(function(){
	
	function renderPieChart2(target) {
		Highcharts.chart(target, {
		    title: {
		        text: 'Combination chart'
		    },
		    xAxis: {
		        categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
		    },
		    labels: {
		        items: [{
		            html: 'Total fruit consumption',
		            style: {
		                left: '50px',
		                top: '18px',
		                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
		            }
		        }]
		    },
		    series: [{
		        type: 'column',
		        name: 'Jane',
		        data: [3, 2, 1, 3, 4]
		    }, {
		        type: 'column',
		        name: 'John',
		        data: [2, 3, 5, 7, 6]
		    }, {
		        type: 'column',
		        name: 'Joe',
		        data: [4, 3, 3, 9, 0]
		    }, {
		        type: 'spline',
		        name: 'Average',
		        data: [3, 2.67, 3, 6.33, 3.33],
		        marker: {
		            lineWidth: 2,
		            lineColor: Highcharts.getOptions().colors[3],
		            fillColor: 'white'
		        }
		    }, {
		        type: 'pie',
		        name: 'Total consumption',
		        data: [{
		            name: 'Jane',
		            y: 13,
		            color: Highcharts.getOptions().colors[0] // Jane's color
		        }, {
		            name: 'John',
		            y: 23,
		            color: Highcharts.getOptions().colors[1] // John's color
		        }, {
		            name: 'Joe',
		            y: 19,
		            color: Highcharts.getOptions().colors[2] // Joe's color
		        }],
		        center: [100, 80],
		        size: 100,
		        showInLegend: false,
		        dataLabels: {
		            enabled: false
		        }
		    }]
		});
		
	};
	
	function renderPieChart(target) {
		Highcharts.chart(target, {
		    chart: {
		        plotBackgroundColor: null,
		        plotBorderWidth: null,
		        plotShadow: false,
		        type: 'pie'
		    },
		    title: {
		        text: 'Browser market shares January, 2015 to May, 2015'
		    },
		    tooltip: {
		        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		    },
		    plotOptions: {
		        pie: {
		            allowPointSelect: true,
		            cursor: 'pointer',
		            dataLabels: {
		                enabled: true,
		                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                style: {
		                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                }
		            }
		        }
		    },
		    series: [{
		        name: 'Brands',
		        colorByPoint: true,
		        data: [{
		            name: 'Microsoft Internet Explorer',
		            y: 56.33
		        }, {
		            name: 'Chrome',
		            y: 24.03,
		            sliced: true,
		            selected: true
		        }, {
		            name: 'Firefox',
		            y: 10.38
		        }, {
		            name: 'Safari',
		            y: 4.77
		        }, {
		            name: 'Opera',
		            y: 0.91
		        }, {
		            name: 'Proprietary or Undetectable',
		            y: 0.2
		        }]
		    }]
		});			
	};
	
	renderPieChart('highchart-section1-1');
	renderPieChart('highchart-section1-2');
	renderPieChart('highchart-section1-3');
	renderPieChart('highchart-section1-4');
	
	renderPieChart2('highchart-section2-1');
	
	renderPieChart('highchart-section3-1');
	renderPieChart('highchart-section3-2');
	renderPieChart('highchart-section3-3');
	renderPieChart('highchart-section3-4');
	
});