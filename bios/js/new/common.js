(function($){

  /* Инициализация wow */
  wow = new WOW({mobile: false})

  wow.init();
  /* Инициализация красивых select'ов */
  $('select').niceSelect();
  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();
  // инициализация fancybox
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto',
  });

  if (window.matchMedia('(max-width: 768px)').matches) {
    $(".tabs__item").hide();
    $(".tabs__nav li").removeClass("current");
  }

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
      return false;
    });
  });

  /* Плавный скролл "вверх" */
  $('a[href^="#page_wr"]').click(function(){
    var _href = $(this).attr('href');
    $('html, body').animate({scrollTop: '0px'});
    return false;
  });

  $('.burger').click(function() {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
    $('body').toggleClass('disabled');
  });

  $('.date input').datepicker();

  $(".tabs__nav a").click(function(event) {
    event.preventDefault();
    $(this).parent().siblings().removeClass("current");

    if ($(this).parent().hasClass('current')) {
      $(this).parent().removeClass("current");
      $(".tabs__item").fadeOut();
      $('.tabs').removeClass('visible');
    } else {
      $(this).parent().addClass("current");
      var tab = $(this).attr("href");
      $(".tabs__item").not(tab).hide();
      $(tab).fadeIn();
      $('.tabs').addClass('visible');
      if (window.matchMedia('(max-width: 768px)').matches) {
        $('html, body').animate({scrollTop: $(tab).offset().top - 80 +'px'});
      }
    }
  });

  $(".services__nav--tabs a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".services__tab").not(tab).hide();
    $(tab).fadeIn();
    if (document.body.clientWidth <= 500) {
      $('html, body').animate({scrollTop: $(tab).offset().top - 20 +'px'});
    }
  });

  $(".articles__nav a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    var link = "#link-" + tab.replace("#", "");
    $(".articles__tab").not(tab).removeClass("current");
    ;
    $(".scr_articles .link__wrap .link").not(link).removeClass("current");
    $(tab).addClass("current");
    $(link).addClass("current");
  });

  $(window).resize(function(){
    if (window.matchMedia('(min-width: 500.01px)').matches) {
      $('.services__nav').css('display','flex');
    } else {
      $('.services__nav').hide();
    }
  });

  $('.choose').click(function() {
    $('.services__nav').slideToggle();
  });

  // фиксированные шапка и табы
  $(document).ready(function() {
    $(window).on("scroll", function() {
      var fromTop = $(document).scrollTop();
      if ($(".burger").css('display') == 'block') {
        $(".burger").toggleClass("fixed", (fromTop > 682));
      } else {
        $(".menu").toggleClass("fixed", (fromTop > 682));
      }
      if (!($(".container--tabs").hasClass("fixed")) && fromTop > 682) {
        $(".tabs__item").hide();
        $(".tabs").removeClass('visible');
        $(".tabs__nav li").removeClass("current");
      }
      if (!(window.matchMedia('(max-width: 500px)').matches)) {
        $(".container--tabs").toggleClass("fixed", (fromTop > 682));
      }
      if ($('body').hasClass('main-page') && fromTop <= 682 && !($(".tabs__nav li").hasClass('current')) && !(window.matchMedia('(max-width: 768px)').matches)) {
        $(".tabs__nav li:nth-of-type(2)").addClass("current");
        $("#tab-1").show();
      }
    });
  });

  // эффект background-size: cover для img
  function imgCover(selector) {
    selector.each(function(i,el) {
      if (el.height > el.width) {
        $(el).css('width','100%');
        $(el).css('height','auto');
      } else {
        $(el).css('height','100%');
        $(el).css('width','auto');
      }
    });
  }

  imgCover($('.reviews__img img'));

  /* Открытие поля search для мобильной версии */
  $('.search-form .open-search').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('close-search');
    $(this).siblings('.search-wrap').toggleClass('active');
  });

  $('.nice-select .option').click(function() {
    if ($(this).attr('data-value') != "") {
      $(this).parent().siblings('.current').addClass('active');
    } else {
      $(this).parent().siblings('.current').removeClass('active');
    }
  });

  /* Открытие / закрытие модалок (кроме карты) */
  $('a.open-modal').click(function(event){
    event.preventDefault();
    var _href = $(this).attr('href');
    $(_href).show();
    $(_href + ' .modal__content').fadeIn();
    $('.page_wr').addClass('blur-it');
  });

  function closeModal() {
    $('.modal').fadeOut();
    $('.modal__content').fadeOut();
    $('.page_wr').removeClass('blur-it');
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

  $("a.link--map").fancybox({
    "padding": 0, // отступ контента от краев окна
    "width" : 2500, // ширина окна, px (425px - по умолчанию)
    "height" : 550, // высота окна, px(355px - по умолчанию)
    "overlayOpacity" : 0.8, // Прозрачность затенения (0.3 по умолчанию)
    "hideOnContentClick" :false, // Если TRUE закрывает окно по клику по любой его точке (кроме элементов навигации). Поумолчанию TRUE
    "centerOnScroll" : false, // Если TRUE окно центрируется на экране, когда пользователь прокручивает страницу
    "margin": 0,
    "autoSize": false
  });

  $('#specialists__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 890,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
  });

  $('#reviews__slider .reviews__slides').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    appendDots: $('#reviews__slider .reviews__slider-nav'),
    appendArrows: $('#reviews__slider .reviews__slider-nav'),
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          autoplay: false
        }
      }
    ]
  });

  // Выравнивание высоты слайдов
  // bp - брейкпоинт. Когда становится один слайд, не нужна одинаковая высота
  function setPositionSlick(slider,bp) {
    $(slider).on('setPosition', function () {
      if (window.matchMedia('(min-width: ' + bp + ')').matches) {
        $(this).find('.slick-slide').height('auto');
        var slickTrack = $(this).find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
      }
    });
  }
  setPositionSlick('#specialists__slider','450px');
  setPositionSlick('#reviews__slider .reviews__slides','620px');


  /* На мобильном меню в футере открывается по клику на h3 */
  $('.footer__menu').click(function(){
    var elem = $(this);
    if (document.body.clientWidth <= 700) {
      $('.footer__menu-list').each(function(i,e) {
        if (elem.has(e).length === 0) {
          $(e).slideUp();
        }
      });
      elem.find('.footer__menu-list').slideToggle();
    }
  });

  /* Делаем картинку лого инлайновой */
  // $('a.logo img').each(function(){
  //   var $img = $(this);
  //   var imgClass = $img.attr('class');
  //   var imgURL = $img.attr('src');
  //   $.get(imgURL, function(data) {
  //     var $svg = $(data).find('svg');
  //     if(typeof imgClass !== 'undefined') {
  //       $svg = $svg.attr('class', imgClass+' replaced-svg');
  //     }
  //     $svg = $svg.removeAttr('xmlns:a');
  //     if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
  //       $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
  //     }
  //     $img.replaceWith($svg);
  //   }, 'xml');
  // });

  // function mapActivate(xID) {
  //   if (document.querySelector("#" + xID + "") !== null) {

  //     /* Карта */
  //     var myMap;

  //     // Дождёмся загрузки API и готовности DOM.
  //     ymaps.ready(init);

  //     function init () {
  //         // Создание экземпляра карты и его привязка к контейнеру с
  //         // заданным id ("map").
  //         myMap = new ymaps.Map(xID, {
  //             // При инициализации карты обязательно нужно указать
  //             // её центр и коэффициент масштабирования.
  //             center: [44.604014, 33.505597],
  //             zoom: 16
  //         }, {
  //             searchControlProvider: 'yandex#search'
  //         });

  //         // Создаём макет содержимого.
  //           MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //               '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //           ),

  //           myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //               hintContent: 'ул. Пожарова 20/2',
  //               balloonContent: 'ТехноТерм'
  //           }, {
  //               // Опции.
  //               // Необходимо указать данный тип макета.
  //               iconLayout: 'default#image',
  //               // Своё изображение иконки метки.
  //               iconImageHref: 'img/favicon/fav192.png',
  //               // Размеры метки.
  //               iconImageSize: [50, 50],
  //               // Смещение левого верхнего угла иконки относительно
  //               // её "ножки" (точки привязки).
  //               iconImageOffset: [-15, -66]
  //           }),

  //           myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
  //               hintContent: '',
  //               balloonContent: '',
  //               iconContent: ''
  //           }, {
  //               // Опции.
  //               // Необходимо указать данный тип макета.
  //               iconLayout: 'default#imageWithContent',
  //               // Своё изображение иконки метки.
  //               // iconImageHref: 'images/ball.png',
  //               // Размеры метки.
  //               iconImageSize: [48, 48],
  //               // Смещение левого верхнего угла иконки относительно
  //               // её "ножки" (точки привязки).
  //               iconImageOffset: [-24, -24],
  //               // Смещение слоя с содержимым относительно слоя с картинкой.
  //               iconContentOffset: [15, 15],
  //               // Макет содержимого.
  //               iconContentLayout: MyIconContentLayout
  //           });

  //       myMap.geoObjects
  //           .add(myPlacemark)
  //           .add(myPlacemarkWithContent);

  //       myMap.behaviors.disable('scrollZoom');

  //     }
  //   }
  // }

  // mapActivate('screen_map');

})(jQuery);
