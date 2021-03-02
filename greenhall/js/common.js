!function(t){t.extend(t.easing,{spincrementEasing:function(t,a,e,n,r){return a===r?e+n:n*(-Math.pow(2,-10*a/r)+1)+e}}),t.fn.spincrement=function(a){function e(t,a){if(t=t.toFixed(a),a>0&&"."!==r.decimalPoint&&(t=t.replace(".",r.decimalPoint)),r.thousandSeparator)for(;o.test(t);)t=t.replace(o,"$1"+r.thousandSeparator+"$2");return t}var n={from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},r=t.extend(n,a),o=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each(function(){var a=t(this),n=r.from;a.attr("data-from")&&(n=parseFloat(a.attr("data-from")));var o;if(a.attr("data-to"))o=parseFloat(a.attr("data-to"));else if(null!==r.to)o=r.to;else{var i=t.inArray(r.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+r.thousandSeparator:r.thousandSeparator,l=new RegExp(i,"g");o=parseFloat(a.text().replace(l,""))}var c=r.duration;r.leeway&&(c+=Math.round(r.duration*(2*Math.random()-1)*r.leeway/100));var s;if(a.attr("data-dp"))s=parseInt(a.attr("data-dp"),10);else if(null!==r.decimalPlaces)s=r.decimalPlaces;else{var d=a.text().indexOf(r.decimalPoint);s=d>-1?a.text().length-(d+1):0}a.css("counter",n),r.fade&&a.css("opacity",0),a.animate({counter:o,opacity:1},{easing:r.easing,duration:c,step:function(t){a.html(e(t*o,s))},complete:function(){a.css("counter",null),a.html(e(o,s)),r.complete&&r.complete(a)}})})}}(jQuery);


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

  // Убираем прелоадер
  $(window).on("load", function () {
    $('.page_preloader').delay(1000).fadeOut('slow');
  });

  /* инициализация parallax */
  $('.js-parallax').parallaxContent({
    shift: 20,
    duration: 1
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

  toggleHidden('.faq',true);

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  // Табы
  $('.about .tabs__nav--js a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.about__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  /* Анимация чисел */
  var show = true;
  var countbox = ".scr2__wrap";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.scr2__num strong').css('opacity', '1');
        $('.scr2__num strong').spincrement({
            thousandSeparator: " ",
            duration: 2000
        });
        show = false;
    }
  });


  $('.plans__stages-wrap').click(function(e){
    e.preventDefault();
  });

  function addTextToSold(_stage) {
    $('.plans__stage-sold').remove();
      var topsToCorrect1 = _stage.find('.plans__stage-apt:nth-of-type(5)').attr('id');
      var topsToCorrect2 = _stage.find('.plans__stage-apt:nth-of-type(8)').attr('id');
    _stage.find('.plans__stage-apt.sold').each(function() {
      var _cont = _stage.find('.plans__stage-img');
      var _top  = $(this).offset().top;
      var _left = $(this).offset().left;
      var _id   = $(this).attr('id');
      if ((_id == topsToCorrect1) || (_id == topsToCorrect2)) {
        if (window.matchMedia('(max-width: 800px)').matches) {
          _top += 27;
        } else {
          _top += 35;
        }
      }
      var _text = $('<span class="plans__stage-sold plans__stage-sold-' + _id + '">Продано</span>');
      _cont.append(_text);
      _text.offset({top:_top, left:_left});
    });
  }

  addTextToSold($('.plans__stage-tab:first-child'));

  $('.plans__stages-wrap').mouseenter(function(){
    var _href = $(this).attr('href');
    $('.plans__stages-wrap').removeClass('active');
    $(this).addClass('active');
    $('.plans__stage-tab').not(_href).hide();
    $('.plans__stage-tab').not(_href).removeClass('active');
    $(_href).show();
    $(_href).addClass('active');
    $(_href).css('display','flex');
    addTextToSold($(_href));
  });

  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.footer__title').click(function() {
      $(this).parents('.footer__col').siblings('.footer__col').find('.footer__hidden').hide();
      $(this).siblings('.footer__hidden').show();
    });
  }


  /* СЛАЙДЕРЫ */

  var casesSlider = new Swiper('#cases__slider', {
    slidesPerView: 1,
    spaceBetween: 50,
    watchSlidesProgress: true,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.cases__slider-btns .swiper-button-next',
      prevEl: '.cases__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.cases__slider-btns .swiper-dots',
    },
  });

  var gallerySlider = new Swiper('#gallery__slider', {
    slidesPerView: 1,
    spaceBetween: 52,
    watchSlidesProgress: true,
    loop: true,
    watchOverflow: true,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: '.gallery__slider-btns .swiper-dots',
    },
  });

  var prodSlider = new Swiper('#prod__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    watchSlidesProgress: true,
    watchOverflow: true,
    loop: true,
    navigation: {
      nextEl: '.prod__slider-btns .swiper-button-next',
      prevEl: '.prod__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.prod__slider-btns .swiper-dots',
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      100: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  if (window.matchMedia('(max-width: 991px)').matches) {
    var scr2Feat = new Swiper('#scr2__feat', {
      slidesPerView: 1,
      spaceBetween: 30,
      watchSlidesProgress: true,
      watchOverflow: true,
      loop: true,
      navigation: {
        nextEl: '.scr2__feat-btns .swiper-button-next',
        prevEl: '.scr2__feat-btns .swiper-button-prev',
      },
      breakpoints: {
        750: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }

  if (window.matchMedia('(max-width: 1070px)').matches) {
    var advtsList = new Swiper('#advts__list', {
      slidesPerView: 1,
      spaceBetween: 30,
      watchSlidesProgress: true,
      watchOverflow: true,
      loop: true,
      navigation: {
        nextEl: '.advts__list-btns .swiper-button-next',
        prevEl: '.advts__list-btns .swiper-button-prev',
      },
      pagination: {
        el: '.advts__list-btns .swiper-dots',
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }

  var instaList = new Swiper('#insta__list', {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.insta__list-btns .swiper-button-next',
      prevEl: '.insta__list-btns .swiper-button-prev',
    },
    pagination: {
      el: '.insta__list-btns .swiper-dots',
    },
    breakpoints: {
      1400: {
        slidesPerView: 4,
        spaceBetween: 44,
      },
      1200: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
    },
  });

})(jQuery);
