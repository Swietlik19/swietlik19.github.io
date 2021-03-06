(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Инициализация красивых select */
  $('select').niceSelect();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain]'), {watchMQ: true});

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
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

  $('.burger').click(function() {
    $('.header__menu').toggleClass('active');
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
      $(this).parents('.faq__item').toggleClass('active');
      $(this).siblings().slideToggle();
      if (hideOther) {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().siblings().find('.hidden').slideUp();
      }
    });
  }

  toggleHidden('.faq',true);

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  // Табы
  $('.prod-item__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.prod-item__item').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 40 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  /* Замена input(type="number") */
  (function quantityProducts() {
    $.each(['.quantity'],function(xi,xe) {
      $(xe).each(function(xi,xel) {
        var $quantityArrowMinus = $(xel).find(xe + "-arrow-minus");
        var $quantityArrowPlus = $(xel).find(xe + "-arrow-plus");

        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);

        function quantityMinus() {
          var $quantityNum = $(xel).find(xe + "-num");
          if ($quantityNum.val() >= 2) {
            $quantityNum.val(+$quantityNum.val() - 1);
          }
        }

        function quantityPlus() {
          var $quantityNum = $(xel).find(xe + "-num");
          $quantityNum.val(+$quantityNum.val() + 1);
        }
      });
    });
  })();


  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.prod-item__menu > li').click(function() {
      $(this).siblings('li').find('.prod-item__sub-menu').hide();
      $(this).find('.prod-item__sub-menu').toggle();
    });
  } else {
    $('.prod-item__menu > li').hover(function() {
      if ( !($(this).hasClass('current')) ) {
        $(this).find('.prod-item__sub-menu').toggle();
      }
    });
  }


  if (window.matchMedia('(max-width: 730px)').matches) {
    $('.prod-item__content-df:not(.prod-item__content-df--bottom) .prod-item__pics').append($('.prod-item__gallery-tabs'));
  }

  $('.prod__filter-open').click(function() {
    $('.prod__filter').slideToggle();
  });


  /* СЛАЙДЕРЫ */

  var prodSlider = new Swiper('#prod__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.prod__slider-btns .swiper-button-next',
      prevEl: '.prod__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.prod__slider-btns .swiper-dots',
    },
    breakpoints: {
      991: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      870: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      650: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  var prodGalleryTabs = new Swiper('#prod-item__gallery-tabs', {
    slidesPerView: 3,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
  });

  var prodGallery = new Swiper('#prod-item__gallery', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    thumbs: {
      swiper: prodGalleryTabs
    },
    breakpoints: {
      400: {
        spaceBetween: 18,
      },
    },
  });

  // if (window.matchMedia('(max-width: 767px)').matches) {
  //   var partnersSlider = new Swiper('#partners__slider', {
  //     slidesPerView: 2,
  //     watchSlidesProgress: true,
          // watchOverflow: true,
  //     loop: true,
  //     autoplay: {
  //       delay: 8000,
  //     },
  //     pagination: {
  //       el: '#partners__slider .swiper-dots',
  //     },
  //     breakpoints: {
  //       575: {
  //         slidesPerView: 4,
  //       },
  //       400: {
  //         slidesPerView: 3,
  //       },
  //     },
  //   });
  // }

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
