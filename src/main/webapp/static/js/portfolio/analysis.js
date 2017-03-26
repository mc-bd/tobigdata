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
		            ['주거/수도/광열', 5],
		            ['교통/차량', 2],
		            ['통신', 2],
		            
		            ['생활용품/가사서비스', 1],
		            ['외식', 3],
		            ['식료품', 1],
		            ['카페', 1],
		            ['술/담배/유흥', 1],
		            
		            ['금융/보험', 3],
		            ['의료/건강', 1],
		           
		            ['의류/신발', 1],
		            ['뷰티/미용', 1],
		            ['학습/교육', 3],
		            ['문화/예술', 2],
		            ['스포츠/레져', 1],
		            ['여행/숙박', 1]
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
	
	$.ajax({
		url:'/hive/selectAvgExpense',
		contentType: "application/json; charset=UTF-8",
		method: 'POST',
		data: JSON.stringify({
			level: 200
		}),
		dataType:'json',
		beforeSend: function() {
		},
		success:function(data){
			debugger;
			renderUserExpenseChart('highchart-section1-1');
		}
	});		
	
	renderAvgExpenseChart('highchart-section1-2');
	renderUserSaveChart('highchart-section1-3');
	renderAvgSaveChart('highchart-section1-4');
	
	renderAvgComparisonChart('highchart-section2-1');
	
});