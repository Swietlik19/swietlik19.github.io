(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain],[data-object-fit-cover-top]'), {watchMQ: true});

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

  $('#header__burger').click(function() {
    $(this).toggleClass('active');
    $('.header__menu').slideToggle();
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

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 200));
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

  /* СЛАЙДЕРЫ */
  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrackHeight = Math.max($(sliderID).find('.swiper-slide').outerHeight());
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  // if (window.matchMedia('(max-width: 767px)').matches) {
  //   var projectsSlider = new Swiper('#veterans__slider', {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //     watchSlidesProgress: true,
  //     loop: true,
  //     pagination: {
  //       el: '#veterans__slider .swiper-dots',
  //     },
  //     breakpoints: {
  //       650: {
  //         slidesPerView: 2,
  //       },
  //     },
  //   });
  // }

  if (window.matchMedia('(max-width: 767px)').matches) {
    var partnersSlider = new Swiper('#news__slider', {
      slidesPerView: 1,
      watchSlidesProgress: true,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '#news__slider .swiper-dots',
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
      },
    });
  }

  var veteranItemLifeSlider = new Swiper('#veteran-item__life-slider', {
    slidesPerView: 1,
    watchSlidesProgress: true,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.veteran-item__life-btns .swiper-dots',
    },
    navigation: {
      nextEl: '.veteran-item__life-btns .swiper-button-next',
      prevEl: '.veteran-item__life-btns .swiper-button-prev',
    },
  });

  var veteranItemLifeSlider = new Swiper('.veteran-item__photo-slider', {
    slidesPerView: 2,
    watchSlidesProgress: true,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.veteran-item__photo-btns .swiper-dots',
    },
    navigation: {
      nextEl: '.veteran-item__photo-btns .swiper-button-next',
      prevEl: '.veteran-item__photo-btns .swiper-button-prev',
    },
    breakpoints: {
      991: {
        spaceBetween: 30,
      },
      767: {
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 3,
      },
    },
  });

  var veteranGalleryThumbs = new Swiper('.veteran-item__live-thumbs', {
    spaceBetween: 9,
    slidesPerView: 2,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      767: {
        direction: 'vertical',
      },
      450: {
        slidesPerView: 3,
      },
    },
  });

  var veteranGallery = new Swiper('.veteran-item__live-gallery', {
    spaceBetween: 10,
    thumbs: {
      swiper: veteranGalleryThumbs
    }
  });


  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
