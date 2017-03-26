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
				totalincome: $('#totalincome').val(),
				food: $('#food').val(),
				transportation: $('#transportation').val(),
				education: $('#education').val()
			}),
			dataType:'json',
			beforeSend: function() {
				$('#predict1-text').text('');
			},
			success:function(data){
				var result = data.data;
				$('#predict1-text').text(result.data + '원');
			}
		});	
		
	});
	
	$('#predict2-button').on('click', function() {
		
		var clothing = $('clothing').val(); // 의류
		var soju = $('soju').val(); // 주류
		var nonrecurring = $('nonrecurring').val(); // 비경상소득

		var totalspend = 0; // 등급

		if (clothing < 158900) {
			if (clothing < 83420) {
				if (soju < 20000) {
					totalspend=7;
					console.log("총소비<1014000, 소비등급 7");
				} else {
					totalspend=7;
					console.log("총소비<1541000, 소비등급6");
				}
			} else {
				if (clothing < 124400) {
					totalspend=7;
					console.log("총소비<2204000 소비등급 5");
				} else {
					totalspend=7;
					console.log("총소비<2823000, 소비등급 4");
				}
			}
		} else {
			if (nonrecurring < 259000) {
				if (clothing < 196900) {
					totalspend=7;
					console.log("총소비 <3451000, 소비등급 3");
				} else {
					totalspend=7;
					console.log("총소비 <4061000 , 소비등급 2");
				}
			} else {
				totalspend=7;
				console.log("총소비>5384000, 소비등급 1");
			}
		}

		$('#predict2-text').text('totalspend' + '등급');
		
	});
	
});