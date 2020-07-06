(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Инициализация красивых select'ов */
  $('.nice-select').niceSelect();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-cover-right],[data-object-fit-contain]'), {watchMQ: true});

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });

  /* инициализация кастомного скроллбара */
  $(window).on("load",function(){
    $(".landing__price-tab").mCustomScrollbar({
      theme: "rounded-dark"
    });
  });

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top - 20 +'px'});
      return false;
    });
  });

  /* Плавный скролл "вверх" */
  $('a[href^="#page_wr"]').click(function(event){
    event.preventDefault;
    var _href = $(this).attr('href');
    $('html, body').animate({scrollTop: '0px'});
    return false;
  });

  $('#header__burger').click(function() {
    $(this).toggleClass('active');
    $('.header__top').slideToggle();
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
      $('.modal__callback2 .modal__content').removeClass('visible');
    } else {
      $('.modal').removeClass('active');
      $('.modal__content').removeClass('visible');
    }
  }

  $(document).mouseup(function (e) {
    var container = $(".modal .modal__content");
    if (container.has(e.target).length === 0){
      closeModal();
    }
  });

  $('.modal .close').click(function(){
    closeModal();
  });

  $(document).keydown(function(eventObject){
    if( eventObject.which == 27 ){
      closeModal();
    }
  });

  // маска поля tel
  $(".wpcf7-tel").mask("+7 (999) 999-99-99");

  // Секции по типу "Вопрос - ответ"
  function toggleHidden(xParent,hideOther) {
    $(xParent + ' .top').click(function() {
      $(this).find('.open').toggleClass('active');
      $(this).toggleClass('active');
      $(this).siblings().slideToggle();
      if (hideOther) {
        $(this).parent().parent().siblings().find('.top').removeClass('active');
        $(this).parent().parent().siblings().find('.open').removeClass('active');
        $(this).parent().parent().siblings().find('.hidden').slideUp();
      }
    });
  }

  toggleHidden('.vacancy',true);
  toggleHidden('.faq',true);


  $('.landing__price-item .top .open').click(function() {
    $(this).toggleClass('active');
    $(this).parent().toggleClass('active');
    $(this).parent().siblings().slideToggle();

    $(this).parent().parent().siblings().find('.top').removeClass('active');
    $(this).parent().parent().siblings().find('.open').removeClass('active');
    $(this).parent().parent().siblings().find('.landing__price-hidden').slideUp();
  });

  $('.landing__rework-top .open').click(function() {
    $(this).toggleClass('active');
    $(this).parent().parent().siblings().slideToggle();

    $(this).parent().parent().parent().siblings().find('.open').removeClass('active');
    $(this).parent().parent().parent().siblings().find('.landing__rework-hidden').slideUp();
  });

  // фиксированное меню и кнопка "вверх"
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  /* Раскрытие меню в футере на мобильных устройствах */

  if (window.matchMedia('(max-width: 575px)').matches) {
    $('.footer__title').click(function() {
      $(this).siblings('.footer__hidden').slideToggle();
      $(this).find('.mobile').toggleClass('active');
      $(this).parents('.footer__item').siblings('.footer__item').find('.footer__hidden').slideUp();
      $(this).parents('.footer__item').siblings('.footer__item').find('.footer__title .mobile').removeClass('active');
    });
  }

  // Табы
  $('.about__nav-list a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    $('.about__tab').not(_href).hide();
    $(_href).fadeIn();
  });

  $('.complex__nav > li > a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    $('.complex__tab').not(_href).hide();
    $(_href).fadeIn();
  });

  $('.projects__nav-list-with-tabs a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    $('.landing__price-tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 900px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });


  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  $('.header__catalog > ul > li.menu-item-has-children').hover(function() {
    if ( !(window.matchMedia('(max-width: 991px)').matches) ) {
      $(this).find('.sub-menu__wrap').addClass('active');
      $(this).children('a').addClass('active');
    }
  },function() {
    if ( !(window.matchMedia('(max-width: 991px)').matches) ) {
      $(this).find('.sub-menu__wrap').removeClass('active');
      $(this).children('a').removeClass('active');
    }
  });

   $('.your-file input').change(function() {
    var fileName = $(this).val();
    fileName = fileName.replace (/\\/g, '/').split ('/').pop ();
    $(this).parents('label').find('span').text(fileName);
  });

  $('.projects__filter').click(function() {
    $(this).siblings('.projects__nav-list').slideToggle();
  });

  $('.header__catalog--mobile .arrow').click(function(e) {
    e.preventDefault();
    $(this).parent().siblings('.sub-menu__wrap').toggleClass('active');
  });

  $('.projects__nav-item-with-children a').click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
    $(this).siblings('.sub-menu').toggleClass('active');
    $(this).parent().siblings().removeClass('active');
    $(this).parent().siblings().find('.sub-menu').removeClass('active');
  });

  $('.landing__compare-btn').click(function() {
    $(this).siblings('.landing__compare-hidden').slideToggle();
  });


  /* Замена input(type="number") */
  (function quantityProducts() {
    $(".quantity").each(function(xi,xel) {
      var $quantityArrowMinus = $(xel).find(".quantity-arrow-minus");
      var $quantityArrowPlus = $(xel).find(".quantity-arrow-plus");

      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);

      function quantityMinus() {
        var $quantityNum = $(xel).find(".quantity-num");
        if ($quantityNum.val() >= 2) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }

      function quantityPlus() {
        var $quantityNum = $(xel).find(".quantity-num");
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    });
  })();

  /* СЛАЙДЕРЫ */

  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrackHeight = Math.max($(sliderID).find('.swiper-slide').outerHeight());
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  var projectsSlider = new Swiper('#projects__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.projects__wrap .swiper-button-next',
      prevEl: '.projects__wrap .swiper-button-prev',
    },
    pagination: {
      el: '#projects__slider .swiper-dots',
    },
    on: {
      init: function () {
        $(window).on("load", function () {
          equalHeightSwiper('#projects__slider');
        });
      },
    },
  });

  if (window.matchMedia('(max-width: 767px)').matches) {
    var partnersSlider = new Swiper('#partners__slider', {
      slidesPerView: 2,
      watchSlidesProgress: true,
      loop: true,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: '#partners__slider .swiper-dots',
      },
      breakpoints: {
        575: {
          slidesPerView: 4,
        },
        400: {
          slidesPerView: 3,
        },
      },
    });
  }

  if (window.matchMedia('(max-width: 767px)').matches) {
    var landingList = new Swiper('.landing__maintain-serv-list', {
      slidesPerView: 1,
      watchSlidesProgress: true,
      pagination: {
        el: '.landing__maintain-serv-dots',
      },
      breakpoints: {
        575: {
          slidesPerView: 3,
        },
        450: {
          slidesPerView: 2,
        },
      },
    });
  }

  var actions__slider = new Swiper('#actions__slider', {
    slidesPerView: 1,
    watchSlidesProgress: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.actions__slider-btns .swiper-button-next',
      prevEl: '.actions__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.actions__slider-btns .swiper-dots',
    },
  });


  var complex__thumbs = new Swiper('#complex__thumbs', {
    slidesPerView: 2,
    spaceBetween: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

    freeMode: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.complex__thumbs-btns .swiper-button-next',
      prevEl: '.complex__thumbs-btns .swiper-button-prev',
    },
    breakpoints: {
      991: {
        direction: 'vertical',
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 3,
      },
      850: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 4,
      },
      400: {
        slidesPerView: 3,
      },
    },
  });

  var complex__gallery = new Swiper('#complex__gallery', {
    slidesPerView: 1,
    spaceBetween: 25,
    spaceBetween: 10,
    navigation: {
      nextEl: '.complex__gallery-btns .swiper-button-next',
      prevEl: '.complex__gallery-btns .swiper-button-prev',
    },
    thumbs: {
      swiper: complex__thumbs
    }
  });




  function removeTitle() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('.complex__pics').before($('.complex__article'));
      $('.complex__pics').before($('.complex h1.title-second'));
      $('.complex__pics').before($('.complex .complex__price'));
    } else {
      $('.complex__desc').before($('.complex__article'));
      $('.complex__desc').before($('.complex h1.title-second'));
      $('.complex__desc').before($('.complex .complex__price'));
    }
  }

  removeTitle();

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      // equalHeightSwiper('#scr1__slider');
      removeTitle();
    }

    screenWidth = $(window).width();
  });

})(jQuery);
