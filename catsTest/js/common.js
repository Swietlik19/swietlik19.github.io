(function($){

  var _alert = $('.cats__alert');

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain]'), {watchMQ: true});

  $('.burger').click(function() {
    $('.header__menu').toggleClass('active');
  });

  $('.menu > li > a').hover(function() {
    var _width = $(this).outerWidth();
    var _index = $(this).parent().index();
    var _margin = + $('.menu > li').css('marginRight').replace('px','');

    var _widthTo = 0;
    for (i = 0; i < _index; i++) {
      _widthTo += $($('.menu > li')[i]).find('a').outerWidth();
    }
    _widthTo += _margin * _index;
    _widthTo += 'px)';
    $('.header__menu .decor-line').css('width',_width + 'px');
    $('.header__menu .decor-line').css('opacity','1');
    $('.header__menu .decor-line').css('transform','translateX(' + _widthTo);
  });

  $('.menu > li > a').mouseleave(function() {
    $('.header__menu .decor-line').css('opacity','0');
  });

  // кнопка "наверх"
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".to-top").toggleClass("fixed", (fromTop > 100));
  });

  $('.to-top').click(function(event){
    event.preventDefault;
    var _href = $(this).attr('href');
    $('html, body').animate({scrollTop: '0px'});
    return false;
  });

  /* Чтобы при нажатии мышью на картинки, они не тянулись за курсором */
  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  function addEventListenerToLike () {
    $('.cats__like').click(function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        _alert.text('Убрано из избранного');
      } else {
        $(this).addClass('active');
        _alert.text('Добавлено в избранное');
      }
      _alert.fadeIn();
      _alert.css('display','flex');
      setTimeout(function() {$('.cats__alert').fadeOut('slow');}, 4000)
    });
  }

  addEventListenerToLike();


  $('.js-sort').click(function() {
    var _sortType = $(this).attr('data-sort');
    var _sortItems = $('.cats__list > li');
    if (_sortType == 'price') {
      _sortItems.sort(function(a, b) {
        var _price1 = + $(a).find('.cats__price').text().replace('руб.','').replace(' ','');
        var _price2 = + $(b).find('.cats__price').text().replace('руб.','').replace(' ','');
        if (_price1 < _price2)
          return -1;
        if (_price1 > _price2)
          return 1;
        return 0;
      });
    } else {
      _sortItems.sort(function(a, b) {
        var _type1 = $(a).find('.cats__text--age').attr('data-type');
        var _count1 = + $(a).find('.cats__text--age').attr('data-count');
        var _type2 = $(b).find('.cats__text--age').attr('data-type');
        var _count2 = + $(b).find('.cats__text--age').attr('data-count');

        if ( (_type1 == 'мес' ) && (_type2 == 'год' ) ) {
          return -1;
        } else if ( (_type1 == 'год' ) && (_type2 == 'мес' ) ) {
          return 1;
        } else {
          if ( _count1 < _count2 ) {
            return -1;
          } else {
            return 1;
          }
        }

        return 0;
      });
    }
    $('.cats__list').empty();
    $('.cats__list').append(_sortItems);
    lazyLoad();
    addEventListenerToLike();
  });

})(jQuery);
