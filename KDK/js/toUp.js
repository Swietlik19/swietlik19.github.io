$(function(){
    $.fn.scrollToTop=function(){
      $(this).hide().removeAttr("href");
      if($(window).scrollTop()!="0"){
          $(this).fadeIn("slow")
    }
    var scrollDiv=$(this);
    $(window).scroll(function(){
      if($(window).scrollTop()=="0"){
      $(scrollDiv).fadeOut("slow")
      }else{
      $(scrollDiv).fadeIn("slow")
    }
    });
      $(this).click(function(){
        $("html, body").animate({scrollTop:0},"slow")
      })
    }
  });
  $(function() {

    /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
    svg4everybody();


    /* инициализация fancybox */
    $(".fancybox").fancybox({
      padding: 0,
      scrolling: 'auto'
    });
    
    $("#toTop").scrollToTop();


  $('.faq__item').click(function() {
    $(this).find('ul').slideToggle();
    $(this).parent().siblings().find('ul').slideUp();
  });

  
  $('.burger').click(function() {
    $('.burger').toggleClass('active');
    $('.header__menu').toggleClass('active');
  });

    var featSlider = new Swiper('#feat__slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      watchSlidesProgress: true,
      watchOverflow: true,
      navigation: {
        nextEl: '.feat__wrap .swiper-button-next',
        prevEl: '.feat__wrap .swiper-button-prev',
      },
      pagination: {
        el: '.feat__wrap .swiper-dots',
      },
      breakpoints: {
        1400: {
          slidesPerView: 4,
        },
        820: {
          slidesPerView: 3,
        },
        580: {
          slidesPerView: 2,
        },
      },
    });

    var stepsSlider = new Swiper('#steps__slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      watchSlidesProgress: true,
      watchOverflow: true,
      pagination: {
        el: '.steps__wrap .swiper-dots',
      },
      breakpoints: {
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        772: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        580: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });

    var certsSlider = new Swiper('#certs__slider', {
      slidesPerView: 2,
      spaceBetween: 10,
      watchSlidesProgress: true,
      watchOverflow: true,
      pagination: {
        el: '.certs__wrap .swiper-dots',
      },
      breakpoints: {
        400: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
    });


  });