$(document).ready(function() {

	var widthScreen = screen.width;

	$(".header h1").click(function() {
		$('.slider img:eq(0)').animate({
			marginLeft: "0px",
			width: widthScreen,
		}, 1000);
		

	})

});