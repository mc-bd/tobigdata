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
		debugger;
		var arr = data.data.data;
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
		               ['주거/수도/광열', arr[0]['housing']],
		               ['교통/차량', arr[0]['transportation']],
		               ['통신', arr[0]['communication']],
		               
		               ['생활용품/가사서비스', arr[0]['supplies']],
		               ['외식', arr[0]['eatout']],
		               ['식료품', arr[0]['food']],
		               ['술/담배/유흥', arr[0]['soju']],
		               
		               ['의료/건강', arr[0]['medical']],
		               ['의류/신발', arr[0]['clothing']],
		               ['학습/교육', arr[0]['education']],
		               ['여가/문화', arr[0]['entertainment']],
		               ['기타', arr[0]['etc']],
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
		debugger;
		var arr = data.data.data;
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
		            ['수입', arr[0]['tincome']],
		            ['지출', arr[0]['tspend']],
		            ['저축', arr[0]['save']],
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
		debugger;
		var arr = data.data.data;
//		for (var i = 1; i < arr.length; i++) {
//			for ( var key in arr[i]) {
//				arr[i][key] = Math.round(arr[i][key]);
//			}
//		}
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
		        data: [arr[1]['ordinary'], arr[1]['food'], arr[1]['disposable'], arr[1]['transportation'], arr[1]['education']]
		    }, {
		        type: 'column',
		        name: '200',
		        data: [arr[2]['ordinary'], arr[2]['food'], arr[2]['disposable'], arr[2]['transportation'], arr[2]['education']]
		    }, {
		        type: 'column',
		        name: '300',
		        data: [arr[3]['ordinary'], arr[3]['food'], arr[3]['disposable'], arr[3]['transportation'], arr[3]['education']]
		    }, {
		        type: 'column',
		        name: '400',
		        data: [arr[4]['ordinary'], arr[4]['food'], arr[4]['disposable'], arr[4]['transportation'], arr[4]['education']]
		    }, {
		        type: 'column',
		        name: '500',
		        data: [arr[5]['ordinary'], arr[5]['food'], arr[5]['disposable'], arr[5]['transportation'], arr[5]['education']]
		    }, {
		        type: 'column',
		        name: '600',
		        data: [arr[6]['ordinary'], arr[6]['food'], arr[6]['disposable'], arr[6]['transportation'], arr[6]['education']]
		    }, {
		        type: 'column',
		        name: '700',
		        data: [arr[7]['ordinary'], arr[7]['food'], arr[7]['disposable'], arr[7]['transportation'], arr[7]['education']]
/*		    
		    }, {
		        type: 'spline',
		        name: 'avg',
		        data: [arr[1]['ordinary'], arr[1]['food'], arr[1]['disposable'], arr[1]['transportation'], arr[1]['education']],
		        marker: {
		            lineWidth: 2,
		            lineColor: Highcharts.getOptions().colors[3],
		            fillColor: 'white'
		        }
*/		    
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
			renderAvgExpenseChart('highchart-section1-2', data);
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
			renderAvgSaveChart('highchart-section1-4', data);
		}
	});
	
	$.ajax({
		url:'/hive/selectAllAvgExpense',
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
			renderAvgComparisonChart('highchart-section2-1', data);
		}
	});
	
	
});