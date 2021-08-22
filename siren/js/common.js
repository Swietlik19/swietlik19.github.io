(function($){

  /* Needed for IE and some other browsers for them to undestand svg sprites */
  svg4everybody();

  /* object-fit polyfill for IE */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain]'), {watchMQ: true});

})(jQuery);

(function() {
	'use strict';

  // "back to the top" button

  let goTopBtn = document.querySelector('.to-top');

	function trackScroll() {
		let scrolled = window.pageYOffset;
		let coords = document.documentElement.clientHeight;

		if (scrolled > coords) {
			goTopBtn.classList.add('fixed');
		}
		if (scrolled < coords) {
			goTopBtn.classList.remove('fixed');
		}
	}

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -80);
			setTimeout(backToTop, 0);
		}
	}

	window.addEventListener('scroll', trackScroll);
	goTopBtn.addEventListener('click', backToTop);
  
})();
