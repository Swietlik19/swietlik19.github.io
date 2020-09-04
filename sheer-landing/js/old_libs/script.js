(function($){

    
    // toggle text
    jQuery.fn.extend({
        toggleText: function (a, b){
            var that = this;
                if (that.html() != a && that.html() != b){
                    that.html(a);
                }
                else
                if (that.html() == a){
                    that.html(b);
                }
                else
                if (that.html() == b){
                    that.html(a);
                }
            return this;
        }
    });
    
    
    // скролл к якорю
    $('a[href="#services"]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });
    
    
    // фиксированная шапка
    $(document).ready(function() {
        $(window).on("scroll", function() {
            var fromTop = $(document).scrollTop();
            $(".header").toggleClass("fixed", (fromTop > 682));
            $(".post_chief__top-right").toggleClass("fixed", (fromTop > 682));
            $(".post_chief__top-right").toggleClass("container", (fromTop > 682));
        });
    });

    // слайдер первый экран
	$('.main_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		appendDots: '.screen_1 .dots',
		fade: true
	});
    
    
    // показать карту
    $('.show_map').click(function(){
        $(this).find('span').toggleText('Ждем вас в гости в центре Симферополя <i class="fa fa-chevron-down"></i>', 'Скрыть карту <i class="fa fa-chevron-up"></i>')
        $('.b-map').slideToggle();
    });   
    
    // маска поля
    $(".wpcf7-tel").mask("+7 (999) 999-99-99"); 
    $('input[name="text-tel2"]').mask(
        "999",
        {completed:function(){
          $('input[name="text-tel3"]').focus();  
        }}
    );
    $('input[name="text-tel-price-2"]').mask(
        "999",
        {completed:function(){
          $('input[name="text-tel-price-3"]').focus();  
        }}
    );
    $('input[name="text-tel-price-3"]').mask("999 99 99");
    
    // инициализация фансибокса
 //    $("a.fancybox").fancybox({
 //        padding: 0,
 //        scrolling: 'auto',
	// });
	
	// слайдер сео на главной
    $('.b-seo .box').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        appendArrows: ".b-seo .btn_more",
        prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
    });	
	
	// слайдер клиенты с нами на главной
    $('.b-project-grid').slick({
    			infinite: true,
    			slidesToShow: 3,
    			slidesToScroll: 3,
                rows: 3,
    			dots: false,	
    			appendArrows: '.navs_projects',
    			prevArrow: '<div class="sprev"><span class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></span></div>',
    			nextArrow: '<div class="snext"><span class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></span></div>',
    			responsive: [
    				{
    					breakpoint: 1025,
    					settings: {
        					arrows: false,
        					dots: true
    					}
    				},
    				{
    					breakpoint: 901,
    					settings: {
        					slidesToShow: 2,
                            slidesToScroll: 2,
        					arrows: false,
        					dots: true
    					}
    				},
    				{
    					breakpoint: 601,
    					settings: {
        					slidesToShow: 1,
                            slidesToScroll: 1,
        					arrows: false,
        					dots: true
    					}
    				}
    			]			
    });
	
	
	
    // faq табы
    $(".scr_faq .tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".scr_faq .tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();

        /* ToDo */
        if (document.body.clientWidth <= 760) {
            $('html, body').animate({scrollTop: $(tab).offset().top - $('.header').innerHeight() - 10 +'px'},700);
        }
        /* */
    });

	
    /*
    // мобильное меню
	$('#mmenu').click(function(){
		$(this).toggleClass('open');
		$('.menu-menyu-container').toggleClass('open');
	});
    */

    // выпадающее меню в шапке
	$('.header .wr .menu > li > a').hover(function(){
        if ($('.menu').css('position') != 'absolute') {
    	   $(this).parent().siblings().find('.sub-menu').removeClass('hover');
    	   $(this).next().addClass('hover');
        }
	});
	$('.page_wr').hover(function(){ 
        /* Добавить! */
        if ($('.menu').css('position') != 'absolute') {
    	   $('.header .wr .menu ul').removeClass('hover');
           $('.header .wr .menu > li').removeClass('active');
        }
	});

    $('.header .wr .menu > li.menu-item-has-children > a').click(function(){

        if ($('.menu').css('position') == 'absolute') {
            event.preventDefault();
           $(this).parent().siblings().find('.sub-menu').removeClass('hover');
           $(this).next().toggleClass('hover');
           $(this).parent('.menu-item-has-children').toggleClass('active');
           $(this).parent().siblings().removeClass('active');
        }
    });
	
	// показать скрыть описание услуг
	$('.screen_service .show').click(function(){
    	$('.screen_service .body.hided').slideToggle();
    	$('.screen_service .show').toggleText('Скрыть <i class="fa fa-chevron-up"></i>','Подробнее <i class="fa fa-chevron-down"></i>');
	});
	
    /*
        order
	$('a[href="#price"]').click(function(){
		var t = $(this).data('title');
		$('input[name="tovar"]').val(t);
		$('#price .sub').text(t);
	});
    */
    

	
	if ($(window).width() < 768) {
		
	}
	
})(jQuery);