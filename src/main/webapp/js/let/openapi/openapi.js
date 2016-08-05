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
				__.setInputByInputTxt(openapi.model); // TODO: alert(openapi == this == that);
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
		// model;
		// =======================================================================
		
		model: {
			serviceId: '서비스 id',
			serviceName: '서비스 명',
			managerName: '담당자 명',
			managerTel: '담당자 연락처',
			managerEmail: '담당자 e-mail',
			serviceIp: 'IP 정보',
			permissionKey: '서비스 인증키',
			createDatetime: '생성일',
		},
		
		// =======================================================================
		// To server side;
		// =======================================================================
		
		openapiGet: function() {
			location.href = '/openapi';
		},
		openapiPostList: function(e, pageIndex) {
			__.ajax({
				url: '/openapi',
				method: 'POST',
				data: $.extend(__.getModelByInput(this.model), {
					pageIndex: pageIndex || 1
				}),
				success: function(data, textStatus, jqXHR) {
					var _data = data.data;
					__.renderList(_data.records);
					__.renderPagination(_data.paginationInfo);
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
				success: function(data, textStatus, jqXHR) {
					var _data = data.data;
					__.setInputByRecord(openapi.model, _data.record); // TODO: alert(openapi == this); 
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
				data: __.getModelByInput(openapi.model), // TODO: alert(openapi == this);
				success: function(data, textStatus, jqXHR) {
					__.alertAfterAjax(this);
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
				data: __.getModelByInput(openapi.model), // TODO: alert(openapi == this);
				success: function(data, textStatus, jqXHR) {
					__.alertAfterAjax(this);
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
				data: __.getModelByInput(openapi.model), // TODO: alert(openapi == this);
				success: function(data, textStatus, jqXHR) {
					__.alertAfterAjax(this);
					__.close();
					window.opener.openapi.openapiPostList();
				}
			});
		}
		
	}
	
	window.openapi = openapi;
	
})();
