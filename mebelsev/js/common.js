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

  /* инициализация увеличения */
  $('.scr_card .scr_card__gallery-img').each(function(xi,xel){
    $('#' + $(xel).attr('id')).imageZoom({
      zoom: 200,
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

  $('.header .burger').click(function() {
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
    // if ($(_href).hasClass('modal__reviews')) {
    //   $(".modal__wrap").mCustomScrollbar({
    //     theme: "dark",
    //     scrollInertia: 1000,
    //   });
    // }
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
      $(this).parent().toggleClass('active');
      $(this).siblings().slideToggle();
      if (hideOther) {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().siblings().find('.hidden').slideUp();
      }
    });
  }

  toggleHidden('.jobs',true);
  $('.jobs__col:first-of-type .faq__item:first-of-type').addClass('active');
  $('.jobs__col:first-of-type .faq__item:first-of-type .hidden').show();


  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".catalog__wrap").toggleClass("fixed", (fromTop > 154));
    $(".to-top").toggleClass("fixed", (fromTop > 600));
    $(".header__msgs").toggleClass("fixed", (fromTop > 20));
  });

  // Табы
  $('.js-ard__add-nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.scr_card__add-tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  if (window.matchMedia('(max-width: 1070px)').matches) {
    $('.header__btn--catalog').click(function(e) {
      $('.page_left').addClass('active');
    });
    $('.catalog-close').click(function(e) {
      $('.page_left').removeClass('active');
    });
  }

  if (window.matchMedia('(max-width: 1170px)').matches) {
    $('.scr_card__title').prependTo('.scr_card__df');
  }

  if (window.matchMedia('(max-width: 991px)').matches) {
    // фиксированные шапка
    $(window).on("scroll", function() {
      var fromTop = $(document).scrollTop();
      $(".header").toggleClass("fixed", (fromTop > 10));
    });
  }

  $('.scr_card__colors-circle').each(function(xi,xel) {
    if ( $(xel).css("background-color") == 'rgb(255, 255, 255)' ) {
      $(xel).css('border-color','#e3edf3');
    }
  });

  $('.reviews__text').each(function(xi,xel) {
    $(xel).text($(xel).text().replace(/(\n|\r|\f)/g, ' '));
    $(xel).html($(xel).text().replace(/(.{220}).{0,}/, '$1...'));
  });

  $('.your-file input').change(function() {
    var fileName = $(this).val();
    fileName = fileName.replace (/\\/g, '/').split ('/').pop ();
    $(this).parents('label').find('.sl').text(fileName);
  });

  var _photoInd = 0;

  $(document.body).on('change', '.form__photos input[type="file"]', function() {
    $this = $(this);
    if ($this.parents('.form__item').is(':last-of-type')) {
      var _clone = $this.parents('.form__item').clone();
      _photoInd++;
      _clone.attr('name','your-photo-' + _photoInd);
      $this.parents('.your-photo').addClass('your-photo--chosen');
      $this.parents('.form__item').after(_clone);

      var _fileURL = $this.prop('files')[0];
      var _img = $this.parents('.form__item').find('.your-photo__img img')[0];
      if (_fileURL) {
          _img.src = URL.createObjectURL(_fileURL);
          localStorage.setItem('myImage', _img.src);
      }

      _img.src = localStorage.getItem('myImage')
    }

  });

  $('.form__photos').on('click', '.your-photo--chosen', function(){
    $(this).parents('.form__item').remove();
  });

  /* СЛАЙДЕРЫ */

  var scr1Slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    loop: true,
    watchOverflow: true,
    pagination: {
      el: '.scr1__slider-btns .swiper-dots',
    },
  });

  var scr1Feat = new Swiper('#scr1__feat', {
    slidesPerView: 1,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.scr1__feat-btns .swiper-dots',
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  var worksSlider = new Swiper('#works__slider', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.works__slider-btns .swiper-button-next',
      prevEl: '.works__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.works__slider-btns .swiper-dots',
    },
    breakpoints: {
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 3,
      },
    },
  });

  var brandsSlider = new Swiper('#brands__slider', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.brands__slider-btns .swiper-button-next',
      prevEl: '.brands__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.brands__slider-btns .swiper-dots',
    },
    breakpoints: {
      1170: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      767: {
        slidesPerView: 4,
      },
      575: {
        slidesPerView: 3,
      },
    },
  });

  var reviewsSlider = new Swiper('#reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.reviews__slider-btns .swiper-button-next',
      prevEl: '.reviews__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.reviews__slider-btns .swiper-dots',
    },
    breakpoints: {
      1700: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
      },
    },
  });

  $('.prod__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).parents('.prod__wrap').find('.prod__slider-btns');
    var prodSlider = new Swiper(xId, {
      slidesPerView: 2,
      spaceBetween: 8,
      watchSlidesProgress: true,
      watchOverflow: true,
      navigation: {
        nextEl: xBtns.find('.swiper-button-next'),
        prevEl: xBtns.find('.swiper-button-prev'),
      },
      pagination: {
        el: xBtns.find('.swiper-dots'),
      },
      breakpoints: {
        1750: {
          slidesPerView: 4,
          spaceBetween: 23,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        575: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
      },
    });
  });


  $('.scr_card__thumbs-wrap').each(function(xi,xel) {
    var _thumbs = $(xel).find('.scr_card__thumbs');
    var _gallery = $(this).siblings('.scr_card__gallery');
    var _btns = $(xel).find('.scr_card__thumbs-btns');

    var scrCardThumbs = new Swiper(_thumbs, {
      slidesPerView: 2,
      spaceBetween: 8,
      watchSlidesProgress: true,
      watchOverflow: true,
      navigation: {
        nextEl: _btns.find('.swiper-button-next'),
        prevEl: _btns.find('.swiper-button-prev'),
      },
      breakpoints: {
        1600: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });

    var scrCardGallery = new Swiper(_gallery, {
      slidesPerView: 1,
      spaceBetween: 30,
      watchSlidesProgress: true,
      watchOverflow: true,
      thumbs: {
        swiper: scrCardThumbs
      }
    });

  });

  $('.scr_card__tab:not(:first-of-type)').hide();

  $('.scr_card__colors ul li input').change(function(){
    var _id = '#' + $(this).attr('id').replace('color-','scr_card__tab-');
    $('.scr_card__tab').not(_id).hide();
    $(_id).fadeIn();
  });


  function moveSearch() {
    if (window.matchMedia('(max-width: 991px)').matches) {
      $('.header__search').prependTo('.page_wr');
    }
  }

  moveSearch();


  if (window.matchMedia('(max-width: 1070px)').matches) {
    $('.menu-item-has-children > a .arrow').click(function() {
      $(this).parent().siblings('.sub-menu').toggle();
      if ($(this).parent().siblings('.sub-menu-wrap').length > 0) {
        $(this).parent().siblings('.sub-menu-wrap').toggle();
        $(this).parent().siblings('.sub-menu-wrap').children('.sub-menu').toggle();
      }
    });
  } else {
    $('.menu-item-has-children > a').hover(function() {
      if ( $(this).closest('.sub-menu').length > 0 ) {
        $(this).closest('.sub-menu').find('.sub-menu').hide();
      } else {
        $(this).closest('.menu').find('.sub-menu').hide();
        $(this).closest('.menu').find('.sub-menu-wrap').hide();
      }

      $(this).siblings('.sub-menu').show();
      if ($(this).siblings('.sub-menu-wrap').length > 0) {
        $(this).siblings('.sub-menu-wrap').show();
        $(this).siblings('.sub-menu-wrap').children('.sub-menu').show();
      }
    });
    $('.menu').hover(function() {

    }, function() {
      $(this).find('.sub-menu').hide();
      $(this).find('.sub-menu-wrap').hide();
    });
  }

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
