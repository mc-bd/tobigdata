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
	 				error: function(jqXHR, textStatus, errorThrown) {
	 					debugger;
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
			},
			isBlank: function(element) {
				return '' == $.trim($(element).val());
			},
			alert: function(msg) {
				if (arguments) {
//					alert(arguments.join(', '));
					alert(Array.prototype.slice.call(arguments, 1).join(", "));
					return;
				}
				alert(msg);
			},
	};
	window.__ = __;
})();