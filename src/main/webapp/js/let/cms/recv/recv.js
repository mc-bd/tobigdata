/**
 * 
 */
(function() {
	
	$(document).ready(function() {
		recv.bindEvent();
		recv.render();
	});
	
	var recv = {
		// =======================================================================
		// bind; event
		// =======================================================================
		
		bindEvent: function() {
			var that = this;
			$('#search').on('click', function(e) {
				__.setInputByInputTxt(recv.model); // TODO: alert(recv == this == that);
				that.recvPostList(e);
			});
			$('#reset').on('click', function(e) {
				var _target = $(e.target).parents('table');
				__.resetElement(_target);
			});
			$('section.content-table').on('click', 'tbody > tr', function(e) {
				var _data = $(e.target).parents('tr').data();
				var _url = __.convertUrl('/recv/edit', _data);
				__.popup(_url, {
					height: 550
				});
			});
			$('ul.pagination').on('click', 'li', function(e) {
				var _page = $(e.target).data('page');
				that.recvPostList(e, _page);
			});
			$('#add').on('click', function() {
				__.popup('/recv/create', {
					height: 550
				});
			});
			$('#insert').on('click', this.recvCreatePost);
			$('#update').on('click', this.recvPut);
			$('#delete').on('click', this.recvDelete);
			$('#close').on('click', __.close);
		},
		
		// =======================================================================
		// render;
		// =======================================================================
		
		render: function() {
			__.showNavigation({
				menu1text: 'CMS',
				menu2text: '입수현황'
			});
		},
		
		// =======================================================================
		// model;
		// =======================================================================
		
		model: {
			ingestSeq: '일련번호',
			uploadType: '입수방법',
			contentType: '종류',
			contentTitle: '제목',
			contentFilename: '파일명',
			contentUrl: '저장위치',
			ingetDatetime: '입수일시',
		},
		
		// =======================================================================
		// To server side;
		// =======================================================================
		
		recvGet: function() {
			location.href = '/recv';
		},
		recvPostList: function(e, pageIndex) {
			__.ajax({
				url: '/recv',
				dataType: 'json',
				method: 'POST',
				data: $.extend(__.getModelByInput(this.model), {
					pageIndex: pageIndex || 1
				}),
				success: function(data) {
					var _data = data.data;
					__.renderList(_data.records);
					__.renderPagination(_data.paginationInfo);
				}
			});
		},
		recvGetDetailByPost: function() {
			if (__.getMode() == 'C') {
				return;
			}
			// 
			__.ajax({
				url: '/recv/view',
				method: 'POST',
				data: __.getParams(),
				success: function(data) {
					var _data = data.data;
					__.setInputByRecord(recv.model, _data.record); // TODO: alert(recv == this); 
				}
			});
		},
		recvCreateGet: function() {
		},
		recvCreatePost: function(e) {
			if (!__.confirm(e)) { return; }
			debugger;
			__.ajax({
				url: '/recv/create',
				method: 'POST',
				data: __.getModelByInput(recv.model), // TODO: alert(recv == this);
				success: function(data) {
					__.alert('등록되었습니다.');
					__.close();
					window.opener.recv.recvPostList();
				}
			});
		},
		recvPut: function(e) {
			if (!__.confirm(e)) { return; }
			debugger;
			__.ajax({
				url: '/recv',
				method: 'PUT',
				data: __.getModelByInput(recv.model), // TODO: alert(recv == this);
				success: function(data) {
					__.alert('저장되었습니다.');
					__.close();
					window.opener.recv.recvPostList();
				}
			});
		},
		recvDelete: function(e) {
			if (!__.confirm(e)) { return; }
			__.ajax({
				url: '/recv',
				method: 'DELETE',
				data: {
					ingestSeq: $('#ingestSeq').val(),
				},
				success: function(data) {
					__.alert('삭제되었습니다.');
					__.close();
					window.opener.recv.recvPostList();
				}
			});
		}
		
	}
	
	window.recv = recv;
	
})();
