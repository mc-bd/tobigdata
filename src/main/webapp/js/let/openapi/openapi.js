/**
 * 
 */
(function() {
	
	$(document).ready(function() {
		openapiPostList();
	});
	
	function openapiGet() {
		location.href = '/openapi';
	};
	function openapiPostList() {
		var _pageIndex = 1;
		__.ajax({
			url: '/openapi',
			method: 'POST',
			data: {
				serviceId: $('#serviceId').val(),
				serviceName: $('#serviceName').val(),
				managerName: $('#managerName').val(),
				serviceIp: $('#serviceIp').val(),
				pageIndex: _pageIndex
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
			data: {
				"serviceId": "11",
			},
			success: function(data) {
				alert(JSON.stringify(data));
			}
		});
	};
	
})();