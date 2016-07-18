/**
 * 
 */
(function() {
	var __ = {
			ajax: function(settings) {
				// 기본 세팅
				var _settings = {
					async: true,
					contentType: "application/json; charset=UTF-8",
					dataType: 'json',
	 				beforeSend: function() {
	 				},
					success: function(data, textStatus, jqXHR) {
						console.dir(data)
					},
	 				error: function() {
	 				},
	 				complete: function() {
	 				}
				}
				// 세팅 확장
				$.extend(_settings, settings, {
					data: JSON.stringify(settings.data)
				});
				
				// send
				$.ajax(_settings);
			}
	};
	window.__ = __;
})();