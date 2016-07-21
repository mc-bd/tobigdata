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
			$('#table-openapi').on('click', 'tr', function(e) {
				var _url = '/openapi';
				var _data = $(e.target).parents('tr').data();
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
