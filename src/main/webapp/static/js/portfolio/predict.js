/**
 * 
 */
$(document).ready(function(){
	
	$('#predict1-button').on('click', function() {
		
		$.ajax({
			url:'/rserve/predict1',
			contentType: "application/json; charset=UTF-8",
			method: 'POST',
			data: JSON.stringify({
				totalincome: 1,
				food: 2,
				transportation: 3,
				education: 4
			}),
			dataType:'json',
			beforeSend: function() {
				$('#predict1-text').text('');
			},
			success:function(data){
				var result = data.data;
				$('#predict1-text').text(result + '원');
			}
		});	
		
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