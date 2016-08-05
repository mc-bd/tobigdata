/**
 * 
 */
(function() {
	
	$(document).ready(function() {
		searchlog.bindEvent();
		searchlog.render();
	});
	
	var searchlog = {
		// =======================================================================
		// bind; event
		// =======================================================================
		
		bindEvent: function() {
			var that = this;
			$('#search').on('click', function(e) {
				__.setInputByInputTxt(searchlog.model); // TODO: alert(searchlog == this == that);
				that.searchlogPostList(e);
			});
			$('#reset').on('click', function(e) {
				var _target = $(e.target).parents('table');
				__.resetElement(_target);
			});
			$('ul.pagination').on('click', 'li', function(e) {
				var _page = $(e.target).data('page');
				that.searchlogPostList(e, _page);
			});
/*			
			$('div.table-list').on('click', 'tbody > tr', function(e) {
				var _data = $(e.target).parents('tr').data();
				var _url = __.convertUrl('/searchlog/edit', _data);
				__.popup(_url, {
					height: 550
				});
			});
			$('#add').on('click', function() {
				__.popup('/searchlog/create', {
					height: 550
				});
			});
			$('#insert').on('click', this.searchlogCreatePost);
			$('#update').on('click', this.searchlogPut);
			$('#delete').on('click', this.searchlogDelete);
			$('#close').on('click', __.close);
*/			
		},
		
		// =======================================================================
		// render;
		// =======================================================================
		
		render: function() {
			__.showNavigation({
				menu1text: '프레젠테이션',
				menu2text: '검색요청 조회'
			});
		},
		
		// =======================================================================
		// model;
		// =======================================================================
		
		model: {
			connectTime: '접속시간',
			keyWord: '검색어',
			locationInfo: '위치정보',
		},
		
		// =======================================================================
		// To server side;
		// =======================================================================
		
		searchlogGet: function() {
			location.href = '/searchlog';
		},
		searchlogPostList: function(e, pageIndex) {
			__.ajax({
				url: '/searchlog',
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
		searchlogGetDetailByPost: function() {
			if (__.getMode() == 'C') {
				return;
			}
			// 
			__.ajax({
				url: '/searchlog/view',
				method: 'POST',
				data: __.getParams(),
				success: function(data, textStatus, jqXHR) {
					var _data = data.data;
					__.setInputByRecord(searchlog.model, _data.record); // TODO: alert(searchlog == this); 
				}
			});
		},
		searchlogCreateGet: function() {
		},
		searchlogCreatePost: function(e) {
			if (!__.confirm(e)) { return; }
			__.ajax({
				url: '/searchlog/create',
				method: 'POST',
				data: __.getModelByInput(searchlog.model), // TODO: alert(searchlog == this);
				success: function(data, textStatus, jqXHR) {
					__.alertAfterAjax(this);
					__.close();
					window.opener.searchlog.searchlogPostList();
				}
			});
		},
		searchlogPut: function(e) {
			if (!__.confirm(e)) { return; }
			__.ajax({
				url: '/searchlog',
				method: 'PUT',
				data: __.getModelByInput(searchlog.model), // TODO: alert(searchlog == this);
				success: function(data, textStatus, jqXHR) {
					__.alertAfterAjax(this);
					__.close();
					window.opener.searchlog.searchlogPostList();
				}
			});
		},
		searchlogDelete: function(e) {
			if (!__.confirm(e)) { return; }
			__.ajax({
				url: '/searchlog',
				method: 'DELETE',
				data: __.getModelByInput(searchlog.model), // TODO: alert(searchlog == this);
				success: function(data, textStatus, jqXHR) {
					__.alertAfterAjax(this);
					__.close();
					window.opener.searchlog.searchlogPostList();
				}
			});
		}
		
	}
	
	window.searchlog = searchlog;
	
})();
