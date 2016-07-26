/**
 * 
 */
(function() {
	
	$(document).ready(function() {
		openapi.bindEvent();
		openapi.render();
	});
	
	var openapi = {
		// =======================================================================
		// bind; event
		// =======================================================================
		
		bindEvent: function() {
			var that = this;
			$('#search').on('click', function(e) {
				$('#serviceId').val($('#serviceIdTxt').val());
				$('#serviceName').val($('#serviceNameTxt').val());
				$('#managerName').val($('#managerNameTxt').val());
				$('#serviceIp').val($('#serviceIpTxt').val());
				$('#createDatetime').val($('#createDatetimeTxt').val());
				that.openapiPostList(e);
			});
			$('#reset').on('click', function(e) {
				var _target = $(e.target).parents('table');
				__.resetElement(_target);
			});
			$('section.content-table').on('click', 'tbody > tr', function(e) {
				var _data = $(e.target).parents('tr').data();
				var _url = __.convertUrl('/openapi/edit', _data);
				__.popup(_url, {
					height: 550
				});
			});
			$('ul.pagination').on('click', 'li', function(e) {
				var _page = $(e.target).data('page');
				that.openapiPostList(e, _page);
			});
			$('#add').on('click', function() {
				__.popup('/openapi/create', {
					height: 550
				});
			});
			$('#insert').on('click', this.openapiCreatePost);
			$('#update').on('click', this.openapiPut);
			$('#delete').on('click', this.openapiDelete);
			$('#close').on('click', __.close);
		},
		
		// =======================================================================
		// render;
		// =======================================================================
		
		render: function() {
			__.showNavigation({
				menu1text: 'Open API',
				menu2text: '사이트 관리'
			});
		},
		
		// =======================================================================
		// To server side;
		// =======================================================================
		
		openapiGet: function() {
			location.href = '/openapi';
		},
		openapiPostList: function(e, pageIndex) {
			// ajax
			__.ajax({
				url: '/openapi',
				dataType: 'json',
				method: 'POST',
				data: {
					serviceId: $('#serviceId').val(),
					serviceName: $('#serviceName').val(),
					managerName: $('#managerName').val(),
					serviceIp: $('#serviceIp').val(),
					createDatetime: $('#createDatetime').val(),
					pageIndex: pageIndex || 1
				},
				success: function(data) {
					var _template = '';
					var _htmlBuilder = [];
					
					// render; list 
					var _records = data.data.records;
					_template = $('#openapi-list-tr-template').html();
					_htmlBuilder = [];
					for (var i = 0; i < _records.length; i++) {
						_htmlBuilder.push(_template
									.replace(/{{rnum}}/gi, _records[i]['rnum'])
									.replace(/{{serviceId}}/gi, _records[i]['serviceId'])
									.replace(/{{serviceName}}/gi, _records[i]['serviceName'])
									.replace(/{{managerName}}/gi, _records[i]['managerName'])
									.replace(/{{serviceIp}}/gi, _records[i]['serviceIp'])
									.replace(/{{createDatetime}}/gi, _records[i]['createDatetime'])
						);
					}
					if (_records.length == 0) {
						_htmlBuilder.push('<tr style="height: 10px;"></tr>');
					}
					$('.content-table').find('table').find('tbody').empty().append(_htmlBuilder.join(''));
					
					// render; pagination
					__.renderPagination(data.data.paginationInfo);
				}
			});
		},
		openapiGetDetailByPost: function() {
			if (__.getMode() == 'C') {
				return;
			}
			// 
			__.ajax({
				url: '/openapi/view',
				method: 'POST',
				data: __.getParams(),
				success: function(data) {
					var _record = data.data.record;
					$('#serviceId').val(_record.serviceId);
					$('#serviceName').val(_record.serviceName);
					$('#managerName').val(_record.managerName);
					$('#managerTel').val(_record.managerTel);
					$('#managerEmail').val(_record.managerEmail);
					$('#serviceIp').val(_record.serviceIp);
					$('#permissionKey').val(_record.permissionKey);
					$('#createDatetime').val(_record.createDatetime);
				}
			});
		},
		openapiCreateGet: function() {
		},
		openapiCreatePost: function(e) {
			if (!__.confirm(e)) { return; }
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
					__.alert('등록되었습니다.');
					__.close();
					window.opener.openapi.openapiPostList();
				}
			});
		},
		openapiPut: function(e) {
			if (!__.confirm(e)) { return; }
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
		openapiDelete: function(e) {
			if (!__.confirm(e)) { return; }
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
