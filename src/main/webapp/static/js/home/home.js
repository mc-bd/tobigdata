/**
 * 
 */
$(document).ready(function(){
	
	$('body').on('click', '.popup-project a', function(event) {
		event.preventDefault();
		var page = $(this).find('.project-name').data('projectName');
		var windowObjectReference = window.open('portfolio/' + page);
	});
	
});