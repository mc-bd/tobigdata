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
	 				complete: function(jqXHR, textStatus) {
	 					var _data = jqXHR.responseJSON;
	 					console.dir(_data)
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
			close: function(event) {
				window.close();
			},
			convertUrl: function(url, options) {
				var _urlBuilder = [];
				var _queryStringBuilder = [];
				for ( var key in options) {
					_queryStringBuilder.push([key, options[key]].join('='));
				}
				_urlBuilder.push(url);
				_urlBuilder.push(_queryStringBuilder.join('&'));
				return _urlBuilder.join('?'); 
			},
			getMode: function() {
				var _pathName = location.pathname;
				if (_pathName.indexOf("create") > -1) {
					return "C"
				}
				if (_pathName.indexOf("view") > -1) {
					return "R"
				}
				if (_pathName.indexOf("edit") > -1) {
					return "U"
				}
				return;
			},
			getParams: function() {
				var _params = {};
//				cross browser; IE; startsWith() 미존재; 
//				var _search = location.search.startsWith("?") ? location.search.slice(1) : location.search;
				var _search = location.search.indexOf("?") == 0 ? location.search.slice(1) : location.search;
				var _a = _search.split('&');
				for (var i = 0; i < _a.length; i++) {
					var _b = _a[i].split('=');
					var key = _b[0];
					var val = _b[1];
					_params[key] = val;
				}
				return _params;
			},
			confirm: function(event) {
				var _msg = this.getConfirmMsg(event.target);
				return window.confirm(_msg);
			},
			getConfirmMsg: function(element) {
				var _msg;
				var _id = $(element).prop('id'); // 분기 조건; button id;
				switch (_id) {
				case 'insert':
					_msg = '등록하시겠습니까?';
					break;
				case 'update':
					_msg = '저장하시겠습니까?';
					break;
				case 'delete':
					_msg = '삭제하시겠습니까?';
					break;
				case 'cancel':
					_msg = '취소하시겠습니까?';
					break;
				case 'close':
					_msg = '창을 닫으시겠습니까?';
					break;
				default:
					break;
				}
				return _msg;
			},
			getAlertMsg: function(element) {
			},
			resetElement: function(element) {
				$(element).find('input').val(''); // TODO: 확장 필요; element... 
			},
			showNavigation: function(options) {
				var _options = options;
				$('#menu1').text(_options.menu1text);
				$('#menu2').text(_options.menu2text);
				$('#menu_title').text(_options.menu2text);
			},
			hideNavigation: function(options) {
				var _options = options;
				$('#menu1').hide();
				$('#menu2').hide();
				$('#menu_title').text(_options.menu2text);
			},
			getDatepickerOptions: function(options) {
				// REF
				// http://bootstrap-datepicker.readthedocs.io/en/latest/options.html
				var _options = {
						autoclose: true,
						todayHighlight: true,
						format: 'yyyy-mm-dd'
				};
				return $.extend(_options, options);
			},
			toString: function(obj) {
				return JSON.stringify(obj, null, '\t');
			},
			setValueByParams: function() {
				var _params = this.getParams();
				for ( var key in _params) {
					$('#'+key).val(_params[key]);
					$('#'+key+'Txt').val(_params[key]);
				}
			}
	};
	window.__ = __;
})();
