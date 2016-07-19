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
			$('#insert').on('click', this.openapiCreatePost);
			$('#close').on('click', __.close);
			$('section.content-table').on('click', 'tbody > tr', function(e) {
				var _data = $(e.target).parents('tr').data();
				var _url = __.convertUrl('/openapi/edit', _data);
				__.popup(_url, {
					height: 400
				});
			});
			$('#update').on('click', this.openapiPut);
			$('#delete').on('click', this.openapiDelete);
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
					// render; list 
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
					
					// render; pagination
					// TODO 구현
				}
			});
		},
		openapiGetDetailByPost: function() {
			// 
			__.ajax({
				url: '/openapi/view',
				method: 'POST',
				data: __.getParams(),
				success: function(data) {
					debugger;
					var _site = data.data.site;
					$('#serviceId').val(_site.serviceId);
					$('#serviceName').val(_site.serviceName);
					$('#managerName').val(_site.managerName);
					$('#managerTel').val(_site.managerTel);
					$('#managerEmail').val(_site.managerEmail);
					$('#serviceIp').val(_site.serviceIp);
					$('#permissionKey').val(_site.permissionKey);
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
					window.opener.openapi.openapiPostList();
				}
			});
		},
		openapiPut: function() {
			//
			__.ajax({
				url: '/openapi',
				method: 'PUT',
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
					window.opener.openapi.openapiPostList();
				}
			});
		},
		openapiDelete: function() {
			//
			__.ajax({
				url: '/openapi',
				method: 'DELETE',
				data: {
					serviceId: $('#serviceId').val(),
				},
				success: function(data) {
					__.alert('삭제되었습니다.');
					__.close();
					window.opener.openapi.openapiPostList();
				}
			});
		}
		
	}
	
	window.openapi = openapi;
	
})();
