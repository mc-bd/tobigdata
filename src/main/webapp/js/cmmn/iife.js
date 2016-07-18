/**
 * 
 */
(function() {
	
	$(document).ready(function() {
		
		// 로그아웃 
		$('body').on('click', 'button.logout', function() {
			location.href = '<spring:message code="url.logout" />';
		});
		
	});
	
})();