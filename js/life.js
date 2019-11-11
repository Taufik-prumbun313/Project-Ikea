$(document).ready(function(){
	$("#left").mouseenter(function(){
		$(".footer-links").fadeToggle("slow");
	});
	$("#footer-right").mouseenter(function(){
		$("#footer").fadeToggle("slow");
	});
	$("#1").mouseenter(function(){
		$("#fa1").animate({widht:"toggle"},"slow");
	})
	$("#2").mouseenter(function(){
		$("#fa2").animate({widht:"toggle"},"slow");
	})
	$("#3").mouseenter(function(){
		$("#fa3").animate({widht:"toggle"},"slow");
	})
	// FOOTER
	$(document).mousemove(function(a){
	$("#bonus").css({
		'left': -a.pageX / 50,
		'top': -a.pageY / 100 + 20
	});
	});

	$(document).mousemove(function(x){
	$("#pik1").css({
		'left': -x.pageX / 50,
		'top': -x.pageY / 100 + 20
	});
	});




});