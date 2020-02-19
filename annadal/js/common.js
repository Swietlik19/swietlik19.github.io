(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain]'), {watchMQ: true});

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });

  $(".cases__imgs").twentytwenty();

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(e){
      e.preventDefault();
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top - 80 +'px'});
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

  $('.header .burger').click(function() {
    $('.header .burger').toggleClass('active');
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
      $(this).find('.open').toggleClass('active');
      $(this).siblings().slideToggle();
      if (hideOther) {
        $(this).parent().siblings().find('.open').removeClass('active');
        $(this).parent().siblings().find('.hidden').slideUp();
      }
    });
  }

  toggleHidden('.faq',true);

  // фиксированное меню и кнопка "вверх"
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  var show = true;
  var countbox = ".nums__wrap";
  $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top - 100; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.nums__num').css('opacity', '1');
          $('.nums__num').spincrement({
              thousandSeparator: " ",
              duration: 2400
          });
          show = false;
      }
  });

  // "Читать полностью" в SEO
  $('.show-more').click(function() {
    $(this).parent().siblings('.education__wrap').toggleClass('opened');
    if ($(this).hasClass('active')) {
      $(this).find('span').text('Читать дальше');
    } else {
      $(this).find('span').text('Скрыть');
    }
    $(this).toggleClass('active');
  });

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
  });

  // Табы
  $('.contacts__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');

    var from = _href.search('-');
    var to = _href.length;
    var $num = _href.substr(from + 1,to);

    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    $('.contacts__tab').not(_href).hide();
    $(_href).fadeIn();
    $('.map__wrap').not('#map__wrap-' + $num).hide();
    $('#map__wrap-' + $num).fadeIn();
    $('.contacts__img').not('#contacts__img-' + $num).hide();
    $('#contacts__img-' + $num).fadeIn();
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  /* СЛАЙДЕРЫ */
  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrackHeight = Math.max($(sliderID).find('.swiper-slide').outerHeight());
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  var reviewsSlider = new Swiper('#reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    watchSlidesProgress: true,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: '#reviews__slider .swiper-button-next',
      prevEl: '#reviews__slider .swiper-button-prev',
    },
    pagination: {
      el: '#reviews__slider .swiper-pagination',
    },
    on: {
      init: function () {
        $(window).on("load", function () {
          equalHeightSwiper('#reviews__slider');
        });
      },
    },
  });

  var mediaSlider = new Swiper('#media__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: '#media__slider .swiper-button-next',
      prevEl: '#media__slider .swiper-button-prev',
    },
    pagination: {
      el: '#media__slider .swiper-pagination',
    },
  });

  var casesThumbs = new Swiper('#cases__thumbs', {
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    breakpoints: {
      700: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      575: {
        spaceBetween: 15,
        slidesPerView: 4,
      },
      500: {
        spaceBetween: 15,
        slidesPerView: 4,
      },
      430: {
        spaceBetween: 15,
        slidesPerView: 3,
      },
    },
  });

  var casesSlider = new Swiper('#cases__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '#cases__slider .swiper-button-next',
      prevEl: '#cases__slider .swiper-button-prev',
    },
    thumbs: {
      swiper: casesThumbs
    },
    noSwipingClass: 'cases__slide'
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeightSwiper('#reviews__slider');
    }

    screenWidth = $(window).width();
  });

})(jQuery);
