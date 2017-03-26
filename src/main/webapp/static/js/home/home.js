/**
 * 
 */
$(document).ready(function(){
	
	$('body').on('click', '.popup-project a', function(event) {
		event.preventDefault();
		var page = $(this).find('.project-name').data('projectName');
		if (page === 'analysis') {
			var windowObjectReference = window.open('portfolio/' + page);
		} else {
			var windowObjectReference = window.open('portfolio/mission/#' + page);
		}
	});
	
});