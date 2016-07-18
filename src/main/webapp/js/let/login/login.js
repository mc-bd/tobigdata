/**
 * 
 */
(function() {
	
	$(document).ready(function() {
		
		// 
		$(document).on('click', '#login', login);
		
		function login() {
			if (!isValid()) {
				return;
			}
			debugger;
			__.ajax({
				url: '/login',
				method: 'POST',
				data: {
					"id": $('#id').val(),
					"password": $('#password').val(),
				},
				success: function(data) {
					if (data.statusCode == 200) {
						location.href = '/home';
						return;
					}
					alert("아이디와 비밀번호가 맞지 않습니다.");
					reset();
					return;
				}
			});
		}
		
		function isValid() {
			var _isValid = true;
			if (__.isBlank('#id')) {
				alert('아이디를 입력해주세요.');
				_isValid = false;
				$('#id').focus();
				return;
			}
			if (__.isBlank('#password')) {
				alert('비밀번호를 입력해주세요.');
				_isValid = false;
				$('#password').focus();
				return;
			}
			return _isValid;
		};
		
		function reset() {
			$('#id').val('');
			$('#password').val('');
		};
		
	});
	
})();