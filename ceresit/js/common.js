$(document).ready(function() {
 setInterval(function () {
        $('.wrap-preloader').fadeOut();
    }, 500); 

	var $menu = $(".header__fixed");
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 200 && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() <= 200 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}
		
	});

	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}



	$('.catalog__side-btn').click(function() {
		$('.catalog__side').toggleClass('active');
		if ( $('.catalog__side').hasClass('active') ) {
			$(this).text('Скрыть меню');
		} else {
			$(this).text('Показать меню');
		}
	});


	$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container").find(".tab-pane").removeClass("active");
		var selectTab = $(this).attr("href");
		$(selectTab).addClass("active");
	});

	$('.tabs-card li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container-card").find(".tab-pane-card").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(100);
	});

	  // Секции по типу "Вопрос - ответ"
	  function toggleHidden(xParent,hideOther) {
	    $(xParent + ' .top').click(function() {
	      $(this).find('.open').toggleClass('active');
	      $(this).siblings().slideToggle();
	      if (hideOther) {
	        $(this).parent().siblings().find('.open').removeClass('active');
	        $(this).parent().siblings().find('.hidden').slideUp();
	      }
	    });
	  }

	  toggleHidden('.faq',true);
	  $('.faq__list > li:first-of-type .open').addClass('active');
	  $('.faq__list > li:first-of-type .hidden').show();


	/*jQuery('.quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	}); */

	//плавный скролл
	$(".links-article a").mPageScroll2id({
		offset:100
	});

	//кнопка sandwich





	$(".btn-search-fake").click(function() {
		$(".header-search").toggleClass("active");
	});

	$(".btn_nav_menu").click(function() {
		$(this).toggleClass("active");
		$(".btn_nav_catalog").find(".sandwich").removeClass("active");
		$(this).find(".sandwich").toggleClass("active");
		if ($(".wrap-menu").is(":hidden")) {
			$(".wrap-menu").slideDown(200);
		} else {
			$(".wrap-menu").slideUp(200);
		}
	});

	$(".wrap-menu a").click(function() {
		$(".wrap-menu").slideUp(200);
		$(".btn_nav_menu").removeClass("active");
		$(".sandwich").removeClass("active");
	});



