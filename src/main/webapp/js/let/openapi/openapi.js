/**
 * 
 */
(function() {
	
	$(document).ready(function() {
		openapi.bindEvent();
	});
	
	var openapi = {
		// =======================================================================
		// bind; event
		// =======================================================================
		
		bindEvent: function() {
			$('#add').on('click', function() {
				__.popup('/openapi/create', {
					height: 400
				});
			});
			$('#save').on('click', this.openapiCreatePost);
			$('#close').on('click', function() {
				__.close();
			});
		},
		
		// =======================================================================
		// To server side;
		// =======================================================================
		
		openapiGet: function() {
			location.href = '/openapi';
		},
		openapiPostList: function() {
			
			//
			$('content-table').find('table').find('tr').filter(':not(:nth-child(1))').remove();
			
			var _pageIndex = 1;
			__.ajax({
				url: '/openapi',
				dataType: 'html',
				method: 'POST',
				data: {
					serviceId: $('#serviceId').val(),
					serviceName: $('#serviceName').val(),
					managerName: $('#managerName').val(),
					serviceIp: $('#serviceIp').val(),
					pageIndex: _pageIndex
				},
				success: function(data) {
//				$('.content-table').html(data);
				}
			});
		},
		openapiGetDetailByPost: function() {
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
		},
		openapiCreateGet: function() {
		},
		openapiCreatePost: function() {
			//
			__.ajax({
				url: '/openapi/create',
				method: 'POST',
				data: {
					serviceId: $('#serviceId').val(),
					serviceName: $('#serviceName').val(),
					managerName: $('#managerName').val(),
					managerTel: $('#managerTel').val(),
					managerEmail: $('#managerEmail').val(),
					serviceIp: $('#serviceIp').val(),
					permissionKey: $('#permissionKey').val(),				
				},
				success: function(data) {
					__.alert('저장되었습니다.');
					__.close();
					openapiPostList();
				}
			});
		},
		openapiPut: function() {
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
		},
		openapiDelete: function() {
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
		}
		
	}
	
	window.openapi = openapi;
	
})();
