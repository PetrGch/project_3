	
	function toggle (value) {
			if (value == 1) {
				$('.ourStory, .work, .journal, .contact').slideUp(2000);
				$('.services').slideToggle(500);
			} else if (value == 2) {
				$('.services, .work, .journal, .contact').slideUp(500);
				$('.ourStory').slideToggle(500);
			} else if (value == 3) {
				$('.ourStory, .services, .journal, .contact').slideUp(500);
				$('.work').slideToggle(500);
			} else if (value == 4) {
				$('.ourStory, .work, .services, .contact').slideUp(500);
				$('.journal').slideToggle(500);
			} else if (value == 5) {
				$('.ourStory, .work, .journal, .services').slideUp(500);
				$('.contact').slideToggle(500);
			};
		}
		
$(document).ready(function() {

});