/*remove tr basket*/
$(".btn-delate").click(function() {
		$(this).parent("td").parent("tr").remove();
	});



	/*высота блока по экрану*/
	function heightDetect2() {
		$('.wrap-menu').css("height", $(window).height() -$(".header__fixed").height() + 60);
	};
	heightDetect2();
	$(window).resize(function() {
		heightDetect2();
	});

	$(".item-sidebar__head").click(function() {
		$(this).parent('.item-sidebar').toggleClass('hidden');
		$(this).closest('.sidebar-catalog').find('.item-sidebar.hidden .item-sidebar__dropdown').hide(200);	
		$(this).parent('.item-sidebar').toggleClass('hidden');	
		$(this).siblings(".item-sidebar__dropdown").slideToggle(200);
	});


	$(".btn-main_filter").click(function() {
		$(".sidebar-catalog").slideToggle(200);
	});

	$(".question__name").click(function(e) {
		e.preventDefault();
		$(".question").removeClass("active");
		$(".question__answer").slideUp(200);
		if ($(this).siblings(".question__answer").is(":hidden")) {
			$(this).parent().addClass("active");
			$(this).siblings(".question__answer").slideDown(200);

		} else {
			$(this).parent().removeClass("active");
			$(this).siblings(".question__answer").slideUp(200);

		}
	});
	//слайдер

	$('.slider-billbord').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.slider-portfolio').each( function() {
		$(this).slick({
			arrows: true,
			dots: true,
			infinite: true,
			slidesToShow: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-angle-left"></i></div>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-angle-right"></i></div>',
			appendArrows: $(this).siblings('.slider-arrows'),
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			responsive: [
			{
				breakpoint: 480,
				settings: {
					centerMode: false,
					variableWidth: false,
				}
			}
			]
		});

	} );

	$('.slider-warehouse').slick({
		arrows: true,
		dots: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-angle-right"></i></div>',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.slider-builders').slick({
		arrows: true,
		dots: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-angle-right"></i></div>',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.header-categories').slick({
		arrows: true,
		dots: false,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-angle-right"></i></div>',
		infinite: true,
		slidesToShow: 9,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				slidesToShow: 6,
				}
			},
			{
				breakpoint: 992,
				settings: {
				slidesToShow: 5,
				}
			},
			{
				breakpoint: 768,
				settings: {
				slidesToShow: 4,
				}
			},
			{
				breakpoint: 390,
				settings: {
				slidesToShow: 3,
				}
			}
			]
	});

	{
		if ($(window).width() < 768) { 

			/*scroll to tabs*/

			$('.tabs-card a').on( 'click', function(){ 
				var el = $(this);
				var dest = el.attr('href'); 
				if(dest !== undefined && dest !== '') { 
					$('html').animate({ 
						scrollTop: $(dest).offset().top - 100
        }, 500 // скорость прокрутки
        );
				}
				return false;
			});


		}
	}


	/*$(".line-card .btn-main_page").click(function(e) {
		e.preventDefault();
		$.fancybox.open("#thanks");
	});*/
	$(".input-phone, #billing_phone").mask("+7 (999) 999-99-99");

	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	/***/
	/*$('.quick-calculation .row_calculation a.fancybox').click(function() {
		var value = $(this).data('title');
		$('#modal-quick').find('[name=your-title]').val(value).attr('readonly', true);
	});*/
	$(".gallerypdf").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        autoSize: true,
        type: 'iframe',
        iframe: {
            preload: false // fixes issue with iframe and IE
        }
    });

	 $('#true_loadmore span').click(function(){
		$(this).text('Загружаю...'); // изменяем текст кнопки, вы также можете добавить прелоадер
		var data = {
			'action': 'loadmore',
			'query': true_posts,
			'page' : current_page
		};
		$.ajax({
			url:ajaxurl, // обработчик
			data:data, // данные
			type:'POST', // тип запроса
			success:function(data){
				if( data ) { 
					$('#true_loadmore span').text('Показать ещё');
					$('#true_loadmore').before(data); // вставляем новые посты
					current_page++; // увеличиваем номер страницы на единицу
					if (current_page == max_pages) $("#true_loadmore").remove(); // если последняя страница, удаляем кнопку
				} else {
					$('#true_loadmore').remove(); // если мы дошли до последней страницы постов, скроем кнопку
				}
			}
		});
	});



	 $('.recomendation-slider .row_products').slick({
		arrows: true,
		dots: false,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-angle-right"></i></div>',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 3000,
		responsive: [			
			{
				breakpoint: 992,
				settings: {
				slidesToShow: 3,
				}
			},	
			{
				breakpoint: 768,
				settings: {
				slidesToShow: 2,
				}
			}
			]
	});

	let url = location.href;	
	$('.catalog .sidebar-catalog a').each(function(){//Переберём дивы
	  let thisURL = $(this).attr('href'); // Получим атрибут data-url
	  if(thisURL==url) {
	  	$(this).closest('.sidebar-catalog').find('.item-sidebar__dropdown').hide(200);
	  	$(this).closest('.item-sidebar__dropdown').slideToggle(200);
	  }
	  console.log(url);
	  console.log(thisURL);
	});
	$(".item-sidebar__head").each(function() {
		let thisURL2 = $(this).data('url');
		if(thisURL2==url) {
			$(this).closest('.sidebar-catalog').find('.item-sidebar__dropdown').hide(200);
			$(this).siblings(".item-sidebar__dropdown").slideToggle(200);
		}		
	});
/*
	var mh = 0;
   $(".recomendation-slider .item-product").each(function () {
       var h_block = parseInt($(this).height());
       if(h_block > mh) {
          mh = h_block;
       };
   });
   $(".recomendation-slider .item-product").height(mh);*/

   $('.card .tabs-card  li a').click(function(){
		$('.slider-portfolio').slick('refresh');
	})

   $('.card').each(function() {
		var value = $(this).data('title');
		$(this).find('[name=your-title]').val(value).attr('readonly', true);
	});


   
	/***/


	objectFitImages();

});

/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();


