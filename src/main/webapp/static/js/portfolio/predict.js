/**
 * 
 */
$(document).ready(function(){
	
	renderMissionChart(target) {
		
	}
	
	$.ajax({
		url:'/rserve/predict1',
		method: 'POST',
		data: {
			totalincome: 1,
			food: 2,
			transportation: 3,
			education: 4
		},
		dataType:'json',
		success:function(data){
			debugger;
		}
	});	
	
/*	
	$.ajax({
		url:'/rserve/predict2',
		method: 'POST',
		data: {
			totalincome: 1,
			food: 2,
			transportation: 3,
			education: 4
		},
		dataType:'json',
		success:function(data){
			debugger;
		}
	});	
*/	
	
});