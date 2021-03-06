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
				if (_pathName.indexOf("popup") > -1) {
					return "P"
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
			setParams: function(queryStringJSON) {
				var _queryStringBuilder = [];
				for ( var key in queryStringJSON) {
					_queryStringBuilder.push(key + '=' + queryStringJSON[key]);
				}
				return (_.isEmpty(queryStringJSON) ? '' : '?') +_queryStringBuilder.join('&');
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
			alertAfterAjax: function(ajaxObj) {
				var _method = ajaxObj.method;
				var _msg;
				switch (_method) {
				case 'GET':
					_msg = '';
					break;
				case 'POST':
					_msg = '등록되었습니다.';
					break;
				case 'PUT':
					_msg = '저장되었습니다.';
					break;
				case 'DELETE':
					_msg = '삭제되었습니다.';
					break;
				default:
					break;
				}
				this.alert(_msg);
			},
			resetElement: function(element) {
				// TODO: 확장 필요; element...
				$(element).find('input').val('');  
				$(element).find('textarea').val('');  
				$(element).find('select').val('');  
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
			},
			redirect: function(url, queryStringJSON) {
				location.href = url + this.setParams(queryStringJSON);
			},
			renderPagination: function(paginationInfo) {
				var _paginationInfo = paginationInfo;
				var _template = $('#pagination-template').html();
				var _htmlBuilder = [];
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
			},
			renderList: function(records) {
				// HTML 템플릿을 가져와서 {{key}}를 record[key]로 치환
				var _records = records;
				var _template = $('[id$="list-tr-template"]').html();
				var _htmlBuilder = [];
				for (var i = 0; i < _records.length; i++) {
					_htmlBuilder.push(_template
								.replace(this.regExp.doubleCurlyBrace, function(match, key){
									return _records[i][key];
								})
					);
				}
				if (_records.length == 0) {
					_htmlBuilder.push('<tr style="height: 10px;"></tr>'); // dummy
				}
				$('div.table-list').find('table').find('tbody').empty().append(_htmlBuilder.join(''));				
			},
			regExp: {
				doubleCurlyBrace: /{{(\S+)}}/gi, // Angular markup: The double curly brace notation
			},
			setInputByInputTxt: function(model) {
				for ( var key in model) {
					$('#' + key).val($('#' + key + 'Txt').val());
				}
			},
			getModelByInput: function(model) {
				var _model = {};
/*				
				for ( var key in model) {
					_model[key] = $('#' + key).val();
				}
*/				
				for ( var key in model) {
					// REF
					// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
					Object.defineProperty(_model, key, {
						value:  $('#' + key).val(),
//						configurable: false,
						enumerable: true, // false -> $.extend 미작동.
//						writable: false,
					});
				}
				return _model;
			},
			setInputByRecord: function(model, record) {
				var $target, val;
				for ( var key in model) {
					$target = $('#' + key);
					val 	= record[key];
					
					// validate
					if(!$target.prop('nodeName')) { continue; }
					
					// element
					switch ($target.prop('nodeName').toLowerCase()) {
					case 'input':
						
						// type
						switch ($target.prop('type')) {
						case 'checkbox':
							$target.prop('checked', val === 'Y' ? true : false);
							break;
						case 'text':
							$target.val(val);
							break;
						}
						
						break;
					case 'select':
						$target.val(val);
						break;
					case 'textarea':
						$target.val(val);
						break;
					}
				}
			},
			fixedTo: function(number, z) {
				var _builder = [];
				for (var i = 0; i < z; i++) {
					_builder.push('0');
				}
				return (_builder.join('') + number).slice(-z);
			},
			getDateString: function(day) {
				// ex) 2016-07-22
				var date = new Date(Date.now() + (day * 1000 * 60 * 60 * 24));
				var _year = date.getFullYear();
				var _month = date.getMonth() + 1;
				var _date = date.getDate();
				return _year + '-' + this.fixedTo(_month, 2) + '-' + this.fixedTo(_date, 2);
			},
			renderPage: function(obj) {
				var _fn;
				for ( var key in obj) {
					_fn = obj[key]['render'];
					_fn && typeof _fn === 'function' && _fn();
				}
			},
			numberWithCommas: function(x) {
			    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			},
			
			deleteOnYnSelectOptions: function(options) {
				var _options = {
						target: '#onYn',
						include: [':not([value="Y"])'],
						exclude: ['']
				}
				if ($(_options.target).val() == 'Y') {
					$(_options.target).find('option').filter(_options.include[0]).hide();
				}
				
			}
	};
	window.__ = __;
})();
