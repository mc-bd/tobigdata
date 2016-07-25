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
			$('#table-recv').on('click', 'tr', function(e) {
				var _url = '/recv';
				var _data = $(e.target).parents('tr').data();
				$.extend(_data, {
					ingetDatetime: __.getDateString(_data['day'])
				});
				delete _data.day;
				__.redirect(_url, _data);
			});
			$('#table-board').on('click', 'tr', function(e) {
				var _url = '/board';
				var _data = $(e.target).parents('tr').data();
				$.extend(_data, {
					deliveryDatetime: __.getDateString(_data['day'])
				});
				delete _data.day;
				__.redirect(_url, _data);
			});
			$('#table-transcode').on('click', 'tr', function(e) {
				var _url = '/transcode';
				var _data = $(e.target).parents('tr').data();
				$.extend(_data, {
					completeDatetime: __.getDateString(_data['day'])
				});
				delete _data.day;
				__.redirect(_url, _data);
			});
			$('#table-openapi').on('click', 'tr', function(e) {
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
		},
		
		// =======================================================================
		// To server side;
		// =======================================================================
		
	}
	
	window.home = home;
	
})();
