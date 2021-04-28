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

  /* Открытие / закрытие модалок (кроме карты) */
  $('a.open-modal').click(function(event){
    event.preventDefault();
    var _href = $(this).attr('href');
    if ( $(_href).length > 0 ) {
      $(_href).addClass('active');
      $(_href + ' .modal__content').addClass('visible');
    }
  });

  function closeModal() {
    var activeCount = $('.modal.active').length;
    if ( activeCount > 1 ) {
      $($('.modal.active')[activeCount - 1]).removeClass('active');
      $('.modal__project2 .modal__content').removeClass('visible');
    } else {
      $('.modal').removeClass('active');
      $('.modal__content').removeClass('visible');
    }
  }

  // $(document).mouseup(function (e) {
  //   var container = $(".modal .modal__content");
  //   if (container.has(e.target).length === 0 && !($(e.target).hasClass('modal__content')) ){
  //     closeModal();
  //   }
  // });

  $('.modal .close').click(function(){
    closeModal();
  });

  $(document).keydown(function(eventObject){
    if( eventObject.which == 27 ){
      closeModal();
    }
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

    var modalSlider = new Swiper('#modal__slider', {
      slidesPerView: 2,
      spaceBetween: 10,
      watchSlidesProgress: true,
      watchOverflow: true,
      pagination: {
        el: '.modal__slider-btns .swiper-dots',
      },
      breakpoints: {
        1070: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      },
    });

    var modalThumbs = new Swiper('#modal__thumbs', {
      slidesPerView: 2,
      spaceBetween: 8,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      centerInsufficientSlides: true,
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        870: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
    });

    var modalGallery = new Swiper('#modal__gallery', {
      slidesPerView: 1,
      spaceBetween: 20,
      watchSlidesProgress: true,
      watchOverflow: true,
      navigation: {
        nextEl: '.modal__gallery-btns .swiper-button-next',
        prevEl: '.modal__gallery-btns .swiper-button-prev',
      },
      pagination: {
        el: '.modal__gallery-btns .swiper-dots',
      },
      thumbs: {
        swiper: modalThumbs
      }
    });


  });