$(document).ready(function() {


new WOW().init();
	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu").is(":hidden")) {
			$(".menu").slideDown(600);
		} else {
			$(".menu").slideUp(600);
		}
		
	});

	$(".menu a").click(function() {
			$(".menu").slideUp(600);
			$(".sandwich").removeClass("active");
		});

	//слайдер

	$('.slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1
	});


$(".input-phone").mask("+7(999) 999-99-99");

$('.tabs li a').click(function(event) {
		event.preventDefault();
	});
	$('.tab-content:first').show();
	$('.tabs li').click(function(event) {
		$(this).parent().find("li").removeClass('active');
		$(this).addClass('active');
		$(this).parent().parent().parent().find(".tab-content").hide();
		var selectTab = $(this).find('a').attr("href");
		$(selectTab).fadeIn();
	});
	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();




	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});