/**
 * 
 */
(function() {
	
	$(document).ready(function() {
		home.bindEvent();
		home.render();
	});
	
	var home = {
		// =======================================================================
		// bind; event
		// =======================================================================
		
		bindEvent: function() {
			var that = this;
			$('#table-recv').on('click', 'tr:gt(0)', function(e) {
				var _url = '/recv';
				var _data = $(e.target).parents('tr').data();
				$.extend(_data, {
					ingetDatetime: __.getDateString(_data['day'])
				});
				delete _data.day;
				__.redirect(_url, _data);
			});
			$('#table-board').on('click', 'tr:gt(0)', function(e) {
				var _url = '/board';
				var _data = $(e.target).parents('tr').data();
				$.extend(_data, {
					deliveryDatetime: __.getDateString(_data['day'])
				});
				delete _data.day;
				__.redirect(_url, _data);
			});
			$('#table-transcode').on('click', 'tr:gt(0)', function(e) {
				var _url = '/transcode';
				var _data = $(e.target).parents('tr').data();
				$.extend(_data, {
					completeDatetime: __.getDateString(_data['day'])
				});
				delete _data.day;
				__.redirect(_url, _data);
			});
			$('#table-openapi').on('click', 'tr:gt(0)', function(e) {
				var _url = '/openapi';
				var _data = $(e.target).parents('tr').data();
				$.extend(_data, {
					createDatetime: __.getDateString(_data['day'])
				});
				delete _data.day;
				__.redirect(_url, _data);
			});
		},
		
		// =======================================================================
		// render;
		// =======================================================================
		
		render: function() {
			__.hideNavigation({
				menu1text: '',
				menu2text: '메인'
			});
			this.recvPostListCnt();
			this.boardPostListCnt();
			this.transcodePostListCnt();
			this.openapiPostListCnt();
		},
		
		// =======================================================================
		// To server side;
		// =======================================================================
		
		recvPostListCnt: function() {
			$.each($('#table-recv').find('tr:gt(0)'), function() {
				__.ajax({
					url: '/recv/cnt',
					method: 'POST',
					data: {
						ingetDatetime: __.getDateString($(this).data('day')),
						uploadType: $(this).data('uploadType'),
					},
					success: function(data) {
						var _params = data.data.params;
						var _recordsTotCnt = data.data.recordsTotCnt;
						debugger;
						$('#table-recv').find('tr').each(function(element, index) {
							if (_params.ingetDatetime == __.getDateString($(this).data('day'))
									&& _params.uploadType == $(this).data('uploadType')) {
								$(this).find('td:last').text(_recordsTotCnt);
								return;
							}
						})
					}
				});			
			})
		},
		boardPostListCnt: function() {
			$.each($('#table-board').find('tr:gt(0)'), function() {
				__.ajax({
					url: '/board/cnt',
					method: 'POST',
					data: {
						deliveryDatetime: __.getDateString($(this).data('day')),
						type: $(this).data('type'),
					},
					success: function(data) {
						var _params = data.data.params;
						var _recordsTotCnt = data.data.recordsTotCnt;
						$('#table-board').find('tr').each(function(element, index) {
							if (_params.deliveryDatetime == __.getDateString($(this).data('day'))
									&& _params.type == $(this).data('type')) {
								$(this).find('td:last').text(_recordsTotCnt);
								return;
							}
						})
					}
				});			
			})
		},
		transcodePostListCnt: function() {
			$.each($('#table-transcode').find('tr:gt(0)'), function() {
				__.ajax({
					url: '/transcode/cnt',
					method: 'POST',
					data: {
						completeDatetime: __.getDateString($(this).data('day')),
						transState: $(this).data('transState'),
					},
					success: function(data) {
						var _params = data.data.params;
						var _recordsTotCnt = data.data.recordsTotCnt;
						$('#table-transcode').find('tr').each(function(element, index) {
							if (_params.completeDatetime == __.getDateString($(this).data('day'))
									&& _params.transState == $(this).data('transState')) {
								$(this).find('td:last').find('span').text(_recordsTotCnt);
								return;
							}
						})
					}
				});			
			})
		},
		openapiPostListCnt: function() {
			$.each($('#table-openapi').find('tr:gt(0)'), function() {
				__.ajax({
					url: '/openapi/cnt',
					method: 'POST',
					data: {
						createDatetime: __.getDateString($(this).data('day')),
					},
					success: function(data) {
						var _params = data.data.params;
						var _recordsTotCnt = data.data.recordsTotCnt;
						$('#table-openapi').find('tr').each(function(element, index) {
							if (_params.createDatetime == __.getDateString($(this).data('day'))) {
								$(this).find('td:last').text(_recordsTotCnt);
								return;
							}
						})
					}
				});			
			})
		}
		
	}
	
	window.home = home;
	
})();
