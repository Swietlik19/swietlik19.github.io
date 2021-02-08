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
  $('.prod-types .tabs__nav-js a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.prod-types__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.header__catalog .menu > li').appendTo('.header__top .menu');
  }

  /* Анимация чисел */
  if ($('.about__certs-nums').length > 0) {
    var show = true;
    var countbox = ".about__certs";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.about__certs-num strong').css('opacity', '1');
            $('.about__certs-num strong').spincrement({
                thousandSeparator: " ",
                duration: 1700
            });
            show = false;
        }
    });
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

  var certsSliderAbout = new Swiper('#certs__slider--about', {
    slidesPerView: 2,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.certs__slider-wrap .swiper-dots',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 17,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 17,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 17,
      },
      300: {
        slidesPerView: 2,
        spaceBetween: 17,
      },
    },
  });

  var aboutTimesSlider = new Swiper('#about__times-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.about__times-btns .swiper-dots',
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
        spaceBetween: 90,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  var aboutTimeline = new Swiper('#about__timeline', {
    slidesPerView: 1,
    spaceBetween: 0,
    watchSlidesProgress: true,
    watchOverflow: true,
    breakpoints: {
      1450: {
        slidesPerView: 5,
      },
      900: {
        slidesPerView: 4,
      },
      650: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
    },
  });

  var prodAddSlider = new Swiper('#prod-add__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.prod-add__slider-wrap .swiper-dots',
    },
    breakpoints: {
      1170: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
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
