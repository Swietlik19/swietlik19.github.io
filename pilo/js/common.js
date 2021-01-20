(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

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
    $(this).toggleClass('active');
    $('.header__top .menu').toggleClass('active');
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
      $(this).siblings().slideToggle();
      if (hideOther) {
        $(this).parent().siblings().find('.open').removeClass('active');
        $(this).parent().siblings().find('.hidden').slideUp();
      }
    });
  }

  toggleHidden('.faq',true);

  $('.faq__item:first-of-type').find('.hidden').show();
  $('.faq__item:first-of-type').find('.open').addClass('active');

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  // Табы
  // $('.prod-item__nav a').click(function(event) {
  //   event.preventDefault();
  //   var _href = $(this).attr('href');
  //   $(this).parent().siblings().removeClass('current');
  //   $(this).parent().addClass('current');
  //   $('.services__tab').not(_href).hide();
  //   $(_href).fadeIn();
  //   if (window.matchMedia('(max-width: 767px)').matches) {
  //     $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
  //   }
  // });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.header__catalog .menu > li').appendTo('.header__top .menu');
  }


  /* СЛАЙДЕРЫ */

  var certsSlider = new Swiper('#certs__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.certs__slider-wrap .swiper-dots',
    },
    breakpoints: {
      1070: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  var prodSlider = new Swiper('#prod__slider', {
    slidesPerView: 2,
    spaceBetween: 5,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.prod__slider-wrap .swiper-dots',
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
        spaceBetween: 83,
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      1070: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      870: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  var partnersSlider = new Swiper('#partners__slider', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    pagination: {
      el: '.partners__slider-btns .swiper-dots',
    },
    breakpoints: {
      950: {
        slidesPerView: 5,
      },
      700: {
        slidesPerView: 4,
      },
      430: {
        slidesPerView: 3,
      },
    },
  });

})(jQuery);
