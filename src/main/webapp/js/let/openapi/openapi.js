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
			// ajax
			var _pageIndex = 1;
			__.ajax({
				url: '/openapi',
				dataType: 'json',
				method: 'POST',
				data: {
					serviceId: $('#serviceId').val(),
					serviceName: $('#serviceName').val(),
					managerName: $('#managerName').val(),
					serviceIp: $('#serviceIp').val(),
					pageIndex: _pageIndex
				},
				success: function(data) {
					debugger;
					// 
					var _template = $('#openapiListTrTemplate').html();
					
					var _sites = data.data.sites;
					var _html = [];
					for (var i = 0; i < _sites.length; i++) {
						_html.push(_template
									.replace(/{{rnum}}/gi, _sites.length - i)
									.replace(/{{serviceId}}/gi, _sites[i]['serviceId'])
									.replace(/{{serviceName}}/gi, _sites[i]['serviceName'])
									.replace(/{{managerName}}/gi, _sites[i]['managerName'])
									.replace(/{{serviceIp}}/gi, _sites[i]['serviceIp'])
									.replace(/{{permissionKey}}/gi, _sites[i]['permissionKey'])
						);
					}
					
					$('.content-table').find('table').find('tbody').empty().append(_html.join(''));
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
