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

  /* По наведению появляется подменю */
  $('.menu__item--with-sub').hover(
    function(){
      if ($(this).find('.menu__sub').css('position') == 'absolute') {
        $(this).siblings('.menu__item--with-sub').removeClass('hover');    
        $(this).addClass('hover');
      }
    },
    function(){      
      if ($(this).find('.menu__sub').css('position') == 'absolute') {
        $(this).removeClass('hover');
      }
    }
  );

  $('.menu__item--with-sub .menu__link').click(function(event) {
    event.preventDefault();
    if ($(this).parents('.menu__item--with-sub').find('.menu__sub').css('position') == 'static') {
      $(this).parents('.menu__item--with-sub').siblings('.menu__item--with-sub').removeClass('hover');   
      $(this).parents('.menu__item--with-sub').toggleClass('hover');
    }
  });

  $('.date input').datepicker({
    timepicker: true
  });

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

  $(".branch__nav--tabs a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".branch__tab").not(tab).hide();
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
  imgCover($('.doctor__img img'));

  $(window).resize(function(){
    imgCover($('.doctor__img img'));
  });

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
    $('body').addClass('disabled');
  });

  function closeModal() {
    $('.modal').fadeOut();
    $('.modal__content').fadeOut();
    $('.page_wr').removeClass('blur-it');
    $('body').removeClass('disabled');
  }

  $(document).mouseup(function (e) {
    var container = $(".modal .modal__content");
    if (container.has(e.target).length === 0 && $(e.target).parents('.datepicker').length == 0){
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

  $('.menu-open').click(function(){
    $(this).siblings('.menu2__list').slideToggle();
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

  $('#doctor__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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

  $('.text-input--required input, .text-input--required textarea').focus(function(){
    $(this).parent('.text-input--required').addClass('onfocus');
  });
  $('.text-input--required input, .text-input--required textarea').blur(function(){
    $(this).parent('.text-input--required').removeClass('onfocus');
  });

  /* "Открыть" на странице "вопрос-ответ" */
  $('.questions .questions__item .top').click(function() {    
    $(this).siblings('.hidden').slideToggle();
    $(this).find('.open').toggleClass('active');

    $(this).parents('.questions__item').siblings('.questions__item').find('.hidden').slideUp();
    $(this).parents('.questions__item').siblings('.questions__item').find('.open').removeClass('active');
    
  });

  /* "Открыть" на странице "мед. оборудование" */
  $('.equipment .show-more').click(function() {
    $(this).toggleClass('active');
    $(this).parents('.equipment__item').next('.equipment__more').toggleClass('active'); 

    $(this).parents('.equipment__item').siblings('.equipment__item').next('.equipment__more').removeClass('active'); 
    $(this).parents('.equipment__item').siblings('.equipment__item').find('.show-more').removeClass('active');
  });

  $('.equipment__more').each(function(i){
    if (i % 2 != 0) {
      $(this).addClass('grey-bg');
    }
  });
  $('.equipment__item').each(function(i){
    if (i % 2 != 0) {
      $(this).addClass('grey-bg');
    }
  });

  $('.your-resume input').change(function() {
    var fileName = $(this).val();
    fileName = fileName.replace (/\\/g, '/').split ('/').pop ();
    $(this).parents('label').find('span').text(fileName);
  });

  $('.list1 .show-more').click(function() {
    $(this).toggleClass('active');
    $(this).parents('.list1__item').find('.list1__hidden').slideToggle();

    $(this).parents('.list1__item').siblings('.list1__item').find('.list1__hidden').slideUp();
    $(this).parents('.list1__item').siblings('.list1__item').find('.show-more').removeClass('active');
  });

  $('.serv__nav #serv-filter').change(function() {   
    var tab = $(this).val();
    $(".serv__list").not(tab).hide();
    $(tab).fadeIn();
  });

  /* При смене первого select в "анализы и диагностика" меняется набор значений во втором select */
  $('.analyses #analyses-filter').change(function() {
    var second = $('.analyses #analyses-filter2');
    second.find('option[data-my="default"]').prop('selected',true);
    second.find('option').prop('disabled',true);
    second.find('option[data-my="default"]').prop('disabled',false);
    second.find('option[data-my="' + $(this).val() + '"]').prop('disabled',false);

    $('.analyses #analyses-filter2').niceSelect('update');
  });
 
  function mapActivate(xID,coords) {
    if (document.querySelector("#" + xID + "") !== null) {

      /* Карта */
      var myMap;

      // Дождёмся загрузки API и готовности DOM.
      ymaps.ready(init);

      function init () {
          // Создание экземпляра карты и его привязка к контейнеру с
          // заданным id ("map").
          myMap = new ymaps.Map(xID, {
              // При инициализации карты обязательно нужно указать
              // её центр и коэффициент масштабирования.
              center: coords,
              zoom: 16
          }, {
              searchControlProvider: 'yandex#search'
          });

          // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: '',
                balloonContent: 'Биос'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/pin.svg',
                // Размеры метки.
                iconImageSize: [43, 60],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-15, -66]
            }),

            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                hintContent: '',
                balloonContent: '',
                iconContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                // iconImageHref: 'images/ball.png',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);

        myMap.behaviors.disable('scrollZoom');

      }
    }
  }

  /* ID контейнера карты, координаты */
  mapActivate('screen_map_inner',[50.290168, 57.141027]);

})(jQuery);
