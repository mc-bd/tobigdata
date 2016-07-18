/**
 * 
 */
(function() {
	
	$(document).ready(function() {
		openapiGetList();
	});
	
	function openapiGet() {
		location.href = '/openapi';
	};
	function openapiGetList() {
		__.ajax({
			url: '/openapi',
			method: 'GET',
			async: false,
			data: {
			},
			success: function(data) {
				alert(JSON.stringify(data));
			}
		});
	} ;
	function openapiGetDetailByPost() {
		// 
		__.ajax({
			url: '/openapi',
			method: 'POST',
			async: false,
			data: {
				"serviceId": "11",
			},
			success: function(data) {
				alert(JSON.stringify(data));
			}
		});
	};
	function openapiCreateGet() {
	};
	function openapiCreatePost() {
		//
		__.ajax({
			url: '/openapi/create',
			method: 'POST',
			async: false,
			data: {
				"serviceId": "11",
				"serviceName": "22",
				"managerName": "33",
				"managerTel": "44",
				"managerEmail": "55",
				"serviceIp": "66",
				"permissionKey": "77"
			},
			success: function(data) {
				alert(JSON.stringify(data));
			}
		});
	};
	function openapiPut() {
		//
		__.ajax({
			url: '/openapi',
			method: 'PUT',
			async: false,
			data: {
				"serviceId": "11",
				"serviceName": "2",
				"managerName": "33",
				"managerTel": "44",
				"managerEmail": "55",
				"serviceIp": "66",
				"permissionKey": "77"
			},
			success: function(data) {
				alert(JSON.stringify(data));
			}
		});
	};
	function openapiDelete() {
		//
		__.ajax({
			url: '/openapi',
			method: 'DELETE',
			async: false,
			data: {
				"serviceId": "11",
			},
			success: function(data) {
				alert(JSON.stringify(data));
			}
		});
	};
	
})();