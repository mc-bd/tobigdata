/**
 * 
 */
$(document).ready(function(){
	
	// Percentage area
	function renderMissionChart(target) {
		Highcharts.chart(target, {
		    chart: {
		        type: 'area'
		    },
		    title: {
		        text: 'Your Seed Money'
		    },
		    subtitle: {
		        text: '기간별 누적달성률'
		    },
		    xAxis: {
		        categories: ['2016.06', '2016.08', '2016.10',  '2016.12', '2017.01', '2017.02', '2017.03'],
		        tickmarkPlacement: 'on',
		        title: {
		            enabled: false
		        }
		    },
		    yAxis: {
		        title: {
		            text: 'Percent'
		        }
		    },
		    tooltip: {
		        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
		        split: true
		    },
		    plotOptions: {
		        area: {
		            stacking: 'percent',
		            lineColor: '#ffffff',
		            lineWidth: 1,
		            marker: {
		                lineWidth: 1,
		                lineColor: '#ffffff'
		            }
		        }
		    },
		    series: [{
		        name: '잔여율',
		        data: [90, 70, 50, 30, 20, 10, 0]
		    }, {
		        name: '누적률',
		        data: [10, 30, 50, 70, 80, 90, 100]
		    }]
		});
	};
	
	// http://www.highcharts.com/demo/3d-column-stacking-grouping
	function renderIncomeChart(target) {
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
		        data: [2000000, 2000000, 2000000,  2000000,  2000000],
		        stack: 'male'
		    }, {
		        name: '이자소득',
		        data: [40000, 40800, 42432, 44129, 45894],
		        stack: 'female'
		    }]
		});
	};
	
	// http://www.highcharts.com/demo/3d-pie-donut
	function renderExpenseChart(target) {
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
	
	// http://www.highcharts.com/demo/pie-semi-circle/dark-unica
	function renderSaveChart(target) {
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
		            ['수입', 200],
		            ['지출', 150],
		            ['저축', 50],
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
	
	renderMissionChart('highchart-section1-1');
	renderIncomeChart('highchart-section2-1');
	renderExpenseChart('highchart-section2-2');
	renderSaveChart('highchart-section2-3');
	
/*	
	$.ajax({
		url:'/api/mission',
//		url:'/api/income',
//		url:'/api/expense',
//		url:'/api/save',
		dataType:'json',
		success:function(data){
			renderMissionChart('highchart-section1-1');
		}
	});	
*/	
	
});