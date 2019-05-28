(function($){

	$('#scr1_slider .slider1__slides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
	  fade: true,
	  cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    appendDots: $('#scr1_slider .slider1__dots'),
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $('#partners__slider .slider1__slides').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 5,          
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 4,          
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 3,          
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,          
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      }
    ]
  });

  $('#follow__slider .follow__slides').slick({    
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          appendDots: $('#follow__slider .follow__dots'),
          autoplay: true,
          autoplaySpeed: 5000
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          appendDots: $('#follow__slider .follow__dots'),
          autoplay: true,
          autoplaySpeed: 5000
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          appendDots: $('#follow__slider .follow__dots'),
          autoplay: true,
          autoplaySpeed: 5000
        }
      }
    ]
  });

  $('#choose__slider .slider2__slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      }
      ,{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  function equalHeight() {
    var slides = $('#choose__slider .slick-slide');
    var stHeight = 0;
    slides.each(function(i, el) {
      if ($(el).height() > stHeight) {
        stHeight = $(el).height();
      }
    });

    $('#choose__slider .slick-slide').css('minHeight',stHeight + 'px' );
    $('#choose__slider .choose__item').css('minHeight',stHeight + 'px' );
  }

  equalHeight();

  $(window).resize(function() {
    equalHeight();
  });
  
	
})(jQuery);