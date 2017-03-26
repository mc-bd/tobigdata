/**
 * 
 */
$(document).ready(function(){
	
	function renderUserIncomeChart(target) {
		Highcharts.chart(target, {
		    chart: {
		        type: 'column',
		        options3d: {
		            enabled: true,
		            alpha: 15,
		            beta: 15,
		            viewDistance: 25,
		            depth: 40
		        }
		    },

		    title: {
		        text: 'INCOME'
		    },

		    xAxis: {
		        categories: ['2016.11', '2016.12', '2017.01', '2017.02', '2017.03']
		    },

		    yAxis: {
		        allowDecimals: false,
		        min: 0,
		        title: {
		            text: 'Total Income Monthly'
		        }
		    },

		    tooltip: {
		        headerFormat: '<b>{point.key}</b><br>',
		        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
		    },

		    plotOptions: {
		        column: {
		            stacking: 'normal',
		            depth: 40
		        }
		    },

		    series: [{
		        name: '근로소득',
		        data: [5, 5, 5, 5, 5],
		        stack: 'male'
		    }, {
		        name: '이자소득',
		        data: [0.01, 0.01, 0.01, 0.01, 0.01],
		        stack: 'female'
		    }]
		});
	};
	
	function renderAvgIncomeChart(target) {
		Highcharts.chart(target, {
		    chart: {
		        type: 'column',
		        options3d: {
		            enabled: true,
		            alpha: 15,
		            beta: 15,
		            viewDistance: 25,
		            depth: 40
		        }
		    },

		    title: {
		        text: 'INCOME'
		    },

		    xAxis: {
		        categories: ['2016.11', '2016.12', '2017.01', '2017.02', '2017.03']
		    },

		    yAxis: {
		        allowDecimals: false,
		        min: 0,
		        title: {
		            text: 'Total Income Monthly'
		        }
		    },

		    tooltip: {
		        headerFormat: '<b>{point.key}</b><br>',
		        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
		    },

		    plotOptions: {
		        column: {
		            stacking: 'normal',
		            depth: 40
		        }
		    },

		    series: [{
		        name: '근로소득',
		        data: [5, 5, 5, 5, 5],
		        stack: 'male'
		    }, {
		        name: '이자소득',
		        data: [0.01, 0.01, 0.01, 0.01, 0.01],
		        stack: 'female'
		    }]
		});
	};
	
	function renderUserSaveChart(target) {
		Highcharts.chart(target, {
		    chart: {
		        plotBackgroundColor: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    title: {
		        text: '수입-지출 대<br>저축비율<br>2017년 3월',
		        align: 'center',
		        verticalAlign: 'middle',
		        y: 40
		    },
		    tooltip: {
		        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		    },
		    plotOptions: {
		        pie: {
		            dataLabels: {
		                enabled: true,
		                distance: -50,
		                style: {
		                    fontWeight: 'bold',
		                    color: 'white'
		                }
		            },
		            startAngle: -90,
		            endAngle: 90,
		            center: ['50%', '75%']
		        }
		    },
		    series: [{
		        type: 'pie',
		        name: 'Browser share',
		        innerSize: '50%',
		        data: [
		            ['수입', 500],
		            ['지출', 400],
		            ['저축', 100],
		            {
		                name: 'Proprietary or Undetectable',
		                y: 0.2,
		                dataLabels: {
		                    enabled: false
		                }
		            }
		        ]
		    }]
		});
	};
	
	function renderAvgSaveChart(target) {
		Highcharts.chart(target, {
		    chart: {
		        plotBackgroundColor: null,
		        plotBorderWidth: 0,
		        plotShadow: false
		    },
		    title: {
		        text: '수입-지출 대<br>저축비율<br>2017년 3월',
		        align: 'center',
		        verticalAlign: 'middle',
		        y: 40
		    },
		    tooltip: {
		        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		    },
		    plotOptions: {
		        pie: {
		            dataLabels: {
		                enabled: true,
		                distance: -50,
		                style: {
		                    fontWeight: 'bold',
		                    color: 'white'
		                }
		            },
		            startAngle: -90,
		            endAngle: 90,
		            center: ['50%', '75%']
		        }
		    },
		    series: [{
		        type: 'pie',
		        name: 'Browser share',
		        innerSize: '50%',
		        data: [
		            ['수입', 500],
		            ['지출', 400],
		            ['저축', 100],
		            {
		                name: 'Proprietary or Undetectable',
		                y: 0.2,
		                dataLabels: {
		                    enabled: false
		                }
		            }
		        ]
		    }]
		});
	};
	
	function renderAvgComparisonChart(target) {
		Highcharts.chart(target, {
		    title: {
		        text: 'Combination chart'
		    },
		    xAxis: {
		        categories: ['ordinary', 'food', 'disposable', 'transportation', 'education']
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
		        name: '100',
		        data: [700000, 200000, 130000, 60000, 10000]
		    }, {
		        type: 'column',
		        name: '200',
		        data: [700000, 200000, 130000, 60000, 10000]
		    }, {
		        type: 'column',
		        name: '300',
		        data: [700000, 200000, 130000, 60000, 10000]
		    }, {
		        type: 'column',
		        name: '300',
		        data: [700000, 200000, 130000, 60000, 10000]
		    }, {
		        type: 'column',
		        name: '300',
		        data: [700000, 200000, 130000, 60000, 10000]
		    }, {
		        type: 'column',
		        name: '300',
		        data: [700000, 200000, 130000, 60000, 10000]
		    }, {
		        type: 'column',
		        name: '300',
		        data: [700000, 200000, 130000, 60000, 10000]
		    }, {
		        type: 'column',
		        name: '300',
		        data: [700000, 200000, 130000, 60000, 10000]
		    }, {
		        type: 'spline',
		        name: '400',
		        data: [700000, 200000, 130000, 60000, 10000],
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
		            name: 'John',
		            y: 23,
		            color: Highcharts.getOptions().colors[1] // John's color
		        }, {
		            name: 'John',
		            y: 23,
		            color: Highcharts.getOptions().colors[1] // John's color
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
		        size: 60,
		        showInLegend: false,
		        dataLabels: {
		            enabled: false
		        }
		    }]
		});			
	};
	
	renderUserIncomeChart('highchart-section1-1');
	renderAvgIncomeChart('highchart-section1-2');
	renderUserSaveChart('highchart-section1-3');
	renderAvgSaveChart('highchart-section1-4');
	
	renderAvgComparisonChart('highchart-section2-1');
	
});