/**
 * 
 */
$(document).ready(function(){
	function display(target, serverdata){
		
		// Start HighCharts ...
		
		Highcharts.chart(target, {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Browser market shares. January, 2015 to May, 2015'
    },
    subtitle: {
        text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: serverdata
        }]
});
		
		//End HighCharts ...
		
	};
	
	
	
//	display ('highchart-section1', [{"name":"영화","y":8000},{"name":"About Time","y":10000},{"name":"123","y":100}]);
//	display ('highchart-section2', [{"name":"영화","y":8000},{"name":"About Time","y":10000},{"name":"123","y":100}]);
//	display ('highchart-section3', [{"name":"영화","y":8000},{"name":"About Time","y":10000},{"name":"123","y":100}]);
	
/*	
	$.ajax({
		url:'hive',
		dataType:'json',
		success:function(data){
			//alert(data);
			display (data);
			
		}
	});
*/	
	
	$('body').on('click', '.popup-project a', function(event) {
		event.preventDefault();
//		var windowObjectReference = window.open(strUrl, strWindowName, [strWindowFeatures]);
		var windowObjectReference = window.open('project');
	});
	
});