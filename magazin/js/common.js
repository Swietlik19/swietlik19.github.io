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

  toggleHidden('.vacancy',true);

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  // Табы
  $('.club__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.club__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.coop__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.coop__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  $('.map__pin-img').hover(function() {
    var xInd = $(this).parent().attr('class').replace('map__pin map__pin','');
    mapHover(this,$('.map__item' + xInd),true);
  }, function() {
    var xInd = $(this).parent().attr('class').replace('map__pin map__pin','');
    mapHover(this,$('.map__item' + xInd),false);
  });

  $('.map__item').hover(function() {
    var xInd = $(this).attr('class').replace('map__item map__item','').replace(' active','');
    mapHover($('.map__pin' + xInd + ' .map__pin-img'),this,true);
  }, function() {
    var xInd = $(this).attr('class').replace('map__item map__item','').replace(' active','');
    mapHover($('.map__pin' + xInd + ' .map__pin-img'),this,false);
  });

  function mapHover(xPin,xMenu,xAdd) {
    if (xAdd) {
      $(xPin).addClass('active');
      $(xMenu).addClass('active');
    } else {
      $(xPin).removeClass('active');
      $(xMenu).removeClass('active');
    }
  }


  $('.your-file input').change(function() {
    var fileName = $(this).val();
    fileName = fileName.replace (/\\/g, '/').split ('/').pop ();
    $(this).siblings('.text').text(fileName);
  });


  /* СЛАЙДЕРЫ */

  var scr1Slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.scr1__slider-btns .swiper-button-next',
      prevEl: '.scr1__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.scr1__slider-btns .swiper-dots',
    },
  });

  var actionsSlider = new Swiper('#actions__slider', {
    slidesPerView: 2,
    spaceBetween: 15,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.actions__slider-btns .swiper-button-next',
      prevEl: '.actions__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.actions__slider-btns .swiper-dots',
    },

    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 51,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  var partnersSlider = new Swiper('#partners__slider', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 10,
    navigation: {
      nextEl: '.partners__slider-btns .swiper-button-next',
      prevEl: '.partners__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.partners__slider-btns .swiper-dots',
    },

    breakpoints: {
      991: {
        slidesPerView: 6,
        slidesPerColumn: 3,
        spaceBetween: 30,
      },
      850: {
        slidesPerView: 5,
        slidesPerColumn: 3,
        spaceBetween: 30,
      },
      650: {
        slidesPerView: 4,
        slidesPerColumn: 3,
        spaceBetween: 30,
      },
      400: {
        slidesPerView: 3,
        slidesPerColumn: 2,
      },
    },
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
