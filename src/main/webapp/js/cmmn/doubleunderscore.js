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
						debugger;
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
				window.alert(msg);
//				this._notice(msg);
			},
			_notice: function(content, options) {
				new jBox('Notice', {
				    content: content,
				    autoClose: 1500
				});
			},
			popup: function(url, options) {
				this._pop(url, options);
			},
			pop: function(settings) {
				// REF
				// https://developer.mozilla.org/en-US/docs/Web/API/Window/open
				// var windowObjectReference = window.open(strUrl, strWindowName, [strWindowFeatures]);
				
				// default
				var _settings = {
						url: '',
						name: '_blank',
						features: 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes',
				};
				// extend; setting
				$.extend(_settings, settings, {
					data: JSON.stringify(settings.data)
				});
				// open
				var child = window.open(_settings.url, _settings.name, _settings.features);
			},
			_pop: function(url, options) {
				// REF
				// https://github.com/mkdynamic/jquery-popupwindow
				var _options = {
						width: '600',
						height: '600',
						createNew: false
				};
				// extend; setting
				$.extend(_options, options);				
				// call lib
				$.popupWindow(url, _options);
			},
			close: function() {
				window.close();
			}
	};
	window.__ = __;
})();
