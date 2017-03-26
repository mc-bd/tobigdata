/**
 * 
 */
$(document).ready(function(){
	
	function renderUserExpenseChart(target, data) {
		Highcharts.chart(target, {
		    chart: {
		        type: 'pie',
		        options3d: {
		            enabled: true,
		            alpha: 45
		        }
		    },
		    title: {
		        text: 'SPEND'
		    },
		    subtitle: {
		        text: 'Monthly Spend Categories in Detail'
		    },
		    plotOptions: {
		        pie: {
		            innerSize: 100,
		            depth: 45
		        }
		    },
		    series: [{
		        name: 'Delivered amount',
		        data: [
		               ['주거/수도/광열', 500000],
		               ['교통/차량', 50000],
		               ['통신', 100000],
		               
		               ['생활용품/가사서비스', 300000],
		               ['외식', 100000],
		               ['식료품', 50000],
		               ['술/담배/유흥', 0],
		               
		               ['의료/건강', 100000],
		               ['의류/신발', 100000],
		               ['학습/교육', 50000],
		               ['여가/문화', 100000],
		               ['기타', 50000]
		        ]
		    }]
		});
	};
	
	function renderAvgExpenseChart(target, data) {
		Highcharts.chart(target, {
		    chart: {
		        type: 'pie',
		        options3d: {
		            enabled: true,
		            alpha: 45
		        }
		    },
		    title: {
		        text: 'SPEND'
		    },
		    subtitle: {
		        text: 'Monthly Spend Categories in Detail'
		    },
		    plotOptions: {
		        pie: {
		            innerSize: 100,
		            depth: 45
		        }
		    },
		    series: [{
		        name: 'Delivered amount',
		        data: [
		               ['주거/수도/광열', 5],
		               ['교통/차량', 2],
		               ['통신', 2],
		               
		               ['생활용품/가사서비스', 1],
		               ['외식', 3],
		               ['식료품', 1],
		               ['술/담배/유흥', 1],
		               
		               ['의료/건강', 1],
		               ['의류/신발', 1],
		               ['학습/교육', 3],
		               ['여가/문화', 2],
		               ['기타', 1]
		        ]
		    }]
		});
	};
	
	function renderUserSaveChart(target, data) {
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
	
	function renderAvgSaveChart(target, data) {
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
	
	function renderAvgComparisonChart(target, data) {
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
		        name: '400',
		        data: [700000, 200000, 130000, 60000, 10000]
		    }, {
		        type: 'column',
		        name: '500',
		        data: [700000, 200000, 130000, 60000, 10000]
		    }, {
		        type: 'column',
		        name: '600',
		        data: [700000, 200000, 130000, 60000, 10000]
		    }, {
		        type: 'column',
		        name: '700',
		        data: [700000, 200000, 130000, 60000, 10000]
		    }, {
		        type: 'spline',
		        name: '0',
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
		            name: '100',
		            y: 13,
		            color: Highcharts.getOptions().colors[0] // Jane's color
		        }, {
		            name: '200',
		            y: 23,
		            color: Highcharts.getOptions().colors[1] // John's color
		        }, {
		            name: '300',
		            y: 23,
		            color: Highcharts.getOptions().colors[2] // John's color
		        }, {
		            name: '400',
		            y: 23,
		            color: Highcharts.getOptions().colors[3] // John's color
		        }, {
		            name: '500',
		            y: 23,
		            color: Highcharts.getOptions().colors[4] // John's color
		        }, {
		            name: '600',
		            y: 23,
		            color: Highcharts.getOptions().colors[5] // John's color
		        }, {
		            name: '700',
		            y: 19,
		            color: Highcharts.getOptions().colors[6] // Joe's color
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
	
	renderUserExpenseChart('highchart-section1-1');
	
	$.ajax({
		url:'/hive/selectAvgExpense',
		contentType: "application/json; charset=UTF-8",
		method: 'POST',
		data: JSON.stringify({
			level: 200
		}),
		dataType:'json',
		beforeSend: function() {
			var target = document.getElementById('highchart-section1-2')
			new Spinner({color:'#fff', lines: 12}).spin(target);
		},
		success:function(data){
			renderAvgExpenseChart('highchart-section1-2');
		}
	});
	
	renderUserSaveChart('highchart-section1-3');
	
	$.ajax({
		url:'/hive/selectAvgSave',
		contentType: "application/json; charset=UTF-8",
		method: 'POST',
		data: JSON.stringify({
			level: 200
		}),
		dataType:'json',
		beforeSend: function() {
			var target = document.getElementById('highchart-section1-4')
			new Spinner({color:'#fff', lines: 12}).spin(target);
		},
		success:function(data){
			renderAvgSaveChart('highchart-section1-4');
		}
	});
	
	$.ajax({
		url:'/hive/selectAvgExpense',
		contentType: "application/json; charset=UTF-8",
		method: 'POST',
		data: JSON.stringify({
			level: 200
		}),
		dataType:'json',
		beforeSend: function() {
			var target = document.getElementById('highchart-section2-1')
			new Spinner({color:'#fff', lines: 12}).spin(target);
		},
		success:function(data){
			renderAvgComparisonChart('highchart-section2-1');
		}
	});
	
	
});