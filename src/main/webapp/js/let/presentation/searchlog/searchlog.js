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
				$('#connectTime').val($('#connectTimeTxt').val());
				$('#keyWord').val($('#keyWordTxt').val());
				$('#locationInfo').val($('#locationInfoTxt').val());
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
			$('section.content-table').on('click', 'tbody > tr', function(e) {
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
		// To server side;
		// =======================================================================
		
		searchlogGet: function() {
			location.href = '/searchlog';
		},
		searchlogPostList: function(e, pageIndex) {
			// ajax
			__.ajax({
				url: '/searchlog',
				dataType: 'json',
				method: 'POST',
				data: {
					connectTime: $('#connectTime').val(),
					keyWord: $('#keyWord').val(),
					locationInfo: $('#locationInfo').val(),
					pageIndex: pageIndex || 1
				},
				success: function(data) {
					debugger;
					var _template = '';
					var _htmlBuilder = [];
					
					// 
					// render; list 
					// 
					var _searchlogs = data.data.searchlogs;
					_template = $('#searchlog-list-tr-template').html();
					_htmlBuilder = [];
					for (var i = 0; i < _searchlogs.length; i++) {
						_htmlBuilder.push(_template
									.replace(/{{rnum}}/gi, _searchlogs[i]['rnum'])
									.replace(/{{connectTime}}/gi, _searchlogs[i]['connectTime'])
									.replace(/{{keyWord}}/gi, _searchlogs[i]['keyWord'])
									.replace(/{{locationInfo}}/gi, _searchlogs[i]['locationInfo'])
						);
					}
					$('.content-table').find('table').find('tbody').empty().append(_htmlBuilder.join(''));
					
					// 
					// render; pagination
					// 
					var _paginationInfo = data.data.paginationInfo;
					_template = $('#pagination-template').html();
					_htmlBuilder = [];
					// calc; p, n page
					var _pHref = _paginationInfo.firstPageNoOnPageList < _paginationInfo.currentPageNo - _paginationInfo.pageSize ? _paginationInfo.currentPageNo - _paginationInfo.pageSize : _paginationInfo.firstPageNoOnPageList;
					var _nHref = _paginationInfo.lastPageNoOnPageList < _paginationInfo.currentPageNo + _paginationInfo.pageSize ? _paginationInfo.lastPageNoOnPageList : _paginationInfo.currentPageNo + _paginationInfo.pageSize;
					if (_paginationInfo.totalRecordCount > 0) {
						// previous page
						_htmlBuilder.push(_template
								.replace(/{{href}}/gi, _pHref)
								.replace(/{{pageNo}}/gi, '&laquo;')
								);
						// main page
						for (var i = _paginationInfo.firstPageNoOnPageList; i <= _paginationInfo.lastPageNoOnPageList; i++) {
							_htmlBuilder.push(_template
									.replace(/{{href}}/gi, i)
									.replace(/{{pageNo}}/gi, i)
							);
						}
						// next page
						_htmlBuilder.push(_template
								.replace(/{{href}}/gi, _nHref)
								.replace(/{{pageNo}}/gi, '&raquo;')
						);
					}
					$('.page_box').find('ul').empty().append(_htmlBuilder.join(''));
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
				success: function(data) {
					var _site = data.data.site;
					$('#connectTime').val(_site.connectTime);
					$('#keyWord').val(_site.keyWord);
					$('#locationInfo').val(_site.locationInfo);
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
				data: {
					connectTime: $('#connectTime').val(),
					keyWord: $('#keyWord').val(),
					locationInfo: $('#locationInfo').val()
				},
				success: function(data) {
					__.alert('등록되었습니다.');
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
				data: {
					connectTime: $('#connectTime').val(),
					keyWord: $('#keyWord').val(),
					locationInfo: $('#locationInfo').val()
				},
				success: function(data) {
					__.alert('저장되었습니다.');
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
				data: {
					connectTime: $('#connectTime').val(),
				},
				success: function(data) {
					__.alert('삭제되었습니다.');
					__.close();
					window.opener.searchlog.searchlogPostList();
				}
			});
		}
		
	}
	
	window.searchlog = searchlog;
	
})();
