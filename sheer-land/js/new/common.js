/* ToDo: Удалить!!! */
// ../old_libs/jquery.min.js
// ../old_libs/wow.min.js
// ../old_libs/slick.min.js
// ../old_libs/jquery.maskedinput.min.js
// ../../fancybox/jquery.fancybox.pack.js
// ../../fancybox/helpers/jquery.fancybox-buttons.js

// ../old_libs/script.js

!function(t){t.extend(t.easing,{spincrementEasing:function(t,a,e,n,r){return a===r?e+n:n*(-Math.pow(2,-10*a/r)+1)+e}}),t.fn.spincrement=function(a){function e(t,a){if(t=t.toFixed(a),a>0&&"."!==r.decimalPoint&&(t=t.replace(".",r.decimalPoint)),r.thousandSeparator)for(;o.test(t);)t=t.replace(o,"$1"+r.thousandSeparator+"$2");return t}var n={from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},r=t.extend(n,a),o=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each(function(){var a=t(this),n=r.from;a.attr("data-from")&&(n=parseFloat(a.attr("data-from")));var o;if(a.attr("data-to"))o=parseFloat(a.attr("data-to"));else if(null!==r.to)o=r.to;else{var i=t.inArray(r.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+r.thousandSeparator:r.thousandSeparator,l=new RegExp(i,"g");o=parseFloat(a.text().replace(l,""))}var c=r.duration;r.leeway&&(c+=Math.round(r.duration*(2*Math.random()-1)*r.leeway/100));var s;if(a.attr("data-dp"))s=parseInt(a.attr("data-dp"),10);else if(null!==r.decimalPlaces)s=r.decimalPlaces;else{var d=a.text().indexOf(r.decimalPoint);s=d>-1?a.text().length-(d+1):0}a.css("counter",n),r.fade&&a.css("opacity",0),a.animate({counter:o,opacity:1},{easing:r.easing,duration:c,step:function(t){a.html(e(t*o,s))},complete:function(){a.css("counter",null),a.html(e(o,s)),r.complete&&r.complete(a)}})})}}(jQuery);

(function($){

  new WOW().init();

  // Slick

  function activateSlider(options){
    var allSlides = $(options.slider + ' ' + options.slide);
    $(options.slider  + ' ' + options.count).text('/' + allSlides.length);

    $(options.slider + ' ' + options.slides).slick({
      appendArrows: $(options.slider  + ' ' + options.nav),
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true
    });

    $(options.slider).on('afterChange', function(event, slick, currentSlide){
      $(options.slider + ' ' + options.current).text(currentSlide + 1);
    });

  }

/* Перенести начало */
  if (document.querySelector(".modal-work__slider") !== null) {
    var sliders = $(".modal-work__slider");
    sliders.each(function(el) {

      activateSlider({
        slider: '#' + $(this).attr('id'),
        slides: ".modal-work__slides",
        slide: ".modal-work__slide",
        nav: ".modal-work-slider__nav",
        count: ".modal-work-slider__count",
        current: ".modal-work-slider__current"
      });

      var allSlides = $('#' + $(this).attr('id') + ' ' + '.modal-work__slide');
      if (allSlides.length <= 1) {
        $('#' + $(this).attr('id') + ' ' + '.modal-work-slider__nav-wrap').hide();
      }
    });
  }

  $('a[href="#modal-work"]').click(function() {
    event.preventDefault();
    $('.modal-work').show();
    $('.modal-work').scrollTop('0px');
    $('.modal-work').addClass('active');
    $('body').addClass('disabled');
  });

  /* Поправить */
  function closeWorkModal() {
    $('.modal-work').removeClass('active');
    $('body').removeClass('disabled');
    $('.modal-work').fadeOut();
  }

  $('.modal-work .left').click(function(){
    closeWorkModal();
  });

/* Закрытие модального окна при клике по пустому месту */
  // $(document).mouseup(function (e) {
  //   var container = $(".modal-work__content");
  //   if (container.has(e.target).length === 0){
  //       closeWorkModal();
  //   }
  // });
  /* END ПЕРЕНЕСТИ */

  $('.modal-work .close').click(function(){
    closeWorkModal();
  });

  $(document).keydown(function(eventObject){
    if( eventObject.which == 27 ){
      closeWorkModal();
    }
  });

  /* Перенести конец */

  function activateSliderWithTabs(options){
    var allSlides = $(options.slider + ' ' + options.slide);
    $(options.slider  + ' ' + options.count).text('/' + allSlides.length);

    $(options.slider + ' ' + options.slides).slick({
      appendArrows: $(options.slider  + ' ' + options.nav),
      dots: true,
      appendDots: $(options.slider + ' ' + options.dots),
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,

      /* ДОБАВИТЬ!!! */
      adaptiveHeight: true
    });

    var allDots = $(options.slider + ' ' + '.slick-dots li');
    var allLabels = $(options.slider + ' ' + '.screen_work-process__nav--invisible li');
    $($(allDots)[0]).addClass('active');
    for (var i = 0; i < allDots.length; i++) {
      $($(allDots[i]).find('button'))[0].innerHTML = allLabels[i].innerHTML;
    }

    $(options.slider).on('afterChange', function(event, slick, currentSlide){
      $(options.slider + ' ' + options.current).text(currentSlide + 1);
    });

    $(options.slider).on('afterChange', function(event, slick, currentSlide){
      var liCount = currentSlide + 1;
      var trianglePosition = 'calc(100% / 7 / 2 - 30px + 100% / 7 * ' + currentSlide + ')';
      $(options.slider + ' ' + '.screen_work-process__nav li').removeClass('active');
      $(options.slider + ' ' + '.screen_work-process__nav li:nth-of-type(' + liCount + ')').addClass('active');

      $(options.slider + ' ' + '.slider1__slides .triangle').css('left',trianglePosition);
    });
  }

  $('.screen_work-process__nav .slick-dots li').click(function() {
      if (window.matchMedia('(max-width: 768px)').matches) {
        $('html, body').animate({scrollTop: $('#work-process-slider').offset().top+60+'px'});
      }
  });

  if (document.querySelector("#s-portfolio-slider") !== null) {
    activateSlider({
      slider: "#s-portfolio-slider",
      slides: ".slider1__slides",
      slide: ".slider1__slide",
      nav: ".slider1__nav",
      count: ".slider1__count",
      current: ".slider1__current"
    });
  }

  $('#s-portfolio-slider .s-top-nav .slick-prev').click(function() {
    $('#s-portfolio-slider .s-bottom-nav .slick-prev').trigger('click');
  });

  $('#s-portfolio-slider .s-top-nav .slick-next').click(function() {
    $('#s-portfolio-slider .s-bottom-nav .slick-next').trigger('click');
  });


  if (document.querySelector("#work-process-slider") !== null) {
    activateSliderWithTabs({
      slider: "#work-process-slider",
      slides: ".slider1__slides-wrap",
      slide: ".slider1__slide",
      nav: ".slider1__nav",
      count: ".slider1__count",
      current: ".slider1__current",
      dots: ".screen_work-process__nav"
    });
  }


  $('#screen_team-slider .slider2__slides').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });

  $('#screen_team-slider2 .slider2__slides').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 854,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 685,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });


  $('#screen_n-one-reviews .screen_n-one__slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('#screen_n-one-videos .screen_n-one__slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('#screen_n-one-gallery .screen_n-one__slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('#partners-slider .slider2__slides').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* ПЕРЕНЕСТИ */
  $('.screen_posts .items').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          appendArrows: $('.screen_posts .items'),
          autoplay: true,
          autoplaySpeed: 5000,
          adaptiveHeight: true
        }
      }
    ]
  });
  /* END ПЕРЕНЕСТИ */

  $('.screen_how_we_work .items').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
          infinite: true,
          arrows: false,
          dots: true,
          appendDots: $('.screen_how_we_work .items'),
          adaptiveHeight: true
        }
      }
    ]
  });

  // скролл к якорю service-features
  $(function(){
    $('a[href^="#screen_features"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
      return false;
    });
  });

  // скролл наверх
    $('a[href^="#page_wr"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: '0px'});
      return false;
    });

  // инициализация fancybox
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto',
  });

  $('.burger').click(function(){
    if ($(this).hasClass('burger--active')) {
      $(this).removeClass('burger--active');
      $('.header .menu').removeClass('active');
      $('.header .sub-menu').removeClass('hover');
    } else {
      $(this).addClass('burger--active');
      $('.header .menu').addClass('active');
      $('#menu-item-2310 .sub-menu').addClass('hover');
      $('#menu-item-2310').addClass('active');
    }
  });

  $('.page_wr').click(function(){
    $('.burger').removeClass('burger--active');
    $('.header .menu').removeClass('active');

    /* Перенести */
    $('.header .wr .menu ul').removeClass('hover');
    $('.header .wr .menu > li').removeClass('active');

  });

  $(document).keydown(function(eventObject){
    if( eventObject.which == 27 ){
      $('.burger').removeClass('burger--active');
      $('.header .menu').removeClass('active');
      $('.header .sub-menu').removeClass('hover');
      $('.modal').fadeOut();
      $('.page_wr').removeClass('blur-it');
      $('.header').removeClass('blur-it');
      $('body').removeClass('lock');
    };
  });

