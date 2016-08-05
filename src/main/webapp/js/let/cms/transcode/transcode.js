/**
 * 
 */
(function() {
	
	$(document).ready(function() {
		transcode.bindEvent();
		transcode.render();
	});
	
	var transcode = {
		// =======================================================================
		// bind; event
		// =======================================================================
		
		bindEvent: function() {
			var that = this;
			$('#search').on('click', function(e) {
				__.setInputByInputTxt(transcode.model); // TODO: alert(transcode == this == that);
				that.transcodePostList(e);
			});
			$('#reset').on('click', function(e) {
				var _target = $(e.target).parents('table');
				__.resetElement(_target);
			});
			$('div.table-list').on('click', 'tbody > tr', function(e) {
				var _data = $(e.target).parents('tr').data();
				var _url = __.convertUrl('/transcode/edit', _data);
				__.popup(_url, {
					height: 550
				});
			});
			$('ul.pagination').on('click', 'li', function(e) {
				var _page = $(e.target).data('page');
				that.transcodePostList(e, _page);
			});
			$('#add').on('click', function() {
				__.popup('/transcode/create', {
					height: 550
				});
			});
			$('#insert').on('click', this.transcodeCreatePost);
			$('#update').on('click', this.transcodePut);
			$('#delete').on('click', this.transcodeDelete);
			$('#close').on('click', __.close);
		},
		
		// =======================================================================
		// render;
		// =======================================================================
		
		render: function() {
			__.showNavigation({
				menu1text: 'CMS',
				menu2text: '변환현황'
			});
		},
		
		// =======================================================================
		// model;
		// =======================================================================
		
		model: {
			transSeq: '일련번호',
			contentId: '콘텐츠 아이디',
			contentTitle: '콘텐츠 제목',
			reqDatetime: '변환 요청일',
			transState: '변환 상태',
			completeDatetime: '변환 완료일',
		},
		
		// =======================================================================
		// To server side;
		// =======================================================================
		
		transcodeGet: function() {
			location.href = '/transcode';
		},
		transcodePostList: function(e, pageIndex) {
			__.ajax({
				url: '/transcode',
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
		transcodeGetDetailByPost: function() {
			if (__.getMode() == 'C') {
				return;
			}
			// 
			__.ajax({
				url: '/transcode/view',
				method: 'POST',
				data: __.getParams(),
				success: function(data, textStatus, jqXHR) {
					var _data = data.data;
					__.setInputByRecord(transcode.model, _data.record); // TODO: alert(transcode == this); 
				}
			});
		},
		transcodeCreateGet: function() {
		},
		transcodeCreatePost: function(e) {
			if (!__.confirm(e)) { return; }
			__.ajax({
				url: '/transcode/create',
				method: 'POST',
				data: __.getModelByInput(transcode.model), // TODO: alert(transcode == this);
				success: function(data, textStatus, jqXHR) {
					__.alertAfterAjax(this);
					__.close();
					window.opener.transcode.transcodePostList();
				}
			});
		},
		transcodePut: function(e) {
			if (!__.confirm(e)) { return; }
			__.ajax({
				url: '/transcode',
				method: 'PUT',
				data: __.getModelByInput(transcode.model), // TODO: alert(transcode == this);
				success: function(data, textStatus, jqXHR) {
					__.alertAfterAjax(this);
					__.close();
					window.opener.transcode.transcodePostList();
				}
			});
		},
		transcodeDelete: function(e) {
			if (!__.confirm(e)) { return; }
			__.ajax({
				url: '/transcode',
				method: 'DELETE',
				data: __.getModelByInput(transcode.model), // TODO: alert(transcode == this);
				success: function(data, textStatus, jqXHR) {
					__.alertAfterAjax(this);
					__.close();
					window.opener.transcode.transcodePostList();
				}
			});
		}
		
	}
	
	window.transcode = transcode;
	
})();
