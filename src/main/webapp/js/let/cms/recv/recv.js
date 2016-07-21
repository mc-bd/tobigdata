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
				$('#ingestSeq').val($('#ingestSeqTxt').val());
				$('#uploadType').val($('#uploadTypeTxt').val());
				$('#contentType').val($('#contentTypeTxt').val());
				$('#contentTitle').val($('#contentTitleTxt').val());
				$('#ingetDatetime').val($('#ingetDatetimeTxt').val());
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
		// To server side;
		// =======================================================================
		
		recvGet: function() {
			location.href = '/recv';
		},
		recvPostList: function(e, pageIndex) {
			// ajax
			__.ajax({
				url: '/recv',
				dataType: 'json',
				method: 'POST',
				data: {
					ingestSeq: $('#ingestSeq').val(),
					uploadType: $('#uploadType').val(),
					contentType: $('#contentType').val(),
					contentTitle: $('#contentTitle').val(),
					ingetDatetime: $('#ingetDatetime').val(),
					pageIndex: pageIndex || 1
				},
				success: function(data) {
					var _template = '';
					var _htmlBuilder = [];
					
					// render; list 
					var _records = data.data.records;
					_template = $('#recv-list-tr-template').html();
					_htmlBuilder = [];
					for (var i = 0; i < _records.length; i++) {
						_htmlBuilder.push(_template
									.replace(/{{rnum}}/gi, _records[i]['rnum'])
									.replace(/{{ingestSeq}}/gi, _records[i]['ingestSeq'])
									.replace(/{{uploadType}}/gi, _records[i]['uploadType'])
									.replace(/{{contentType}}/gi, _records[i]['contentType'])
									.replace(/{{contentTitle}}/gi, _records[i]['contentTitle'])
									.replace(/{{ingetDatetime}}/gi, _records[i]['ingetDatetime'])
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
					var _record = data.data.record;
					$('#ingestSeq').val(_record.ingestSeq);
					$('#uploadType').val(_record.uploadType);
					$('#contentType').val(_record.contentType);
					$('#contentTitle').val(_record.contentTitle);
					$('#contentFilename').val(_record.contentFilename);
					$('#contentURL').val(_record.contentURL);
					$('#ingetDatetime').val(_record.ingetDatetime);
				}
			});
		},
		recvCreateGet: function() {
		},
		recvCreatePost: function(e) {
			if (!__.confirm(e)) { return; }
			__.ajax({
				url: '/recv/create',
				method: 'POST',
				data: {
					ingestSeq: $('#ingestSeq').val(),
					uploadType: $('#uploadType').val(),
					contentType: $('#contentType').val(),
					contentTitle: $('#contentTitle').val(),
					contentFilename: $('#contentFilename').val(),
					contentURL: $('#contentURL').val(),
					ingetDatetime: $('#ingetDatetime').val(),
				},
				success: function(data) {
					__.alert('등록되었습니다.');
					__.close();
					window.opener.recv.recvPostList();
				}
			});
		},
		recvPut: function(e) {
			if (!__.confirm(e)) { return; }
			__.ajax({
				url: '/recv',
				method: 'PUT',
				data: {
					ingestSeq: $('#ingestSeq').val(),
					uploadType: $('#uploadType').val(),
					contentType: $('#contentType').val(),
					contentTitle: $('#contentTitle').val(),
					contentFilename: $('#contentFilename').val(),
					contentURL: $('#contentURL').val(),
					ingetDatetime: $('#ingetDatetime').val(),
				},
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