/* ПЕРЕНЕСТИ!!! */
/* Закрытие модального окна при клике по пустому месту */
  $(document).mouseup(function (e) {
    var container = $(".modal .screen_form_kp");
    if (container.has(e.target).length === 0){
        $('.modal').fadeOut();
        $('.page_wr').removeClass('blur-it');
        $('.header').removeClass('blur-it');
        $('body').removeClass('lock');
    }
  });
  /* END ПЕРЕНЕСТИ */

  $('a[href="#modal-kp"]').click(function(event){
    event.preventDefault();
    $('#modal-kp').show();
    $('.screen_form_kp').fadeIn();
    $('.page_wr').addClass('blur-it');
    $('.header').addClass('blur-it');
    $('body').addClass('lock');
  });

  function closeModal(el) {
    $(el).closest('.modal').fadeOut();
    $(el).closest('.screen').fadeOut();
    $('.page_wr').removeClass('blur-it');
    $('.header').removeClass('blur-it');
    $('body').removeClass('lock');
  }

  $(".modal-close").click(function() {
    closeModal(this);
  });



  // var myMap;

  // // Дождёмся загрузки API и готовности DOM.
  // ymaps.ready(init);

  // function init () {
  //     // Создание экземпляра карты и его привязка к контейнеру с
  //     // заданным id ("map").
  //     myMap = new ymaps.Map('screen_map__map', {
  //         // При инициализации карты обязательно нужно указать
  //         // её центр и коэффициент масштабирования.
  //         center: [44.946577, 34.100030],
  //         zoom: 15
  //     }, {
  //         searchControlProvider: 'yandex#search'
  //     });

  //     // Создаём макет содержимого.
  //       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //           '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //       ),

  //       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //           hintContent: 'Sheer',
  //           balloonContent: 'Sheer'
  //       }, {
  //           // Опции.
  //           // Необходимо указать данный тип макета.
  //           iconLayout: 'default#image',
  //           // Своё изображение иконки метки.
  //           iconImageHref: 'imgs/contacts/icon-map-mark.svg',
  //           // Размеры метки.
  //           iconImageSize: [39, 62],
  //           // Смещение левого верхнего угла иконки относительно
  //           // её "ножки" (точки привязки).
  //           iconImageOffset: [-5, -46]
  //       }),

  //       myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
  //           hintContent: 'Собственный значок метки с контентом',
  //           balloonContent: 'А эта — новогодняя',
  //           iconContent: '12'
  //       }, {
  //           // Опции.
  //           // Необходимо указать данный тип макета.
  //           iconLayout: 'default#imageWithContent',
  //           // Своё изображение иконки метки.
  //           iconImageHref: 'images/ball.png',
  //           // Размеры метки.
  //           iconImageSize: [48, 48],
  //           // Смещение левого верхнего угла иконки относительно
  //           // её "ножки" (точки привязки).
  //           iconImageOffset: [-24, -24],
  //           // Смещение слоя с содержимым относительно слоя с картинкой.
  //           iconContentOffset: [15, 15],
  //           // Макет содержимого.
  //           iconContentLayout: MyIconContentLayout
  //       });

  //   myMap.geoObjects
  //       .add(myPlacemark)
  //       .add(myPlacemarkWithContent);

  //   myMap.behaviors.disable('scrollZoom');

  // }

  /* Анимация чисел */
  if ($('body').hasClass('home')) {
    var show = true;
    var countbox = ".home .screen_studio";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.home .screen_studio .item .title span').css('opacity', '1');
            $('.home .screen_studio .item .title span').spincrement({
                thousandSeparator: " ",
                duration: 2400
            });
            show = false;
        }
    });
  }

  $('.show-ta').click(function(){
    $(this).siblings('span').slideToggle();

    /* ПЕРЕНЕСТИ!!! */
    $(this).toggleClass('active');
  });

  /* ПЕРЕНЕСТИ!!! */
  // фиксированный сайдбар "Решить задачу" в Блоге
  $(document).ready(function() {
    if (document.querySelector(".read-also") !== null && document.querySelector(".widget__top") !== null) {
      $(window).on("scroll", function() {
          var fromTop = $(document).scrollTop();
          var toTop = $('.read-also').offset().top - 600;
          $(".widget__top").toggleClass("fixed", (fromTop > 682 && fromTop < toTop));
      });
    }
  });
  /* END ПЕРЕНЕСТИ */

  $(document).ready(function() {
    if (document.querySelector(".category-blog") !== null && document.querySelector(".widget__top") !== null) {
      $(window).on("scroll", function() {
          var fromTop = $(document).scrollTop();
          var toTop = $('.screen_lead_magnet').offset().top - 600;
          $(".widget__top").toggleClass("fixed", (fromTop > 682 && fromTop < toTop));
      });
    }
  });



})(jQuery);
