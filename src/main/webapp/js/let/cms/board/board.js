/**
 * 
 */
(function() {
	
	$(document).ready(function() {
		board.bindEvent();
		board.render();
	});
	
	var board = {
		// =======================================================================
		// bind; event
		// =======================================================================
		
		bindEvent: function() {
			var that = this;
			$('#search').on('click', function(e) {
				__.setInputByInputTxt(board.model); // TODO: alert(board == this == that);
				that.boardPostList(e);
			});
			$('#reset').on('click', function(e) {
				var _target = $(e.target).parents('table');
				__.resetElement(_target);
			});
			$('div.table-list').on('click', 'tbody > tr', function(e) {
				var _data = $(e.target).parents('tr').data();
				var _url = __.convertUrl('/board/edit', _data);
				__.popup(_url, {
					height: 550
				});
			});
			$('ul.pagination').on('click', 'li', function(e) {
				var _page = $(e.target).data('page');
				that.boardPostList(e, _page);
			});
			$('#add').on('click', function() {
				__.popup('/board/create', {
					height: 550
				});
			});
			$('#insert').on('click', this.boardCreatePost);
			$('#update').on('click', this.boardPut);
			$('#delete').on('click', this.boardDelete);
			$('#close').on('click', __.close);
		},
		
		// =======================================================================
		// render;
		// =======================================================================
		
		render: function() {
			__.showNavigation({
				menu1text: 'CMS',
				menu2text: '배포현황'
			});
		},
		
		// =======================================================================
		// model;
		// =======================================================================
		
		model: {
			deliverySeq: '배포 일련번호',
			contentId: '콘텐츠 아이디',
			contentTitle: '콘텐츠 제목',
			contentType: '콘텐츠 종류',
			deliveryDatetime: '배포 일시',
		},
		
		// =======================================================================
		// To server side;
		// =======================================================================
		
		boardGet: function() {
			location.href = '/board';
		},
		boardPostList: function(e, pageIndex) {
			__.ajax({
				url: '/board',
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
		boardGetDetailByPost: function() {
			if (__.getMode() == 'C') {
				return;
			}
			// 
			__.ajax({
				url: '/board/view',
				method: 'POST',
				data: __.getParams(),
				success: function(data, textStatus, jqXHR) {
					var _data = data.data;
					__.setInputByRecord(board.model, _data.record); // TODO: alert(board == this); 
				}
			});
		},
		boardCreateGet: function() {
		},
		boardCreatePost: function(e) {
			if (!__.confirm(e)) { return; }
			__.ajax({
				url: '/board/create',
				method: 'POST',
				data: __.getModelByInput(board.model), // TODO: alert(board == this);
				success: function(data, textStatus, jqXHR) {
					__.alertAfterAjax(this);
					__.close();
					window.opener.board.boardPostList();
				}
			});
		},
		boardPut: function(e) {
			if (!__.confirm(e)) { return; }
			__.ajax({
				url: '/board',
				method: 'PUT',
				data: __.getModelByInput(board.model), // TODO: alert(board == this);
				success: function(data, textStatus, jqXHR) {
					__.alertAfterAjax(this);
					__.close();
					window.opener.board.boardPostList();
				}
			});
		},
		boardDelete: function(e) {
			if (!__.confirm(e)) { return; }
			__.ajax({
				url: '/board',
				method: 'DELETE',
				data: __.getModelByInput(board.model), // TODO: alert(board == this);
				success: function(data, textStatus, jqXHR) {
					__.alertAfterAjax(this);
					__.close();
					window.opener.board.boardPostList();
				}
			});
		}
		
	}
	
	window.board = board;
	
})();
