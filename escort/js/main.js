/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _resources_plugins_fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/plugins/@fancyapps/ui */ "./src/resources/plugins/@fancyapps/ui/dist/index.esm.js");




// Подключение свайпера
const girlsSlider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('#girls-slider', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination],
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: {
    nextEl: '.mainSlider__navigation .js--swiperButtonNext',
    prevEl: '.mainSlider__navigation .js--swiperButtonPrev'
  },
  pagination: {
    el: '.mainSlider__navigation .js--swiperPagination',
    clickable: true
  }
});

// Открытие фильтров
const sortOpens = document.querySelectorAll('.js--sortOpen');
sortOpens.forEach(el => {
  el.addEventListener('click', event => {
    const clickedElement = event.currentTarget;
    sortOpens.forEach(el => {
      if (el !== clickedElement) {
        el.classList.remove('form__input--opened');
      }
    });
    clickedElement.classList.toggle('form__input--opened');
  });
});

// Открытие фильтров в header
const sortMenuOpens = document.querySelectorAll('.js--sortMenuOpen');
sortMenuOpens.forEach(el => {
  el.addEventListener('click', event => {
    const clickedElement = event.currentTarget;
    sortMenuOpens.forEach(el => {
      if (el !== clickedElement) {
        el.classList.remove('sort__btn--opened');
      }
    });
    clickedElement.classList.toggle('sort__btn--opened');
  });
});

// Закрытие фильтра
const filterCloses = document.querySelectorAll('.js--filterClose');
const filters = document.querySelectorAll('.js--filter');
filterCloses.forEach(el => {
  el.addEventListener('click', event => {
    filters.forEach(el => {
      el.classList.toggle('sort__btn--opened');
    });
  });
});

// Fancybox
_resources_plugins_fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__.Fancybox.bind('[data-fancybox="gallery"]', {
  hideScrollbar: false
});

// More button
const moreBtns = document.querySelectorAll('.js--moreBtn');
moreBtns.forEach(el => {
  el.addEventListener('click', event => {
    const moreBtn = event.currentTarget;
    const listToExpand = moreBtn.previousElementSibling;
    moreBtn.textContent = moreBtn.textContent === '+ View more' ? '- View less' : '+ View more';
    listToExpand.classList.toggle('sort__list--hidden');
  });
});

/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ (() => {

(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  burger?.addEventListener('click', e => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('header__menu--opened');
    if (menu?.classList.contains('header__menu--opened')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
    }
  });
})();

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileCheck: () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

/***/ }),

/***/ "./src/resources/plugins/@fancyapps/ui/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./src/resources/plugins/@fancyapps/ui/dist/index.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ K),
/* harmony export */   Fancybox: () => (/* binding */ ce),
/* harmony export */   Panzoom: () => (/* binding */ R)
/* harmony export */ });
const t = function (t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e4;
    return t = parseFloat(t + "") || 0, Math.round((t + Number.EPSILON) * e) / e;
  },
  e = function (t) {
    if (!(t && t instanceof Element && t.offsetParent)) return !1;
    const e = t.scrollHeight > t.clientHeight,
      i = window.getComputedStyle(t).overflowY,
      n = -1 !== i.indexOf("hidden"),
      s = -1 !== i.indexOf("visible");
    return e && !n && !s;
  },
  i = function (t) {
    let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
    return !(!t || t === document.body || n && t === n) && (e(t) ? t : i(t.parentElement, n));
  },
  n = function (t) {
    var e = new DOMParser().parseFromString(t, "text/html").body;
    if (e.childElementCount > 1) {
      for (var i = document.createElement("div"); e.firstChild;) i.appendChild(e.firstChild);
      return i;
    }
    return e.firstChild;
  },
  s = t => `${t || ""}`.split(" ").filter(t => !!t),
  o = (t, e, i) => {
    t && s(e).forEach(e => {
      t.classList.toggle(e, i || !1);
    });
  };
class a {
  constructor(t) {
    Object.defineProperty(this, "pageX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "pageY", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "clientX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "clientY", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "id", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "time", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "nativePointer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.nativePointer = t, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY, this.id = self.Touch && t instanceof Touch ? t.identifier : -1, this.time = Date.now();
  }
}
const r = {
  passive: !1
};
class l {
  constructor(t, _ref) {
    let {
      start: e = () => !0,
      move: i = () => {},
      end: n = () => {}
    } = _ref;
    Object.defineProperty(this, "element", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "startCallback", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "moveCallback", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "endCallback", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "currentPointers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "startPointers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), this.element = t, this.startCallback = e, this.moveCallback = i, this.endCallback = n;
    for (const t of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"]) this[t] = this[t].bind(this);
    this.element.addEventListener("mousedown", this.onPointerStart, r), this.element.addEventListener("touchstart", this.onTouchStart, r), this.element.addEventListener("touchmove", this.onMove, r), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd);
  }
  onPointerStart(t) {
    if (!t.buttons || 0 !== t.button) return;
    const e = new a(t);
    this.currentPointers.some(t => t.id === e.id) || this.triggerPointerStart(e, t) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
  }
  onTouchStart(t) {
    for (const e of Array.from(t.changedTouches || [])) this.triggerPointerStart(new a(e), t);
    window.addEventListener("blur", this.onWindowBlur);
  }
  onMove(t) {
    const e = this.currentPointers.slice(),
      i = "changedTouches" in t ? Array.from(t.changedTouches || []).map(t => new a(t)) : [new a(t)],
      n = [];
    for (const t of i) {
      const e = this.currentPointers.findIndex(e => e.id === t.id);
      e < 0 || (n.push(t), this.currentPointers[e] = t);
    }
    n.length && this.moveCallback(t, this.currentPointers.slice(), e);
  }
  onPointerEnd(t) {
    t.buttons > 0 && 0 !== t.button || (this.triggerPointerEnd(t, new a(t)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
  }
  onTouchEnd(t) {
    for (const e of Array.from(t.changedTouches || [])) this.triggerPointerEnd(t, new a(e));
  }
  triggerPointerStart(t, e) {
    return !!this.startCallback(e, t, this.currentPointers.slice()) && (this.currentPointers.push(t), this.startPointers.push(t), !0);
  }
  triggerPointerEnd(t, e) {
    const i = this.currentPointers.findIndex(t => t.id === e.id);
    i < 0 || (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this.endCallback(t, e, this.currentPointers.slice()));
  }
  onWindowBlur() {
    this.clear();
  }
  clear() {
    for (; this.currentPointers.length;) {
      const t = this.currentPointers[this.currentPointers.length - 1];
      this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(new Event("touchend", {
        bubbles: !0,
        cancelable: !0,
        clientX: t.clientX,
        clientY: t.clientY
      }), t, this.currentPointers.slice());
    }
  }
  stop() {
    this.element.removeEventListener("mousedown", this.onPointerStart, r), this.element.removeEventListener("touchstart", this.onTouchStart, r), this.element.removeEventListener("touchmove", this.onMove, r), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
  }
}
function c(t, e) {
  return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
}
function h(t, e) {
  return e ? {
    clientX: (t.clientX + e.clientX) / 2,
    clientY: (t.clientY + e.clientY) / 2
  } : t;
}
const d = t => "object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t),
  u = function (t) {
    const i = arguments.length <= 1 ? 0 : arguments.length - 1;
    for (let n = 0; n < i; n++) {
      const i = (n + 1 < 1 || arguments.length <= n + 1 ? undefined : arguments[n + 1]) || {};
      Object.entries(i).forEach(_ref2 => {
        let [e, i] = _ref2;
        const n = Array.isArray(i) ? [] : {};
        t[e] || Object.assign(t, {
          [e]: n
        }), d(i) ? Object.assign(t[e], u(n, i)) : Array.isArray(i) ? Object.assign(t, {
          [e]: [...i]
        }) : Object.assign(t, {
          [e]: i
        });
      });
    }
    return t;
  },
  f = function (t, e) {
    return t.split(".").reduce((t, e) => "object" == typeof t ? t[e] : void 0, e);
  };
class p {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "events", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: new Map()
    }), this.setOptions(t);
    for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) t.startsWith("on") && "function" == typeof this[t] && (this[t] = this[t].bind(this));
  }
  setOptions(t) {
    this.options = t ? u({}, this.constructor.defaults, t) : {};
    for (const [t, e] of Object.entries(this.option("on") || {})) this.on(t, e);
  }
  option(t) {
    let i = f(t, this.options);
    for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      e[_key - 1] = arguments[_key];
    }
    return i && "function" == typeof i && (i = i.call(this, this, ...e)), i;
  }
  optionFor(t, e, i) {
    let s = f(e, t);
    var o;
    for (var _len2 = arguments.length, n = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      n[_key2 - 3] = arguments[_key2];
    }
    "string" != typeof (o = s) || isNaN(o) || isNaN(parseFloat(o)) || (s = parseFloat(s)), "true" === s && (s = !0), "false" === s && (s = !1), s && "function" == typeof s && (s = s.call(this, this, t, ...n));
    let a = f(e, this.options);
    return a && "function" == typeof a ? s = a.call(this, this, t, ...n, s) : void 0 === s && (s = a), void 0 === s ? i : s;
  }
  cn(t) {
    const e = this.options.classes;
    return e && e[t] || "";
  }
  localize(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t, e, i) => {
      let n = "";
      return i ? n = this.option(`${e[0] + e.toLowerCase().substring(1)}.l10n.${i}`) : e && (n = this.option(`l10n.${e}`)), n || (n = t), n;
    });
    for (let i = 0; i < e.length; i++) t = t.split(e[i][0]).join(e[i][1]);
    return t = t.replace(/\{\{(.*?)\}\}/g, (t, e) => e);
  }
  on(t, e) {
    let i = [];
    "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), this.events || (this.events = new Map()), i.forEach(t => {
      let i = this.events.get(t);
      i || (this.events.set(t, []), i = []), i.includes(e) || i.push(e), this.events.set(t, i);
    });
  }
  off(t, e) {
    let i = [];
    "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), i.forEach(t => {
      const i = this.events.get(t);
      if (Array.isArray(i)) {
        const t = i.indexOf(e);
        t > -1 && i.splice(t, 1);
      }
    });
  }
  emit(t) {
    for (var _len3 = arguments.length, e = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      e[_key3 - 1] = arguments[_key3];
    }
    [...(this.events.get(t) || [])].forEach(t => t(this, ...e)), "*" !== t && this.emit("*", t, ...e);
  }
}
Object.defineProperty(p, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "5.0.28"
}), Object.defineProperty(p, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {}
});
class g extends p {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super(t), Object.defineProperty(this, "plugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    });
  }
  attachPlugins() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const e = new Map();
    for (const [i, n] of Object.entries(t)) {
      const t = this.option(i),
        s = this.plugins[i];
      s || !1 === t ? s && !1 === t && (s.detach(), delete this.plugins[i]) : e.set(i, new n(this, t || {}));
    }
    for (const [t, i] of e) this.plugins[t] = i, i.attach();
  }
  detachPlugins(t) {
    t = t || Object.keys(this.plugins);
    for (const e of t) {
      const t = this.plugins[e];
      t && t.detach(), delete this.plugins[e];
    }
    return this.emit("detachPlugins"), this;
  }
}
var m;
!function (t) {
  t[t.Init = 0] = "Init", t[t.Error = 1] = "Error", t[t.Ready = 2] = "Ready", t[t.Panning = 3] = "Panning", t[t.Mousemove = 4] = "Mousemove", t[t.Destroy = 5] = "Destroy";
}(m || (m = {}));
const b = ["a", "b", "c", "d", "e", "f"],
  v = {
    PANUP: "Move up",
    PANDOWN: "Move down",
    PANLEFT: "Move left",
    PANRIGHT: "Move right",
    ZOOMIN: "Zoom in",
    ZOOMOUT: "Zoom out",
    TOGGLEZOOM: "Toggle zoom level",
    TOGGLE1TO1: "Toggle zoom level",
    ITERATEZOOM: "Toggle zoom level",
    ROTATECCW: "Rotate counterclockwise",
    ROTATECW: "Rotate clockwise",
    FLIPX: "Flip horizontally",
    FLIPY: "Flip vertically",
    FITX: "Fit horizontally",
    FITY: "Fit vertically",
    RESET: "Reset",
    TOGGLEFS: "Toggle fullscreen"
  },
  y = {
    content: null,
    width: "auto",
    height: "auto",
    panMode: "drag",
    touch: !0,
    dragMinThreshold: 3,
    lockAxis: !1,
    mouseMoveFactor: 1,
    mouseMoveFriction: .12,
    zoom: !0,
    pinchToZoom: !0,
    panOnlyZoomed: "auto",
    minScale: 1,
    maxScale: 2,
    friction: .25,
    dragFriction: .35,
    decelFriction: .05,
    click: "toggleZoom",
    dblClick: !1,
    wheel: "zoom",
    wheelLimit: 7,
    spinner: !0,
    bounds: "auto",
    infinite: !1,
    rubberband: !0,
    bounce: !0,
    maxVelocity: 75,
    transformParent: !1,
    classes: {
      content: "f-panzoom__content",
      isLoading: "is-loading",
      canZoomIn: "can-zoom_in",
      canZoomOut: "can-zoom_out",
      isDraggable: "is-draggable",
      isDragging: "is-dragging",
      inFullscreen: "in-fullscreen",
      htmlHasFullscreen: "with-panzoom-in-fullscreen"
    },
    l10n: v
  },
  w = '<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',
  x = t => t && null !== t && t instanceof Element && "nodeType" in t,
  E = (t, e) => {
    t && s(e).forEach(e => {
      t.classList.remove(e);
    });
  },
  S = (t, e) => {
    t && s(e).forEach(e => {
      t.classList.add(e);
    });
  },
  P = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  },
  C = 1e5,
  T = 1e4,
  M = "mousemove",
  O = "drag",
  A = "content";
let L = null,
  z = null;
class R extends g {
  get fits() {
    return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
  }
  get isTouchDevice() {
    return null === z && (z = window.matchMedia("(hover: none)").matches), z;
  }
  get isMobile() {
    return null === L && (L = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), L;
  }
  get panMode() {
    return this.options.panMode !== M || this.isTouchDevice ? O : M;
  }
  get panOnlyZoomed() {
    const t = this.options.panOnlyZoomed;
    return "auto" === t ? this.isTouchDevice : t;
  }
  get isInfinite() {
    return this.option("infinite");
  }
  get angle() {
    return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
  }
  get targetAngle() {
    return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
  }
  get scale() {
    const {
      a: t,
      b: e
    } = this.current;
    return Math.sqrt(t * t + e * e) || 1;
  }
  get targetScale() {
    const {
      a: t,
      b: e
    } = this.target;
    return Math.sqrt(t * t + e * e) || 1;
  }
  get minScale() {
    return this.option("minScale") || 1;
  }
  get fullScale() {
    const {
      contentRect: t
    } = this;
    return t.fullWidth / t.fitWidth || 1;
  }
  get maxScale() {
    return this.fullScale * (this.option("maxScale") || 1) || 1;
  }
  get coverScale() {
    const {
        containerRect: t,
        contentRect: e
      } = this,
      i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
    return Math.min(this.fullScale, i);
  }
  get isScaling() {
    return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
  }
  get isContentLoading() {
    const t = this.content;
    return !!(t && t instanceof HTMLImageElement) && !t.complete;
  }
  get isResting() {
    if (this.isBouncingX || this.isBouncingY) return !1;
    for (const t of b) {
      const e = "e" == t || "f" === t ? 1e-4 : 1e-5;
      if (Math.abs(this.target[t] - this.current[t]) > e) return !1;
    }
    return !(!this.ignoreBounds && !this.checkBounds().inBounds);
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var s;
    if (super(e), Object.defineProperty(this, "pointerTracker", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "resizeObserver", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "updateTimer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "clickTimer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "rAF", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "isTicking", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "ignoreBounds", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "isBouncingX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "isBouncingY", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "clicks", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "trackingPoints", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "pwt", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "cwd", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "pmme", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "friction", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "state", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: m.Init
    }), Object.defineProperty(this, "isDragging", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "container", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "content", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "spinner", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "containerRect", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0
      }
    }), Object.defineProperty(this, "contentRect", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        fullWidth: 0,
        fullHeight: 0,
        fitWidth: 0,
        fitHeight: 0,
        width: 0,
        height: 0
      }
    }), Object.defineProperty(this, "dragStart", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        time: 0
      }
    }), Object.defineProperty(this, "dragOffset", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        x: 0,
        y: 0,
        time: 0
      }
    }), Object.defineProperty(this, "current", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Object.assign({}, P)
    }), Object.defineProperty(this, "target", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Object.assign({}, P)
    }), Object.defineProperty(this, "velocity", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0
      }
    }), Object.defineProperty(this, "lockedAxis", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), !t) throw new Error("Container Element Not Found");
    this.container = t, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, R.Plugins), i)), this.emit("attachPlugins"), this.emit("init");
    const o = this.content;
    if (o.addEventListener("load", this.onLoad), o.addEventListener("error", this.onError), this.isContentLoading) {
      if (this.option("spinner")) {
        t.classList.add(this.cn("isLoading"));
        const e = n(w);
        !t.contains(o) || o.parentElement instanceof HTMLPictureElement ? this.spinner = t.appendChild(e) : this.spinner = (null === (s = o.parentElement) || void 0 === s ? void 0 : s.insertBefore(e, o)) || null;
      }
      this.emit("beforeLoad");
    } else queueMicrotask(() => {
      this.enable();
    });
  }
  initContent() {
    const {
        container: t
      } = this,
      e = this.cn(A);
    let i = this.option(A) || t.querySelector(`.${e}`);
    if (i || (i = t.querySelector("img,picture") || t.firstElementChild, i && S(i, e)), i instanceof HTMLPictureElement && (i = i.querySelector("img")), !i) throw new Error("No content found");
    this.content = i;
  }
  onLoad() {
    const {
      spinner: t,
      container: e,
      state: i
    } = this;
    t && (t.remove(), this.spinner = null), this.option("spinner") && e.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), i === m.Init ? this.enable() : this.updateMetrics();
  }
  onError() {
    this.state !== m.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = m.Error, this.emit("error"));
  }
  attachObserver() {
    var t;
    const e = () => {
      const {
        container: t,
        containerRect: e
      } = this;
      return Math.abs(e.width - t.getBoundingClientRect().width) > .1 || Math.abs(e.height - t.getBoundingClientRect().height) > .1;
    };
    this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver(() => {
      this.updateTimer || (e() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout(() => {
        e() && this.onResize(), this.updateTimer = null;
      }, 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null));
    })), null === (t = this.resizeObserver) || void 0 === t || t.observe(this.container);
  }
  detachObserver() {
    var t;
    null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
  }
  attachEvents() {
    const {
      container: t
    } = this;
    t.addEventListener("click", this.onClick, {
      passive: !1,
      capture: !1
    }), t.addEventListener("wheel", this.onWheel, {
      passive: !1
    }), this.pointerTracker = new l(t, {
      start: this.onPointerDown,
      move: this.onPointerMove,
      end: this.onPointerUp
    }), document.addEventListener(M, this.onMouseMove);
  }
  detachEvents() {
    var t;
    const {
      container: e
    } = this;
    e.removeEventListener("click", this.onClick, {
      passive: !1,
      capture: !1
    }), e.removeEventListener("wheel", this.onWheel, {
      passive: !1
    }), null === (t = this.pointerTracker) || void 0 === t || t.stop(), this.pointerTracker = null, document.removeEventListener(M, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, !0), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null);
  }
  animate() {
    this.setTargetForce();
    const t = this.friction,
      e = this.option("maxVelocity");
    for (const i of b) t ? (this.velocity[i] *= 1 - t, e && !this.isScaling && (this.velocity[i] = Math.max(Math.min(this.velocity[i], e), -1 * e)), this.current[i] += this.velocity[i]) : this.current[i] = this.target[i];
    this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(() => this.animate()) : this.stop("current");
  }
  setTargetForce() {
    for (const t of b) "e" === t && this.isBouncingX || "f" === t && this.isBouncingY || (this.velocity[t] = (1 / (1 - this.friction) - 1) * (this.target[t] - this.current[t]));
  }
  checkBounds() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const {
        current: i
      } = this,
      n = i.e + t,
      s = i.f + e,
      o = this.getBounds(),
      {
        x: a,
        y: r
      } = o,
      l = a.min,
      c = a.max,
      h = r.min,
      d = r.max;
    let u = 0,
      f = 0;
    return l !== 1 / 0 && n < l ? u = l - n : c !== 1 / 0 && n > c && (u = c - n), h !== 1 / 0 && s < h ? f = h - s : d !== 1 / 0 && s > d && (f = d - s), Math.abs(u) < 1e-4 && (u = 0), Math.abs(f) < 1e-4 && (f = 0), Object.assign(Object.assign({}, o), {
      xDiff: u,
      yDiff: f,
      inBounds: !u && !f
    });
  }
  clampTargetBounds() {
    const {
        target: t
      } = this,
      {
        x: e,
        y: i
      } = this.getBounds();
    e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)), i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
  }
  calculateContentDim() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.current;
    const {
        content: e,
        contentRect: i
      } = this,
      {
        fitWidth: n,
        fitHeight: s,
        fullWidth: o,
        fullHeight: a
      } = i;
    let r = o,
      l = a;
    if (this.option("zoom") || 0 !== this.angle) {
      const i = !(e instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e).maxWidth || "none" === window.getComputedStyle(e).maxHeight),
        c = i ? o : n,
        h = i ? a : s,
        d = this.getMatrix(t),
        u = new DOMPoint(0, 0).matrixTransform(d),
        f = new DOMPoint(0 + c, 0).matrixTransform(d),
        p = new DOMPoint(0 + c, 0 + h).matrixTransform(d),
        g = new DOMPoint(0, 0 + h).matrixTransform(d),
        m = Math.abs(p.x - u.x),
        b = Math.abs(p.y - u.y),
        v = Math.abs(g.x - f.x),
        y = Math.abs(g.y - f.y);
      r = Math.max(m, v), l = Math.max(b, y);
    }
    return {
      contentWidth: r,
      contentHeight: l
    };
  }
  setEdgeForce() {
    if (this.ignoreBounds || this.isDragging || this.panMode === M || this.targetScale < this.scale) return this.isBouncingX = !1, void (this.isBouncingY = !1);
    const {
        target: t
      } = this,
      {
        x: e,
        y: i,
        xDiff: n,
        yDiff: s
      } = this.checkBounds();
    const o = this.option("maxVelocity");
    let a = this.velocity.e,
      r = this.velocity.f;
    0 !== n ? (this.isBouncingX = !0, n * a <= 0 ? a += .14 * n : (a = .14 * n, e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))), o && (a = Math.max(Math.min(a, o), -1 * o))) : this.isBouncingX = !1, 0 !== s ? (this.isBouncingY = !0, s * r <= 0 ? r += .14 * s : (r = .14 * s, i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))), o && (r = Math.max(Math.min(r, o), -1 * o))) : this.isBouncingY = !1, this.isBouncingX && (this.velocity.e = a), this.isBouncingY && (this.velocity.f = r);
  }
  enable() {
    const {
        content: t
      } = this,
      e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
    for (const t of b) this.current[t] = this.target[t] = e[t];
    this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = m.Ready, this.emit("ready");
  }
  onClick(t) {
    var e;
    "click" === t.type && 0 === t.detail && (this.dragOffset.x = 0, this.dragOffset.y = 0), this.isDragging && (null === (e = this.pointerTracker) || void 0 === e || e.clear(), this.trackingPoints = [], this.startDecelAnim());
    const i = t.target;
    if (!i || t.defaultPrevented) return;
    if (i.hasAttribute("disabled")) return t.preventDefault(), void t.stopPropagation();
    if ((() => {
      const t = window.getSelection();
      return t && "Range" === t.type;
    })() && !i.closest("button")) return;
    const n = i.closest("[data-panzoom-action]"),
      s = i.closest("[data-panzoom-change]"),
      o = n || s,
      a = o && x(o) ? o.dataset : null;
    if (a) {
      const e = a.panzoomChange,
        i = a.panzoomAction;
      if ((e || i) && t.preventDefault(), e) {
        let t = {};
        try {
          t = JSON.parse(e);
        } catch (t) {
          console && console.warn("The given data was not valid JSON");
        }
        return void this.applyChange(t);
      }
      if (i) return void (this[i] && this[i]());
    }
    if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return t.preventDefault(), void t.stopPropagation();
    if (i.closest("[data-fancybox]")) return;
    const r = this.content.getBoundingClientRect(),
      l = this.dragStart;
    if (l.time && !this.canZoomOut() && (Math.abs(r.x - l.x) > 2 || Math.abs(r.y - l.y) > 2)) return;
    this.dragStart.time = 0;
    const c = e => {
        this.option("zoom", t) && e && "string" == typeof e && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e) && "function" == typeof this[e] && (t.preventDefault(), this[e]({
          event: t
        }));
      },
      h = this.option("click", t),
      d = this.option("dblClick", t);
    d ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout(() => {
      1 === this.clicks ? (this.emit("click", t), !t.defaultPrevented && h && c(h)) : (this.emit("dblClick", t), t.defaultPrevented || c(d)), this.clicks = 0, this.clickTimer = null;
    }, 350))) : (this.emit("click", t), !t.defaultPrevented && h && c(h));
  }
  addTrackingPoint(t) {
    const e = this.trackingPoints.filter(t => t.time > Date.now() - 100);
    e.push(t), this.trackingPoints = e;
  }
  onPointerDown(t, e, i) {
    var n;
    if (!1 === this.option("touch", t)) return !1;
    this.pwt = 0, this.dragOffset = {
      x: 0,
      y: 0,
      time: 0
    }, this.trackingPoints = [];
    const s = this.content.getBoundingClientRect();
    if (this.dragStart = {
      x: s.x,
      y: s.y,
      top: s.top,
      left: s.left,
      time: Date.now()
    }, this.clickTimer) return !1;
    if (this.panMode === M && this.targetScale > 1) return t.preventDefault(), t.stopPropagation(), !1;
    const o = t.composedPath()[0];
    if (!i.length) {
      if (["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(o.nodeName) || o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]")) return !1;
      null === (n = window.getSelection()) || void 0 === n || n.removeAllRanges();
    }
    if ("mousedown" === t.type) ["A", "BUTTON"].includes(o.nodeName) || t.preventDefault();else if (Math.abs(this.velocity.a) > .3) return !1;
    return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = !0, this.addTrackingPoint(e), this.emit("touchStart", t)), !0;
  }
  onPointerMove(e, n, s) {
    if (!1 === this.option("touch", e)) return;
    if (!this.isDragging) return;
    if (n.length < 2 && this.panOnlyZoomed && t(this.targetScale) <= t(this.minScale)) return;
    if (this.emit("touchMove", e), e.defaultPrevented) return;
    this.addTrackingPoint(n[0]);
    const {
        content: o
      } = this,
      a = h(s[0], s[1]),
      r = h(n[0], n[1]);
    let l = 0,
      d = 0;
    if (n.length > 1) {
      const t = o.getBoundingClientRect();
      l = a.clientX - t.left - .5 * t.width, d = a.clientY - t.top - .5 * t.height;
    }
    const u = c(s[0], s[1]),
      f = c(n[0], n[1]);
    let p = u ? f / u : 1,
      g = r.clientX - a.clientX,
      m = r.clientY - a.clientY;
    this.dragOffset.x += g, this.dragOffset.y += m, this.dragOffset.time = Date.now() - this.dragStart.time;
    let b = t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
    if (b && !this.lockedAxis) if ("xy" === b || "y" === b || "touchmove" === e.type) {
      if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void e.preventDefault();
      const t = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
      this.lockedAxis = t > 45 && t < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, g = 0, m = 0;
    } else this.lockedAxis = b;
    if (i(e.target, this.content) && (b = "x", this.dragOffset.y = 0), b && "xy" !== b && this.lockedAxis !== b && t(this.targetScale) === t(this.minScale)) return;
    e.cancelable && e.preventDefault(), this.container.classList.add(this.cn("isDragging"));
    const v = this.checkBounds(g, m);
    this.option("rubberband") ? ("x" !== this.isInfinite && (v.xDiff > 0 && g < 0 || v.xDiff < 0 && g > 0) && (g *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * v.xDiff))), "y" !== this.isInfinite && (v.yDiff > 0 && m < 0 || v.yDiff < 0 && m > 0) && (m *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * v.yDiff)))) : (v.xDiff && (g = 0), v.yDiff && (m = 0));
    const y = this.targetScale,
      w = this.minScale,
      x = this.maxScale;
    y < .5 * w && (p = Math.max(p, w)), y > 1.5 * x && (p = Math.min(p, x)), "y" === this.lockedAxis && t(y) === t(w) && (g = 0), "x" === this.lockedAxis && t(y) === t(w) && (m = 0), this.applyChange({
      originX: l,
      originY: d,
      panX: g,
      panY: m,
      scale: p,
      friction: this.option("dragFriction"),
      ignoreBounds: !0
    });
  }
  onPointerUp(t, e, n) {
    if (n.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
    this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), i(t.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), this.emit("touchEnd", t), this.isDragging = !1, this.lockedAxis = !1, this.state !== m.Destroy && (t.defaultPrevented || this.startDecelAnim()));
  }
  startDecelAnim() {
    var e;
    const i = this.isScaling;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
    for (const t of b) this.velocity[t] = 0;
    this.target.e = this.current.e, this.target.f = this.current.f, E(this.container, "is-scaling"), E(this.container, "is-animating"), this.isTicking = !1;
    const {
        trackingPoints: n
      } = this,
      s = n[0],
      o = n[n.length - 1];
    let a = 0,
      r = 0,
      l = 0;
    o && s && (a = o.clientX - s.clientX, r = o.clientY - s.clientY, l = o.time - s.time);
    const c = (null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1;
    1 !== c && (a *= c, r *= c);
    let h = 0,
      d = 0,
      u = 0,
      f = 0,
      p = this.option("decelFriction");
    const g = this.targetScale;
    if (l > 0) {
      u = Math.abs(a) > 3 ? a / (l / 30) : 0, f = Math.abs(r) > 3 ? r / (l / 30) : 0;
      const t = this.option("maxVelocity");
      t && (u = Math.max(Math.min(u, t), -1 * t), f = Math.max(Math.min(f, t), -1 * t));
    }
    u && (h = u / (1 / (1 - p) - 1)), f && (d = f / (1 / (1 - p) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && t(g) === this.minScale) && (h = u = 0), ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && t(g) === this.minScale) && (d = f = 0);
    const m = this.dragOffset.x,
      v = this.dragOffset.y,
      y = this.option("dragMinThreshold") || 0;
    Math.abs(m) < y && Math.abs(v) < y && (h = d = 0, u = f = 0), (this.option("zoom") && (g < this.minScale - 1e-5 || g > this.maxScale + 1e-5) || i && !h && !d) && (p = .35), this.applyChange({
      panX: h,
      panY: d,
      friction: p
    }), this.emit("decel", u, f, m, v);
  }
  onWheel(t) {
    var e = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (t, e) {
      return Math.abs(e) > Math.abs(t) ? e : t;
    });
    const i = Math.max(-1, Math.min(1, e));
    if (this.emit("wheel", t, i), this.panMode === M) return;
    if (t.defaultPrevented) return;
    const n = this.option("wheel");
    "pan" === n ? (t.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
      panX: 2 * -t.deltaX,
      panY: 2 * -t.deltaY,
      bounce: !1
    })) : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(t);
  }
  onMouseMove(t) {
    this.panWithMouse(t);
  }
  onKeydown(t) {
    "Escape" === t.key && this.toggleFS();
  }
  onResize() {
    this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
  }
  setTransform() {
    this.emit("beforeTransform");
    const {
        current: e,
        target: i,
        content: n,
        contentRect: s
      } = this,
      o = Object.assign({}, P);
    for (const n of b) {
      const s = "e" == n || "f" === n ? T : C;
      o[n] = t(e[n], s), Math.abs(i[n] - e[n]) < ("e" == n || "f" === n ? .51 : .001) && (e[n] = i[n]);
    }
    let {
        a: a,
        b: r,
        c: l,
        d: c,
        e: h,
        f: d
      } = o,
      u = `matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`,
      f = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
    if (this.option("transformParent") && (f = f.parentElement || f), f.style.transform === u) return;
    f.style.transform = u;
    const {
      contentWidth: p,
      contentHeight: g
    } = this.calculateContentDim();
    s.width = p, s.height = g, this.emit("afterTransform");
  }
  updateMetrics() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var i;
    if (!this || this.state === m.Destroy) return;
    if (this.isContentLoading) return;
    const n = Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1),
      {
        container: s,
        content: o
      } = this,
      a = o instanceof HTMLImageElement,
      r = s.getBoundingClientRect(),
      l = getComputedStyle(this.container);
    let c = r.width * n,
      h = r.height * n;
    const d = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom),
      u = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)),
      f = h - d;
    this.containerRect = {
      width: c,
      height: h,
      innerWidth: u,
      innerHeight: f
    };
    let p = this.option("width") || "auto",
      g = this.option("height") || "auto";
    "auto" === p && (p = parseFloat(o.dataset.width || "") || (t => {
      let e = 0;
      return e = t instanceof HTMLImageElement ? t.naturalWidth : t instanceof SVGElement ? t.width.baseVal.value : Math.max(t.offsetWidth, t.scrollWidth), e || 0;
    })(o)), "auto" === g && (g = parseFloat(o.dataset.height || "") || (t => {
      let e = 0;
      return e = t instanceof HTMLImageElement ? t.naturalHeight : t instanceof SVGElement ? t.height.baseVal.value : Math.max(t.offsetHeight, t.scrollHeight), e || 0;
    })(o));
    let b = o.parentElement instanceof HTMLPictureElement ? o.parentElement : o;
    this.option("transformParent") && (b = b.parentElement || b);
    const v = b.getAttribute("style") || "";
    b.style.setProperty("transform", "none", "important"), a && (b.style.width = "", b.style.height = ""), b.offsetHeight;
    const y = o.getBoundingClientRect();
    let w = y.width * n,
      x = y.height * n,
      E = 0,
      S = 0;
    a && (Math.abs(p - w) > 1 || Math.abs(g - x) > 1) && ({
      width: w,
      height: x,
      top: E,
      left: S
    } = ((t, e, i, n) => {
      const s = i / n;
      return s > t / e ? (i = t, n = t / s) : (i = e * s, n = e), {
        width: i,
        height: n,
        top: .5 * (e - n),
        left: .5 * (t - i)
      };
    })(w, x, p, g)), this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
      top: y.top - r.top + E,
      bottom: r.bottom - y.bottom + E,
      left: y.left - r.left + S,
      right: r.right - y.right + S,
      fitWidth: w,
      fitHeight: x,
      width: w,
      height: x,
      fullWidth: p,
      fullHeight: g
    }), b.style.cssText = v, a && (b.style.width = `${w}px`, b.style.height = `${x}px`), this.setTransform(), !0 !== e && this.emit("refresh"), this.ignoreBounds || (t(this.targetScale) < t(this.minScale) ? this.zoomTo(this.minScale, {
      friction: 0
    }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {
      friction: 0
    }) : this.state === m.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls();
  }
  calculateBounds() {
    const {
        contentWidth: e,
        contentHeight: i
      } = this.calculateContentDim(this.target),
      {
        targetScale: n,
        lockedAxis: s
      } = this,
      {
        fitWidth: o,
        fitHeight: a
      } = this.contentRect;
    let r = 0,
      l = 0,
      c = 0,
      h = 0;
    const d = this.option("infinite");
    if (!0 === d || s && d === s) r = -1 / 0, c = 1 / 0, l = -1 / 0, h = 1 / 0;else {
      let {
          containerRect: s,
          contentRect: d
        } = this,
        u = t(o * n, T),
        f = t(a * n, T),
        {
          innerWidth: p,
          innerHeight: g
        } = s;
      if (s.width === u && (p = s.width), s.width === f && (g = s.height), e > p) {
        c = .5 * (e - p), r = -1 * c;
        let t = .5 * (d.right - d.left);
        r += t, c += t;
      }
      if (o > p && e < p && (r -= .5 * (o - p), c -= .5 * (o - p)), i > g) {
        h = .5 * (i - g), l = -1 * h;
        let t = .5 * (d.bottom - d.top);
        l += t, h += t;
      }
      a > g && i < g && (r -= .5 * (a - g), c -= .5 * (a - g));
    }
    return {
      x: {
        min: r,
        max: c
      },
      y: {
        min: l,
        max: h
      }
    };
  }
  getBounds() {
    const t = this.option("bounds");
    return "auto" !== t ? t : this.calculateBounds();
  }
  updateControls() {
    const e = this,
      i = e.container,
      {
        panMode: n,
        contentRect: s,
        fullScale: a,
        targetScale: r,
        coverScale: l,
        maxScale: c,
        minScale: h
      } = e;
    let d = {
        toggleMax: r - h < .5 * (c - h) ? c : h,
        toggleCover: r - h < .5 * (l - h) ? l : h,
        toggleZoom: r - h < .5 * (a - h) ? a : h
      }[e.option("click") || ""] || h,
      u = e.canZoomIn(),
      f = e.canZoomOut(),
      p = n === O && !!this.option("touch"),
      g = f && p;
    if (p && (t(r) < t(h) && !this.panOnlyZoomed && (g = !0), (t(s.width, 1) > t(s.fitWidth, 1) || t(s.height, 1) > t(s.fitHeight, 1)) && (g = !0)), t(s.width * r, 1) < t(s.fitWidth, 1) && (g = !1), n === M && (g = !1), o(i, this.cn("isDraggable"), g), !this.option("zoom")) return;
    let m = u && t(d) > t(r),
      b = !m && !g && f && t(d) < t(r);
    o(i, this.cn("canZoomIn"), m), o(i, this.cn("canZoomOut"), b);
    for (const t of i.querySelectorAll('[data-panzoom-action="zoomIn"]')) u ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
    for (const t of i.querySelectorAll('[data-panzoom-action="zoomOut"]')) f ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
    for (const t of i.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
      u || f ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
      const e = t.querySelector("g");
      e && (e.style.display = u ? "" : "none");
    }
  }
  panTo(_ref3) {
    let {
      x: t = this.target.e,
      y: e = this.target.f,
      scale: i = this.targetScale,
      friction: n = this.option("friction"),
      angle: s = 0,
      originX: o = 0,
      originY: a = 0,
      flipX: r = !1,
      flipY: l = !1,
      ignoreBounds: c = !1
    } = _ref3;
    this.state !== m.Destroy && this.applyChange({
      panX: t - this.target.e,
      panY: e - this.target.f,
      scale: i / this.targetScale,
      angle: s,
      originX: o,
      originY: a,
      friction: n,
      flipX: r,
      flipY: l,
      ignoreBounds: c
    });
  }
  applyChange(_ref4) {
    let {
      panX: e = 0,
      panY: i = 0,
      scale: n = 1,
      angle: s = 0,
      originX: o = -this.current.e,
      originY: a = -this.current.f,
      friction: r = this.option("friction"),
      flipX: l = !1,
      flipY: c = !1,
      ignoreBounds: h = !1,
      bounce: d = this.option("bounce")
    } = _ref4;
    const u = this.state;
    if (u === m.Destroy) return;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r || 0, this.ignoreBounds = h;
    const {
        current: f
      } = this,
      p = f.e,
      g = f.f,
      v = this.getMatrix(this.target);
    let y = new DOMMatrix().translate(p, g).translate(o, a).translate(e, i);
    if (this.option("zoom")) {
      if (!h) {
        const t = this.targetScale,
          e = this.minScale,
          i = this.maxScale;
        t * n < e && (n = e / t), t * n > i && (n = i / t);
      }
      y = y.scale(n);
    }
    y = y.translate(-o, -a).translate(-p, -g).multiply(v), s && (y = y.rotate(s)), l && (y = y.scale(-1, 1)), c && (y = y.scale(1, -1));
    for (const e of b) "e" !== e && "f" !== e && (y[e] > this.minScale + 1e-5 || y[e] < this.minScale - 1e-5) ? this.target[e] = y[e] : this.target[e] = t(y[e], T);
    (this.targetScale < this.scale || Math.abs(n - 1) > .1 || this.panMode === M || !1 === d) && !h && this.clampTargetBounds(), u === m.Init ? this.animate() : this.isResting || (this.state = m.Panning, this.requestTick());
  }
  stop() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    if (this.state === m.Init || this.state === m.Destroy) return;
    const e = this.isTicking;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
    for (const e of b) this.velocity[e] = 0, "current" === t ? this.current[e] = this.target[e] : "target" === t && (this.target[e] = this.current[e]);
    this.setTransform(), E(this.container, "is-scaling"), E(this.container, "is-animating"), this.isTicking = !1, this.state = m.Ready, e && (this.emit("endAnimation"), this.updateControls());
  }
  requestTick() {
    this.isTicking || (this.emit("startAnimation"), this.updateControls(), S(this.container, "is-animating"), this.isScaling && S(this.container, "is-scaling")), this.isTicking = !0, this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
  }
  panWithMouse(e) {
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option("mouseMoveFriction");
    if (this.pmme = e, this.panMode !== M || !e) return;
    if (t(this.targetScale) <= t(this.minScale)) return;
    this.emit("mouseMove", e);
    const {
        container: n,
        containerRect: s,
        contentRect: o
      } = this,
      a = s.width,
      r = s.height,
      l = n.getBoundingClientRect(),
      c = (e.clientX || 0) - l.left,
      h = (e.clientY || 0) - l.top;
    let {
      contentWidth: d,
      contentHeight: u
    } = this.calculateContentDim(this.target);
    const f = this.option("mouseMoveFactor");
    f > 1 && (d !== a && (d *= f), u !== r && (u *= f));
    let p = .5 * (d - a) - c / a * 100 / 100 * (d - a);
    p += .5 * (o.right - o.left);
    let g = .5 * (u - r) - h / r * 100 / 100 * (u - r);
    g += .5 * (o.bottom - o.top), this.applyChange({
      panX: p - this.target.e,
      panY: g - this.target.f,
      friction: i
    });
  }
  zoomWithWheel(e) {
    if (this.state === m.Destroy || this.state === m.Init) return;
    const i = Date.now();
    if (i - this.pwt < 45) return void e.preventDefault();
    this.pwt = i;
    var n = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (t, e) {
      return Math.abs(e) > Math.abs(t) ? e : t;
    });
    const s = Math.max(-1, Math.min(1, n)),
      {
        targetScale: o,
        maxScale: a,
        minScale: r
      } = this;
    let l = o * (100 + 45 * s) / 100;
    t(l) < t(r) && t(o) <= t(r) ? (this.cwd += Math.abs(s), l = r) : t(l) > t(a) && t(o) >= t(a) ? (this.cwd += Math.abs(s), l = a) : (this.cwd = 0, l = Math.max(Math.min(l, a), r)), this.cwd > this.option("wheelLimit") || (e.preventDefault(), t(l) !== t(o) && this.zoomTo(l, {
      event: e
    }));
  }
  canZoomIn() {
    return this.option("zoom") && (t(this.contentRect.width, 1) < t(this.contentRect.fitWidth, 1) || t(this.targetScale) < t(this.maxScale));
  }
  canZoomOut() {
    return this.option("zoom") && t(this.targetScale) > t(this.minScale);
  }
  zoomIn() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.25;
    let e = arguments.length > 1 ? arguments[1] : undefined;
    this.zoomTo(this.targetScale * t, e);
  }
  zoomOut() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .8;
    let e = arguments.length > 1 ? arguments[1] : undefined;
    this.zoomTo(this.targetScale * t, e);
  }
  zoomToFit(t) {
    this.zoomTo("fit", t);
  }
  zoomToCover(t) {
    this.zoomTo("cover", t);
  }
  zoomToFull(t) {
    this.zoomTo("full", t);
  }
  zoomToMax(t) {
    this.zoomTo("max", t);
  }
  toggleZoom(t) {
    this.zoomTo(this.targetScale - this.minScale < .5 * (this.fullScale - this.minScale) ? "full" : "fit", t);
  }
  toggleMax(t) {
    this.zoomTo(this.targetScale - this.minScale < .5 * (this.maxScale - this.minScale) ? "max" : "fit", t);
  }
  toggleCover(t) {
    this.zoomTo(this.targetScale - this.minScale < .5 * (this.coverScale - this.minScale) ? "cover" : "fit", t);
  }
  iterateZoom(t) {
    this.zoomTo("next", t);
  }
  zoomTo() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    let {
      friction: e = "auto",
      originX: i = "auto",
      originY: n = "auto",
      event: s
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.isContentLoading || this.state === m.Destroy) return;
    const {
      targetScale: o
    } = this;
    this.stop();
    let a = 1;
    if (this.panMode === M && (s = this.pmme || s), s || "auto" === i || "auto" === n) {
      const t = this.content.getBoundingClientRect(),
        e = this.container.getBoundingClientRect(),
        o = s ? s.clientX : e.left + .5 * e.width,
        a = s ? s.clientY : e.top + .5 * e.height;
      i = o - t.left - .5 * t.width, n = a - t.top - .5 * t.height;
    }
    const r = this.fullScale,
      l = this.maxScale,
      c = this.coverScale;
    if ("number" == typeof t) a = t / o || 1;else if ("full" === t) a = r / o || 1;else if ("cover" === t) a = c / o || 1;else if ("max" === t) a = l / o || 1;else if ("fit" === t) a = 1 / o || 1;else if ("next" === t) {
      let t = [1, r, l].sort((t, e) => t - e),
        e = t.findIndex(t => t > o + 1e-5);
      a = t[e] / o || 1 / o;
    }
    e = "auto" === e ? a > 1 ? .15 : .25 : e, this.applyChange({
      scale: a,
      originX: i,
      originY: n,
      friction: e
    }), s && this.panMode === M && this.panWithMouse(s, e);
  }
  rotateCCW() {
    this.applyChange({
      angle: -90
    });
  }
  rotateCW() {
    this.applyChange({
      angle: 90
    });
  }
  flipX() {
    this.applyChange({
      flipX: !0
    });
  }
  flipY() {
    this.applyChange({
      flipY: !0
    });
  }
  fitX() {
    this.stop("target");
    const {
      containerRect: t,
      contentRect: e,
      target: i
    } = this;
    this.applyChange({
      panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
      panY: .5 * t.height - (e.top + .5 * e.fitHeight) - i.f,
      scale: t.width / e.fitWidth / this.targetScale,
      originX: 0,
      originY: 0,
      ignoreBounds: !0
    });
  }
  fitY() {
    this.stop("target");
    const {
      containerRect: t,
      contentRect: e,
      target: i
    } = this;
    this.applyChange({
      panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
      panY: .5 * t.innerHeight - (e.top + .5 * e.fitHeight) - i.f,
      scale: t.height / e.fitHeight / this.targetScale,
      originX: 0,
      originY: 0,
      ignoreBounds: !0
    });
  }
  toggleFS() {
    const {
        container: t
      } = this,
      e = this.cn("inFullscreen"),
      i = this.cn("htmlHasFullscreen");
    t.classList.toggle(e);
    const n = t.classList.contains(e);
    n ? (document.documentElement.classList.add(i), document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(i), document.removeEventListener("keydown", this.onKeydown, !0)), this.updateMetrics(), this.emit(n ? "enterFS" : "exitFS");
  }
  getMatrix() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.current;
    const {
      a: e,
      b: i,
      c: n,
      d: s,
      e: o,
      f: a
    } = t;
    return new DOMMatrix([e, i, n, s, o, a]);
  }
  reset(t) {
    if (this.state !== m.Init && this.state !== m.Destroy) {
      this.stop("current");
      for (const t of b) this.target[t] = P[t];
      this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = void 0 === t ? this.option("friction") : t, this.state = m.Panning, this.requestTick());
    }
  }
  destroy() {
    this.stop(), this.state = m.Destroy, this.detachEvents(), this.detachObserver();
    const {
        container: t,
        content: e
      } = this,
      i = this.option("classes") || {};
    for (const e of Object.values(i)) t.classList.remove(e + "");
    e && (e.removeEventListener("load", this.onLoad), e.removeEventListener("error", this.onError)), this.detachPlugins();
  }
}
Object.defineProperty(R, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: y
}), Object.defineProperty(R, "Plugins", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {}
});
const k = function (t, e) {
    let i = !0;
    return function () {
      i && (i = !1, t(...arguments), setTimeout(() => {
        i = !0;
      }, e));
    };
  },
  I = (t, e) => {
    let i = [];
    return t.childNodes.forEach(t => {
      t.nodeType !== Node.ELEMENT_NODE || e && !t.matches(e) || i.push(t);
    }), i;
  },
  D = {
    viewport: null,
    track: null,
    enabled: !0,
    slides: [],
    axis: "x",
    transition: "fade",
    preload: 1,
    slidesPerPage: "auto",
    initialPage: 0,
    friction: .12,
    Panzoom: {
      decelFriction: .12
    },
    center: !0,
    infinite: !0,
    fill: !0,
    dragFree: !1,
    adaptiveHeight: !1,
    direction: "ltr",
    classes: {
      container: "f-carousel",
      viewport: "f-carousel__viewport",
      track: "f-carousel__track",
      slide: "f-carousel__slide",
      isLTR: "is-ltr",
      isRTL: "is-rtl",
      isHorizontal: "is-horizontal",
      isVertical: "is-vertical",
      inTransition: "in-transition",
      isSelected: "is-selected"
    },
    l10n: {
      NEXT: "Next slide",
      PREV: "Previous slide",
      GOTO: "Go to slide #%d"
    }
  };
var F;
!function (t) {
  t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Destroy = 2] = "Destroy";
}(F || (F = {}));
const j = t => {
    if ("string" == typeof t || t instanceof HTMLElement) t = {
      html: t
    };else {
      const e = t.thumb;
      void 0 !== e && ("string" == typeof e && (t.thumbSrc = e), e instanceof HTMLImageElement && (t.thumbEl = e, t.thumbElSrc = e.src, t.thumbSrc = e.src), delete t.thumb);
    }
    return Object.assign({
      html: "",
      el: null,
      isDom: !1,
      class: "",
      customClass: "",
      index: -1,
      dim: 0,
      gap: 0,
      pos: 0,
      transition: !1
    }, t);
  },
  H = function () {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.assign({
      index: -1,
      slides: [],
      dim: 0,
      pos: -1
    }, t);
  };
class B extends p {
  constructor(t, e) {
    super(e), Object.defineProperty(this, "instance", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    });
  }
  attach() {}
  detach() {}
}
const N = {
  classes: {
    list: "f-carousel__dots",
    isDynamic: "is-dynamic",
    hasDots: "has-dots",
    dot: "f-carousel__dot",
    isBeforePrev: "is-before-prev",
    isPrev: "is-prev",
    isCurrent: "is-current",
    isNext: "is-next",
    isAfterNext: "is-after-next"
  },
  dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
  dynamicFrom: 11,
  maxCount: 1 / 0,
  minCount: 2
};
class _ extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "isDynamic", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "list", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    });
  }
  onRefresh() {
    this.refresh();
  }
  build() {
    let t = this.list;
    if (!t) {
      t = document.createElement("ul"), S(t, this.cn("list")), t.setAttribute("role", "tablist");
      const e = this.instance.container;
      e.appendChild(t), S(e, this.cn("hasDots")), this.list = t;
    }
    return t;
  }
  refresh() {
    var t;
    const e = this.instance.pages.length,
      i = Math.min(2, this.option("minCount")),
      n = Math.max(2e3, this.option("maxCount")),
      s = this.option("dynamicFrom");
    if (e < i || e > n) return void this.cleanup();
    const a = "number" == typeof s && e > 5 && e >= s,
      r = !this.list || this.isDynamic !== a || this.list.children.length !== e;
    r && this.cleanup();
    const l = this.build();
    if (o(l, this.cn("isDynamic"), !!a), r) for (let t = 0; t < e; t++) l.append(this.createItem(t));
    let c,
      h = 0;
    for (const e of [...l.children]) {
      const i = h === this.instance.page;
      i && (c = e), o(e, this.cn("isCurrent"), i), null === (t = e.children[0]) || void 0 === t || t.setAttribute("aria-selected", i ? "true" : "false");
      for (const t of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"]) E(e, this.cn(t));
      h++;
    }
    if (c = c || l.firstChild, a && c) {
      const t = c.previousElementSibling,
        e = t && t.previousElementSibling;
      S(t, this.cn("isPrev")), S(e, this.cn("isBeforePrev"));
      const i = c.nextElementSibling,
        n = i && i.nextElementSibling;
      S(i, this.cn("isNext")), S(n, this.cn("isAfterNext"));
    }
    this.isDynamic = a;
  }
  createItem() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var e;
    const i = document.createElement("li");
    i.setAttribute("role", "presentation");
    const s = n(this.instance.localize(this.option("dotTpl"), [["%d", t + 1]]).replace(/\%i/g, t + ""));
    return i.appendChild(s), null === (e = i.children[0]) || void 0 === e || e.setAttribute("role", "tab"), i;
  }
  cleanup() {
    this.list && (this.list.remove(), this.list = null), this.isDynamic = !1, E(this.instance.container, this.cn("hasDots"));
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
}
Object.defineProperty(_, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: N
});
const $ = "disabled",
  W = "next",
  X = "prev";
class q extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "container", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "prev", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "next", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "isDom", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    });
  }
  onRefresh() {
    const t = this.instance,
      e = t.pages.length,
      i = t.page;
    if (e < 2) return void this.cleanup();
    this.build();
    let n = this.prev,
      s = this.next;
    n && s && (n.removeAttribute($), s.removeAttribute($), t.isInfinite || (i <= 0 && n.setAttribute($, ""), i >= e - 1 && s.setAttribute($, "")));
  }
  addBtn(t) {
    var e;
    const i = this.instance,
      n = document.createElement("button");
    n.setAttribute("tabindex", "0"), n.setAttribute("title", i.localize(`{{${t.toUpperCase()}}}`)), S(n, this.cn("button") + " " + this.cn(t === W ? "isNext" : "isPrev"));
    const s = i.isRTL ? t === W ? X : W : t;
    var o;
    return n.innerHTML = i.localize(this.option(`${s}Tpl`)), n.dataset[`carousel${(o = t, o ? o.match("^[a-z]") ? o.charAt(0).toUpperCase() + o.substring(1) : o : "")}`] = "true", null === (e = this.container) || void 0 === e || e.appendChild(n), n;
  }
  build() {
    const t = this.instance.container,
      e = this.cn("container");
    let {
      container: i,
      prev: n,
      next: s
    } = this;
    i || (i = t.querySelector("." + e), this.isDom = !!i), i || (i = document.createElement("div"), S(i, e), t.appendChild(i)), this.container = i, s || (s = i.querySelector("[data-carousel-next]")), s || (s = this.addBtn(W)), this.next = s, n || (n = i.querySelector("[data-carousel-prev]")), n || (n = this.addBtn(X)), this.prev = n;
  }
  cleanup() {
    this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove()), this.prev = null, this.next = null, this.container = null, this.isDom = !1;
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
}
Object.defineProperty(q, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    classes: {
      container: "f-carousel__nav",
      button: "f-button",
      isNext: "is-next",
      isPrev: "is-prev"
    },
    nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
    prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
  }
});
class Y extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "selectedIndex", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "target", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "nav", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    });
  }
  addAsTargetFor(t) {
    this.target = this.instance, this.nav = t, this.attachEvents();
  }
  addAsNavFor(t) {
    this.nav = this.instance, this.target = t, this.attachEvents();
  }
  attachEvents() {
    const {
      nav: t,
      target: e
    } = this;
    t && e && (t.options.initialSlide = e.options.initialPage, t.state === F.Ready ? this.onNavReady(t) : t.on("ready", this.onNavReady), e.state === F.Ready ? this.onTargetReady(e) : e.on("ready", this.onTargetReady));
  }
  onNavReady(t) {
    t.on("createSlide", this.onNavCreateSlide), t.on("Panzoom.click", this.onNavClick), t.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
  }
  onTargetReady(t) {
    t.on("change", this.onTargetChange), t.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange();
  }
  onNavClick(t, e, i) {
    this.onNavTouch(t, t.panzoom, i);
  }
  onNavTouch(t, e, i) {
    var n, s;
    if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;
    const o = i.target,
      {
        nav: a,
        target: r
      } = this;
    if (!a || !r || !o) return;
    const l = o.closest("[data-index]");
    if (i.stopPropagation(), i.preventDefault(), !l) return;
    const c = parseInt(l.dataset.index || "", 10) || 0,
      h = r.getPageForSlide(c),
      d = a.getPageForSlide(c);
    a.slideTo(d), r.slideTo(h, {
      friction: (null === (s = null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) || void 0 === s ? void 0 : s.Sync.option("friction")) || 0
    }), this.markSelectedSlide(c);
  }
  onNavCreateSlide(t, e) {
    e.index === this.selectedIndex && this.markSelectedSlide(e.index);
  }
  onTargetChange() {
    var t, e;
    const {
      target: i,
      nav: n
    } = this;
    if (!i || !n) return;
    if (n.state !== F.Ready || i.state !== F.Ready) return;
    const s = null === (e = null === (t = i.pages[i.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index,
      o = n.getPageForSlide(s);
    this.markSelectedSlide(s), n.slideTo(o, null === n.prevPage && null === i.prevPage ? {
      friction: 0
    } : void 0);
  }
  markSelectedSlide(t) {
    const e = this.nav;
    e && e.state === F.Ready && (this.selectedIndex = t, [...e.slides].map(e => {
      e.el && e.el.classList[e.index === t ? "add" : "remove"]("is-nav-selected");
    }));
  }
  attach() {
    const t = this;
    let e = t.options.target,
      i = t.options.nav;
    e ? t.addAsNavFor(e) : i && t.addAsTargetFor(i);
  }
  detach() {
    const t = this,
      e = t.nav,
      i = t.target;
    e && (e.off("ready", t.onNavReady), e.off("createSlide", t.onNavCreateSlide), e.off("Panzoom.click", t.onNavClick), e.off("Panzoom.touchEnd", t.onNavTouch)), t.nav = null, i && (i.off("ready", t.onTargetReady), i.off("refresh", t.onTargetChange), i.off("change", t.onTargetChange)), t.target = null;
  }
}
Object.defineProperty(Y, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    friction: .35
  }
});
const V = {
    Navigation: q,
    Dots: _,
    Sync: Y
  },
  Z = "animationend",
  U = "isSelected",
  G = "slide";
class K extends g {
  get axis() {
    return this.isHorizontal ? "e" : "f";
  }
  get isEnabled() {
    return this.state === F.Ready;
  }
  get isInfinite() {
    let t = !1;
    const {
        contentDim: e,
        viewportDim: i,
        pages: n,
        slides: s
      } = this,
      o = s[0];
    return n.length >= 2 && o && e + o.dim >= i && (t = this.option("infinite")), t;
  }
  get isRTL() {
    return "rtl" === this.option("direction");
  }
  get isHorizontal() {
    return "x" === this.option("axis");
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (super(), Object.defineProperty(this, "bp", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ""
    }), Object.defineProperty(this, "lp", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "userOptions", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, "userPlugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, "state", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: F.Init
    }), Object.defineProperty(this, "page", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "prevPage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "container", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "viewport", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "track", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "slides", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "pages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "panzoom", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "inTransition", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: new Set()
    }), Object.defineProperty(this, "contentDim", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "viewportDim", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), "string" == typeof t && (t = document.querySelector(t)), !t || !x(t)) throw new Error("No Element found");
    this.container = t, this.slideNext = k(this.slideNext.bind(this), 150), this.slidePrev = k(this.slidePrev.bind(this), 150), this.userOptions = e, this.userPlugins = i, queueMicrotask(() => {
      this.processOptions();
    });
  }
  processOptions() {
    var t, e;
    const i = u({}, K.defaults, this.userOptions);
    let n = "";
    const s = i.breakpoints;
    if (s && d(s)) for (const [t, e] of Object.entries(s)) window.matchMedia(t).matches && d(e) && (n += t, u(i, e));
    n === this.bp && this.state !== F.Init || (this.bp = n, this.state === F.Ready && (i.initialSlide = (null === (e = null === (t = this.pages[this.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index) || 0), this.state !== F.Init && this.destroy(), super.setOptions(i), !1 === this.option("enabled") ? this.attachEvents() : setTimeout(() => {
      this.init();
    }, 0));
  }
  init() {
    this.state = F.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, K.Plugins), this.userPlugins)), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = F.Ready, this.emit("ready");
  }
  initLayout() {
    const {
        container: t
      } = this,
      e = this.option("classes");
    S(t, this.cn("container")), o(t, e.isLTR, !this.isRTL), o(t, e.isRTL, this.isRTL), o(t, e.isVertical, !this.isHorizontal), o(t, e.isHorizontal, this.isHorizontal);
    let i = this.option("viewport") || t.querySelector(`.${e.viewport}`);
    i || (i = document.createElement("div"), S(i, e.viewport), i.append(...I(t, `.${e.slide}`)), t.prepend(i)), i.addEventListener("scroll", this.onScroll);
    let n = this.option("track") || t.querySelector(`.${e.track}`);
    n || (n = document.createElement("div"), S(n, e.track), n.append(...Array.from(i.childNodes))), n.setAttribute("aria-live", "polite"), i.contains(n) || i.prepend(n), this.viewport = i, this.track = n, this.emit("initLayout");
  }
  initSlides() {
    const {
      track: t
    } = this;
    if (!t) return;
    const e = [...this.slides],
      i = [];
    [...I(t, `.${this.cn(G)}`)].forEach(t => {
      if (x(t)) {
        const e = j({
          el: t,
          isDom: !0,
          index: this.slides.length
        });
        i.push(e);
      }
    });
    for (let t of [...(this.option("slides", []) || []), ...e]) {
      const e = j(t);
      i.push(e);
    }
    this.slides = i;
    for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
    for (const t of i) this.emit("beforeInitSlide", t, t.index), this.emit("initSlide", t, t.index);
    this.emit("initSlides");
  }
  setInitialPage() {
    const t = this.option("initialSlide");
    this.page = "number" == typeof t ? this.getPageForSlide(t) : parseInt(this.option("initialPage", 0) + "", 10) || 0;
  }
  setInitialPosition() {
    const {
      track: t,
      pages: e,
      isHorizontal: i
    } = this;
    if (!t || !e.length) return;
    let n = this.page;
    e[n] || (this.page = n = 0);
    const s = (e[n].pos || 0) * (this.isRTL && i ? 1 : -1),
      o = i ? `${s}px` : "0",
      a = i ? "0" : `${s}px`;
    t.style.transform = `translate3d(${o}, ${a}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight();
  }
  initPanzoom() {
    var _this = this;
    this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
    const t = this.option("Panzoom") || {};
    this.panzoom = new R(this.viewport, u({}, {
      content: this.track,
      zoom: !1,
      panOnlyZoomed: !1,
      lockAxis: this.isHorizontal ? "x" : "y",
      infinite: this.isInfinite,
      click: !1,
      dblClick: !1,
      touch: t => !(this.pages.length < 2 && !t.options.infinite),
      bounds: () => this.getBounds(),
      maxVelocity: t => Math.abs(t.target[this.axis] - t.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
    }, t)), this.panzoom.on("*", function (t, e) {
      for (var _len4 = arguments.length, i = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        i[_key4 - 2] = arguments[_key4];
      }
      _this.emit(`Panzoom.${e}`, t, ...i);
    }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
  }
  attachEvents() {
    const t = this.container;
    t && (t.addEventListener("click", this.onClick, {
      passive: !1,
      capture: !1
    }), t.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
  }
  createPages() {
    let t = [];
    const {
      contentDim: e,
      viewportDim: i
    } = this;
    let n = this.option("slidesPerPage");
    n = ("auto" === n || e <= i) && !1 !== this.option("fill") ? 1 / 0 : parseFloat(n + "");
    let s = 0,
      o = 0,
      a = 0;
    for (const e of this.slides) (!t.length || o + e.dim - i > .05 || a >= n) && (t.push(H()), s = t.length - 1, o = 0, a = 0), t[s].slides.push(e), o += e.dim + e.gap, a++;
    return t;
  }
  processPages() {
    const e = this.pages,
      {
        contentDim: i,
        viewportDim: n,
        isInfinite: s
      } = this,
      o = this.option("center"),
      a = this.option("fill"),
      r = a && o && i > n && !s;
    if (e.forEach((t, e) => {
      var s;
      t.index = e, t.pos = (null === (s = t.slides[0]) || void 0 === s ? void 0 : s.pos) || 0, t.dim = 0;
      for (const [e, i] of t.slides.entries()) t.dim += i.dim, e < t.slides.length - 1 && (t.dim += i.gap);
      r && t.pos + .5 * t.dim < .5 * n ? t.pos = 0 : r && t.pos + .5 * t.dim >= i - .5 * n ? t.pos = i - n : o && (t.pos += -.5 * (n - t.dim));
    }), e.forEach((e, o) => {
      a && !s && i > n && (e.pos = Math.max(e.pos, 0), e.pos = Math.min(e.pos, i - n)), e.pos = t(e.pos, 1e3), e.dim = t(e.dim, 1e3), Math.abs(e.pos) <= .1 && (e.pos = 0);
    }), s) return e;
    const l = [];
    let c;
    return e.forEach(t => {
      const e = Object.assign({}, t);
      c && e.pos === c.pos ? (c.dim += e.dim, c.slides = [...c.slides, ...e.slides]) : (e.index = l.length, c = e, l.push(e));
    }), l;
  }
  getPageFromIndex() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    const e = this.pages.length;
    let i;
    return t = parseInt((t || 0).toString()) || 0, i = this.isInfinite ? (t % e + e) % e : Math.max(Math.min(t, e - 1), 0), i;
  }
  getSlideMetrics(e) {
    var i, n;
    const s = this.isHorizontal ? "width" : "height";
    let o = 0,
      a = 0,
      r = e.el;
    const l = r && !r.parentNode;
    if (r ? o = parseFloat(r.dataset[s] || "") || 0 : (r = document.createElement("div"), r.style.visibility = "hidden", (this.track || document.body).prepend(r)), S(r, this.cn(G) + " " + e.class + " " + e.customClass), o) r.style[s] = `${o}px`, r.style["width" === s ? "height" : "width"] = "";else {
      l && (this.track || document.body).prepend(r);
      const t = Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1);
      o = r.getBoundingClientRect()[s] * t;
    }
    const c = getComputedStyle(r);
    return "content-box" === c.boxSizing && (this.isHorizontal ? (o += parseFloat(c.paddingLeft) || 0, o += parseFloat(c.paddingRight) || 0) : (o += parseFloat(c.paddingTop) || 0, o += parseFloat(c.paddingBottom) || 0)), a = parseFloat(c[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l ? null === (n = r.parentElement) || void 0 === n || n.removeChild(r) : e.el || r.remove(), {
      dim: t(o, 1e3),
      gap: t(a, 1e3)
    };
  }
  getBounds() {
    const {
      isInfinite: t,
      isRTL: e,
      isHorizontal: i,
      pages: n
    } = this;
    let s = {
      min: 0,
      max: 0
    };
    if (t) s = {
      min: -1 / 0,
      max: 1 / 0
    };else if (n.length) {
      const t = n[0].pos,
        o = n[n.length - 1].pos;
      s = e && i ? {
        min: t,
        max: o
      } : {
        min: -1 * o,
        max: -1 * t
      };
    }
    return {
      x: i ? s : {
        min: 0,
        max: 0
      },
      y: i ? {
        min: 0,
        max: 0
      } : s
    };
  }
  repositionSlides() {
    let e,
      {
        isHorizontal: i,
        isRTL: n,
        isInfinite: s,
        viewport: o,
        viewportDim: a,
        contentDim: r,
        page: l,
        pages: c,
        slides: h,
        panzoom: d
      } = this,
      u = 0,
      f = 0,
      p = 0,
      g = 0;
    d ? g = -1 * d.current[this.axis] : c[l] && (g = c[l].pos || 0), e = i ? n ? "right" : "left" : "top", n && i && (g *= -1);
    for (const i of h) {
      const n = i.el;
      n ? ("top" === e ? (n.style.right = "", n.style.left = "") : n.style.top = "", i.index !== u ? n.style[e] = 0 === f ? "" : `${t(f, 1e3)}px` : n.style[e] = "", p += i.dim + i.gap, u++) : f += i.dim + i.gap;
    }
    if (s && p && o) {
      let n = getComputedStyle(o),
        s = "padding",
        l = i ? "Right" : "Bottom",
        c = parseFloat(n[s + (i ? "Left" : "Top")]);
      g -= c, a += c, a += parseFloat(n[s + l]);
      for (const i of h) i.el && (t(i.pos) < t(a) && t(i.pos + i.dim + i.gap) < t(g) && t(g) > t(r - a) && (i.el.style[e] = `${t(f + p, 1e3)}px`), t(i.pos + i.gap) >= t(r - a) && t(i.pos) > t(g + a) && t(g) < t(a) && (i.el.style[e] = `-${t(p, 1e3)}px`));
    }
    let m,
      b,
      v = [...this.inTransition];
    if (v.length > 1 && (m = c[v[0]], b = c[v[1]]), m && b) {
      let i = 0;
      for (const n of h) n.el ? this.inTransition.has(n.index) && m.slides.indexOf(n) < 0 && (n.el.style[e] = `${t(i + (m.pos - b.pos), 1e3)}px`) : i += n.dim + n.gap;
    }
  }
  createSlideEl(t) {
    const {
      track: e,
      slides: i
    } = this;
    if (!e || !t) return;
    if (t.el && t.el.parentNode) return;
    const n = t.el || document.createElement("div");
    S(n, this.cn(G)), S(n, t.class), S(n, t.customClass);
    const s = t.html;
    s && (s instanceof HTMLElement ? n.appendChild(s) : n.innerHTML = t.html + "");
    const o = [];
    i.forEach((t, e) => {
      t.el && o.push(e);
    });
    const a = t.index;
    let r = null;
    if (o.length) {
      r = i[o.reduce((t, e) => Math.abs(e - a) < Math.abs(t - a) ? e : t)];
    }
    const l = r && r.el && r.el.parentNode ? r.index < t.index ? r.el.nextSibling : r.el : null;
    e.insertBefore(n, e.contains(l) ? l : null), t.el = n, this.emit("createSlide", t);
  }
  removeSlideEl(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    const i = t.el;
    if (!i || !i.parentNode) return;
    const n = this.cn(U);
    if (i.classList.contains(n) && (E(i, n), this.emit("unselectSlide", t)), t.isDom && !e) return i.removeAttribute("aria-hidden"), i.removeAttribute("data-index"), void (i.style.left = "");
    this.emit("removeSlide", t);
    const s = new CustomEvent(Z);
    i.dispatchEvent(s), t.el && (t.el.remove(), t.el = null);
  }
  transitionTo() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option("transition");
    var i, n, s, o;
    if (!e) return !1;
    const a = this.page,
      {
        pages: r,
        panzoom: l
      } = this;
    t = parseInt((t || 0).toString()) || 0;
    const c = this.getPageFromIndex(t);
    if (!l || !r[c] || r.length < 2 || Math.abs(((null === (n = null === (i = r[a]) || void 0 === i ? void 0 : i.slides[0]) || void 0 === n ? void 0 : n.dim) || 0) - this.viewportDim) > 1) return !1;
    const h = t > a ? 1 : -1,
      d = r[c].pos * (this.isRTL ? 1 : -1);
    if (a === c && Math.abs(d - l.target[this.axis]) < 1) return !1;
    this.clearTransitions();
    const u = l.isResting;
    S(this.container, this.cn("inTransition"));
    const f = (null === (s = r[a]) || void 0 === s ? void 0 : s.slides[0]) || null,
      p = (null === (o = r[c]) || void 0 === o ? void 0 : o.slides[0]) || null;
    this.inTransition.add(p.index), this.createSlideEl(p);
    let g = f.el,
      m = p.el;
    u || e === G || (e = "fadeFast", g = null);
    const b = this.isRTL ? "next" : "prev",
      v = this.isRTL ? "prev" : "next";
    return g && (this.inTransition.add(f.index), f.transition = e, g.addEventListener(Z, this.onAnimationEnd), g.classList.add(`f-${e}Out`, `to-${h > 0 ? v : b}`)), m && (p.transition = e, m.addEventListener(Z, this.onAnimationEnd), m.classList.add(`f-${e}In`, `from-${h > 0 ? b : v}`)), l.current[this.axis] = d, l.target[this.axis] = d, l.requestTick(), this.onChange(c), !0;
  }
  manageSlideVisiblity() {
    const t = new Set(),
      e = new Set(),
      i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
    for (const n of this.slides) i.has(n) ? t.add(n) : e.add(n);
    for (const e of this.inTransition) t.add(this.slides[e]);
    for (const e of t) this.createSlideEl(e), this.lazyLoadSlide(e);
    for (const i of e) t.has(i) || this.removeSlideEl(i);
    this.markSelectedSlides(), this.repositionSlides();
  }
  markSelectedSlides() {
    if (!this.pages[this.page] || !this.pages[this.page].slides) return;
    const t = "aria-hidden";
    let e = this.cn(U);
    if (e) for (const i of this.slides) {
      const n = i.el;
      n && (n.dataset.index = `${i.index}`, n.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i) ? n.removeAttribute(t) : n.setAttribute(t, "true") : this.pages[this.page].slides.includes(i) ? (n.classList.contains(e) || (S(n, e), this.emit("selectSlide", i)), n.removeAttribute(t)) : (n.classList.contains(e) && (E(n, e), this.emit("unselectSlide", i)), n.setAttribute(t, "true")));
    }
  }
  flipInfiniteTrack() {
    const t = this.panzoom;
    if (!t || !this.isInfinite) return;
    const e = "x" === this.option("axis") ? "e" : "f",
      {
        viewportDim: i,
        contentDim: n
      } = this;
    let s = t.current[e],
      o = t.target[e] - s,
      a = 0,
      r = .5 * i,
      l = n;
    this.isRTL && this.isHorizontal ? (s < -r && (a = -1, s += l), s > l - r && (a = 1, s -= l)) : (s > r && (a = 1, s -= l), s < -l + r && (a = -1, s += l)), a && (t.current[e] = s, t.target[e] = s + o);
  }
  lazyLoadSlide(t) {
    const e = this,
      i = t && t.el;
    if (!i) return;
    const s = new Set(),
      o = "f-fadeIn";
    i.querySelectorAll("[data-lazy-srcset]").forEach(t => {
      t instanceof HTMLImageElement && s.add(t);
    });
    let a = Array.from(i.querySelectorAll("[data-lazy-src]"));
    i.dataset.lazySrc && a.push(i), a.map(t => {
      t instanceof HTMLImageElement ? s.add(t) : x(t) && (t.style.backgroundImage = `url('${t.dataset.lazySrc || ""}')`, delete t.dataset.lazySrc);
    });
    const r = (t, i, n) => {
      n && (n.remove(), n = null), i.complete && (i.classList.add(o), setTimeout(() => {
        i.classList.remove(o);
      }, 350), i.style.visibility = ""), this.option("adaptiveHeight") && t.el && this.pages[this.page].slides.indexOf(t) > -1 && (e.updateMetrics(), e.setViewportHeight()), this.emit("load", t);
    };
    for (const e of s) {
      let i = null;
      e.src = e.dataset.lazySrcset || e.dataset.lazySrc || "", delete e.dataset.lazySrc, delete e.dataset.lazySrcset, e.style.visibility = "hidden", e.addEventListener("error", () => {
        r(t, e, i);
      }), e.addEventListener("load", () => {
        r(t, e, i);
      }), setTimeout(() => {
        e.parentNode && t.el && (e.complete ? r(t, e, i) : (i = n(w), e.parentNode.insertBefore(i, e)));
      }, 300);
    }
  }
  onAnimationEnd(t) {
    var e;
    const i = t.target,
      n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
      s = this.slides[n],
      o = t.animationName;
    if (!i || !s || !o) return;
    const a = !!this.inTransition.has(n) && s.transition;
    a && o.substring(0, a.length + 2) === `f-${a}` && this.inTransition.delete(n), this.inTransition.size || this.clearTransitions(), n === this.page && (null === (e = this.panzoom) || void 0 === e ? void 0 : e.isResting) && this.emit("settle");
  }
  onDecel(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    let s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    const {
        isRTL: o,
        isHorizontal: a,
        axis: r,
        pages: l
      } = this,
      c = l.length,
      h = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
    let d = 0;
    if (d = h > 45 && h < 135 ? a ? 0 : i : a ? e : 0, !c) return;
    const u = this.option("dragFree");
    let f = this.page,
      p = o && a ? 1 : -1;
    const g = t.target[r] * p,
      m = t.current[r] * p;
    let {
        pageIndex: b
      } = this.getPageFromPosition(g),
      {
        pageIndex: v
      } = this.getPageFromPosition(m);
    u ? this.onChange(b) : (Math.abs(d) > 5 ? (l[f].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (f = v), f = o && a ? d < 0 ? f - 1 : f + 1 : d < 0 ? f + 1 : f - 1) : f = 0 === n && 0 === s ? f : v, this.slideTo(f, {
      transition: !1,
      friction: t.option("decelFriction")
    }));
  }
  onClick(t) {
    const e = t.target,
      i = e && x(e) ? e.dataset : null;
    let n, s;
    i && (void 0 !== i.carouselPage ? (s = "slideTo", n = i.carouselPage) : void 0 !== i.carouselNext ? s = "slideNext" : void 0 !== i.carouselPrev && (s = "slidePrev")), s ? (t.preventDefault(), t.stopPropagation(), e && !e.hasAttribute("disabled") && this[s](n)) : this.emit("click", t);
  }
  onSlideTo(t) {
    const e = t.detail || 0;
    this.slideTo(this.getPageForSlide(e), {
      friction: 0
    });
  }
  onChange(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const i = this.page;
    this.prevPage = i, this.page = t, this.option("adaptiveHeight") && this.setViewportHeight(), t !== i && (this.markSelectedSlides(), this.emit("change", t, i, e));
  }
  onRefresh() {
    let t = this.contentDim,
      e = this.viewportDim;
    this.updateMetrics(), this.contentDim === t && this.viewportDim === e || this.slideTo(this.page, {
      friction: 0,
      transition: !1
    });
  }
  onScroll() {
    var t;
    null === (t = this.viewport) || void 0 === t || t.scroll(0, 0);
  }
  onResize() {
    this.option("breakpoints") && this.processOptions();
  }
  onBeforeTransform(t) {
    this.lp !== t.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = t.current.e;
  }
  onEndAnimation() {
    this.inTransition.size || this.emit("settle");
  }
  reInit() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.destroy(), this.state = F.Init, this.userOptions = t || this.userOptions, this.userPlugins = e || this.userPlugins, this.processOptions();
  }
  slideTo() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let {
      friction: e = this.option("friction"),
      transition: i = this.option("transition")
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.state === F.Destroy) return;
    t = parseInt((t || 0).toString()) || 0;
    const n = this.getPageFromIndex(t),
      {
        axis: s,
        isHorizontal: o,
        isRTL: a,
        pages: r,
        panzoom: l
      } = this,
      c = r.length,
      h = a && o ? 1 : -1;
    if (!l || !c) return;
    if (this.page !== n) {
      const e = new Event("beforeChange", {
        bubbles: !0,
        cancelable: !0
      });
      if (this.emit("beforeChange", e, t), e.defaultPrevented) return;
    }
    if (this.transitionTo(t, i)) return;
    let d = r[n].pos;
    if (this.isInfinite) {
      const e = this.contentDim,
        i = l.target[s] * h;
      if (2 === c) d += e * Math.floor(parseFloat(t + "") / 2);else {
        d = [d, d - e, d + e].reduce(function (t, e) {
          return Math.abs(e - i) < Math.abs(t - i) ? e : t;
        });
      }
    }
    d *= h, Math.abs(l.target[s] - d) < 1 || (l.panTo({
      x: o ? d : 0,
      y: o ? 0 : d,
      friction: e
    }), this.onChange(n));
  }
  slideToClosest(t) {
    if (this.panzoom) {
      const {
        pageIndex: e
      } = this.getPageFromPosition(this.panzoom.current[this.isHorizontal ? "e" : "f"]);
      this.slideTo(e, t);
    }
  }
  slideNext() {
    this.slideTo(this.page + 1);
  }
  slidePrev() {
    this.slideTo(this.page - 1);
  }
  clearTransitions() {
    this.inTransition.clear(), E(this.container, this.cn("inTransition"));
    const t = ["to-prev", "to-next", "from-prev", "from-next"];
    for (const e of this.slides) {
      const i = e.el;
      if (i) {
        i.removeEventListener(Z, this.onAnimationEnd), i.classList.remove(...t);
        const n = e.transition;
        n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
      }
    }
    this.manageSlideVisiblity();
  }
  addSlide(t, e) {
    var i, n, s, o;
    const a = this.panzoom,
      r = (null === (i = this.pages[this.page]) || void 0 === i ? void 0 : i.pos) || 0,
      l = (null === (n = this.pages[this.page]) || void 0 === n ? void 0 : n.dim) || 0,
      c = this.contentDim < this.viewportDim;
    let h = Array.isArray(e) ? e : [e];
    const d = [];
    for (const t of h) d.push(j(t));
    this.slides.splice(t, 0, ...d);
    for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
    for (const t of d) this.emit("beforeInitSlide", t, t.index);
    if (this.page >= t && (this.page += d.length), this.updateMetrics(), a) {
      const e = (null === (s = this.pages[this.page]) || void 0 === s ? void 0 : s.pos) || 0,
        i = (null === (o = this.pages[this.page]) || void 0 === o ? void 0 : o.dim) || 0,
        n = this.pages.length || 1,
        h = this.isRTL ? l - i : i - l,
        d = this.isRTL ? r - e : e - r;
      c && 1 === n ? (t <= this.page && (a.current[this.axis] -= h, a.target[this.axis] -= h), a.panTo({
        [this.isHorizontal ? "x" : "y"]: -1 * e
      })) : d && t <= this.page && (a.target[this.axis] -= d, a.current[this.axis] -= d, a.requestTick());
    }
    for (const t of d) this.emit("initSlide", t, t.index);
  }
  prependSlide(t) {
    this.addSlide(0, t);
  }
  appendSlide(t) {
    this.addSlide(this.slides.length, t);
  }
  removeSlide(t) {
    const e = this.slides.length;
    t = (t % e + e) % e, this.removeSlideEl(this.slides[t], !0), this.slides.splice(t, 1);
    for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
    this.updateMetrics(), this.slideTo(this.page, {
      friction: 0,
      transition: !1
    });
  }
  updateMetrics() {
    const {
      panzoom: e,
      viewport: i,
      track: n,
      slides: s,
      isHorizontal: o,
      isInfinite: a
    } = this;
    if (!n) return;
    const r = o ? "width" : "height",
      l = o ? "offsetWidth" : "offsetHeight";
    if (i) {
      let e = Math.max(i[l], t(i.getBoundingClientRect()[r], 1e3)),
        n = getComputedStyle(i),
        s = "padding",
        a = o ? "Right" : "Bottom";
      e -= parseFloat(n[s + (o ? "Left" : "Top")]) + parseFloat(n[s + a]), this.viewportDim = e;
    }
    let c,
      h = 0;
    for (const [e, i] of s.entries()) {
      let n = 0,
        o = 0;
      !i.el && c ? (n = c.dim, o = c.gap) : (({
        dim: n,
        gap: o
      } = this.getSlideMetrics(i)), c = i), n = t(n, 1e3), o = t(o, 1e3), i.dim = n, i.gap = o, i.pos = h, h += n, (a || e < s.length - 1) && (h += o);
    }
    h = t(h, 1e3), this.contentDim = h, e && (e.contentRect[r] = h, e.contentRect["e" === this.axis ? "fullWidth" : "fullHeight"] = h), this.pages = this.createPages(), this.pages = this.processPages(), this.state === F.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), this.emit("refresh");
  }
  getProgress(e) {
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    void 0 === e && (e = this.page);
    const s = this,
      o = s.panzoom,
      a = s.contentDim,
      r = s.pages[e] || 0;
    if (!r || !o) return e > this.page ? -1 : 1;
    let l = -1 * o.current.e,
      c = t((l - r.pos) / (1 * r.dim), 1e3),
      h = c,
      d = c;
    this.isInfinite && !0 !== n && (h = t((l - r.pos + a) / (1 * r.dim), 1e3), d = t((l - r.pos - a) / (1 * r.dim), 1e3));
    let u = [c, h, d].reduce(function (t, e) {
      return Math.abs(e) < Math.abs(t) ? e : t;
    });
    return i ? u : u > 1 ? 1 : u < -1 ? -1 : u;
  }
  setViewportHeight() {
    const {
      page: t,
      pages: e,
      viewport: i,
      isHorizontal: n
    } = this;
    if (!i || !e[t]) return;
    let s = 0;
    n && this.track && (this.track.style.height = "auto", e[t].slides.forEach(t => {
      t.el && (s = Math.max(s, t.el.offsetHeight));
    })), i.style.height = s ? `${s}px` : "";
  }
  getPageForSlide(t) {
    for (const e of this.pages) for (const i of e.slides) if (i.index === t) return e.index;
    return -1;
  }
  getVisibleSlides() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var e;
    const i = new Set();
    let {
      contentDim: n,
      viewportDim: s,
      pages: o,
      page: a
    } = this;
    n = n + (null === (e = this.slides[this.slides.length - 1]) || void 0 === e ? void 0 : e.gap) || 0;
    let r = 0;
    r = this.panzoom && this.panzoom.state !== m.Init && this.panzoom.state !== m.Destroy ? -1 * this.panzoom.current[this.axis] : o[a] && o[a].pos || 0, this.isInfinite && (r -= Math.floor(r / n) * n), this.isRTL && this.isHorizontal && (r *= -1);
    const l = r - s * t,
      c = r + s * (t + 1),
      h = this.isInfinite ? [-1, 0, 1] : [0];
    for (const t of this.slides) for (const e of h) {
      const s = t.pos + e * n,
        o = s + t.dim + t.gap;
      s < c && o > l && i.add(t);
    }
    return i;
  }
  getPageFromPosition(t) {
    var e;
    const {
        viewportDim: i,
        contentDim: n
      } = this,
      s = this.pages.length,
      o = this.slides.length,
      a = this.slides[o - 1];
    let r = 0,
      l = 0,
      c = 0;
    const h = this.option("center");
    h && (t += .5 * i), this.isInfinite || (t = Math.max((null === (e = this.slides[0]) || void 0 === e ? void 0 : e.pos) || 0, Math.min(t, a.pos)));
    const d = n + a.gap;
    c = Math.floor(t / d) || 0, t -= c * d;
    let u = a,
      f = this.slides.find(e => {
        const i = t + (u && !h ? .5 * u.dim : 0);
        return u = e, e.pos <= i && e.pos + e.dim + e.gap > i;
      });
    return f || (f = a), l = this.getPageForSlide(f.index), r = l + c * s, {
      page: r,
      pageIndex: l
    };
  }
  destroy() {
    if ([F.Destroy].includes(this.state)) return;
    this.state = F.Destroy;
    const {
        container: t,
        viewport: e,
        track: i,
        slides: n,
        panzoom: s
      } = this,
      o = this.option("classes");
    t.removeEventListener("click", this.onClick, {
      passive: !1,
      capture: !1
    }), t.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), s && (s.destroy(), this.panzoom = null), n && n.forEach(t => {
      this.removeSlideEl(t);
    }), this.detachPlugins(), e && (e.removeEventListener("scroll", this.onScroll), e.offsetParent && i && i.offsetParent && e.replaceWith(...i.childNodes));
    for (const [e, i] of Object.entries(o)) "container" !== e && i && t.classList.remove(i);
    this.track = null, this.viewport = null, this.page = 0, this.slides = [];
    const a = this.events.get("ready");
    this.events = new Map(), a && this.events.set("ready", a);
  }
}
Object.defineProperty(K, "Panzoom", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: R
}), Object.defineProperty(K, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: D
}), Object.defineProperty(K, "Plugins", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: V
});
const J = function (t) {
    if (!x(t)) return 0;
    const e = window.scrollY,
      i = window.innerHeight,
      n = e + i,
      s = t.getBoundingClientRect(),
      o = s.y + e,
      a = s.height,
      r = o + a;
    if (e > r || n < o) return 0;
    if (e < o && n > r) return 100;
    if (o < e && r > n) return 100;
    let l = a;
    o < e && (l -= e - o), r > n && (l -= r - n);
    const c = l / i * 100;
    return Math.round(c);
  },
  Q = !("undefined" == typeof window || !window.document || !window.document.createElement);
let tt;
const et = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),
  it = t => {
    if (t && Q) {
      void 0 === tt && document.createElement("div").focus({
        get preventScroll() {
          return tt = !0, !1;
        }
      });
      try {
        if (tt) t.focus({
          preventScroll: !0
        });else {
          const e = window.scrollY || document.body.scrollTop,
            i = window.scrollX || document.body.scrollLeft;
          t.focus(), document.body.scrollTo({
            top: e,
            left: i,
            behavior: "auto"
          });
        }
      } catch (t) {}
    }
  },
  nt = {
    dragToClose: !0,
    hideScrollbar: !0,
    Carousel: {
      classes: {
        container: "fancybox__carousel",
        viewport: "fancybox__viewport",
        track: "fancybox__track",
        slide: "fancybox__slide"
      }
    },
    contentClick: "toggleZoom",
    contentDblClick: !1,
    backdropClick: "close",
    animated: !0,
    idle: 3500,
    showClass: "f-zoomInUp",
    hideClass: "f-fadeOut",
    commonCaption: !1,
    parentEl: null,
    startIndex: 0,
    l10n: Object.assign(Object.assign({}, v), {
      CLOSE: "Close",
      NEXT: "Next",
      PREV: "Previous",
      MODAL: "You can close this modal content with the ESC key",
      ERROR: "Something Went Wrong, Please Try Again Later",
      IMAGE_ERROR: "Image Not Found",
      ELEMENT_NOT_FOUND: "HTML Element Not Found",
      AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
      AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
      IFRAME_ERROR: "Error Loading Page",
      TOGGLE_ZOOM: "Toggle zoom level",
      TOGGLE_THUMBS: "Toggle thumbnails",
      TOGGLE_SLIDESHOW: "Toggle slideshow",
      TOGGLE_FULLSCREEN: "Toggle full-screen mode",
      DOWNLOAD: "Download"
    }),
    tpl: {
      closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
      main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'
    },
    groupAll: !1,
    groupAttr: "data-fancybox",
    defaultType: "image",
    defaultDisplay: "block",
    autoFocus: !0,
    trapFocus: !0,
    placeFocusBack: !0,
    closeButton: "auto",
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "prev",
      ArrowDown: "next",
      ArrowRight: "next",
      ArrowLeft: "prev"
    },
    Fullscreen: {
      autoStart: !1
    },
    compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
    wheel: "zoom"
  };
var st, ot;
!function (t) {
  t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Closing = 2] = "Closing", t[t.CustomClosing = 3] = "CustomClosing", t[t.Destroy = 4] = "Destroy";
}(st || (st = {})), function (t) {
  t[t.Loading = 0] = "Loading", t[t.Opening = 1] = "Opening", t[t.Ready = 2] = "Ready", t[t.Closing = 3] = "Closing";
}(ot || (ot = {}));
const at = () => {
  queueMicrotask(() => {
    (() => {
      const {
          slug: t,
          index: e
        } = rt.parseURL(),
        i = ce.getInstance();
      if (i && !1 !== i.option("Hash")) {
        const n = i.carousel;
        if (t && n) {
          for (let e of n.slides) if (e.slug && e.slug === t) return n.slideTo(e.index);
          if (t === i.option("slug")) return n.slideTo(e - 1);
          const s = i.getSlide(),
            o = s && s.triggerEl && s.triggerEl.dataset;
          if (o && o.fancybox === t) return n.slideTo(e - 1);
        }
        rt.hasSilentClose = !0, i.close();
      }
      rt.startFromUrl();
    })();
  });
};
class rt extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "origHash", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ""
    }), Object.defineProperty(this, "timer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    });
  }
  onChange() {
    const t = this.instance,
      e = t.carousel;
    this.timer && clearTimeout(this.timer);
    const i = t.getSlide();
    if (!e || !i) return;
    const n = t.isOpeningSlide(i),
      s = new URL(document.URL).hash;
    let o,
      a = i.slug || void 0,
      r = i.triggerEl || void 0;
    o = a || this.instance.option("slug"), !o && r && r.dataset && (o = r.dataset.fancybox);
    let l = "";
    o && "true" !== o && (l = "#" + o + (!a && e.slides.length > 1 ? "-" + (i.index + 1) : "")), n && (this.origHash = s !== l ? s : ""), l && s !== l && (this.timer = setTimeout(() => {
      try {
        t.state === st.Ready && window.history[n ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + l);
      } catch (t) {}
    }, 300));
  }
  onClose() {
    if (this.timer && clearTimeout(this.timer), !0 !== rt.hasSilentClose) try {
      window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
    } catch (t) {}
  }
  attach() {
    const t = this.instance;
    t.on(["Carousel.ready", "Carousel.change"], this.onChange), t.on("close", this.onClose);
  }
  detach() {
    const t = this.instance;
    t.off(["Carousel.ready", "Carousel.change"], this.onChange), t.off("close", this.onClose);
  }
  static parseURL() {
    const t = window.location.hash.slice(1),
      e = t.split("-"),
      i = e[e.length - 1],
      n = i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10) || 1;
    return {
      hash: t,
      slug: e.join("-"),
      index: n
    };
  }
  static startFromUrl() {
    if (rt.hasSilentClose = !1, ce.getInstance() || !1 === ce.defaults.Hash) return;
    const {
      hash: t,
      slug: e,
      index: i
    } = rt.parseURL();
    if (!e) return;
    let n = document.querySelector(`[data-slug="${t}"]`);
    if (n && n.dispatchEvent(new CustomEvent("click", {
      bubbles: !0,
      cancelable: !0
    })), ce.getInstance()) return;
    const s = document.querySelectorAll(`[data-fancybox="${e}"]`);
    s.length && (n = s[i - 1], n && n.dispatchEvent(new CustomEvent("click", {
      bubbles: !0,
      cancelable: !0
    })));
  }
  static destroy() {
    window.removeEventListener("hashchange", at, !1);
  }
}
function lt() {
  window.addEventListener("hashchange", at, !1), setTimeout(() => {
    rt.startFromUrl();
  }, 500);
}
Object.defineProperty(rt, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {}
}), Object.defineProperty(rt, "hasSilentClose", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: !1
}), Q && (/complete|interactive|loaded/.test(document.readyState) ? lt() : document.addEventListener("DOMContentLoaded", lt));
const ct = "is-zooming-in";
class ht extends B {
  onCreateSlide(t, e, i) {
    const n = this.instance.optionFor(i, "src") || "";
    i.el && "image" === i.type && "string" == typeof n && this.setImage(i, n);
  }
  onRemoveSlide(t, e, i) {
    i.panzoom && i.panzoom.destroy(), i.panzoom = void 0, i.imageEl = void 0;
  }
  onChange(t, e, i, n) {
    E(this.instance.container, ct);
    for (const t of e.slides) {
      const e = t.panzoom;
      e && t.index !== i && e.reset(.35);
    }
  }
  onClose() {
    var t;
    const e = this.instance,
      i = e.container,
      n = e.getSlide();
    if (!i || !i.parentElement || !n) return;
    const {
      el: s,
      contentEl: o,
      panzoom: a,
      thumbElSrc: r
    } = n;
    if (!s || !r || !o || !a || a.isContentLoading || a.state === m.Init || a.state === m.Destroy) return;
    a.updateMetrics();
    let l = this.getZoomInfo(n);
    if (!l) return;
    this.instance.state = st.CustomClosing, i.classList.remove(ct), i.classList.add("is-zooming-out"), o.style.backgroundImage = `url('${r}')`;
    const c = i.getBoundingClientRect();
    1 === ((null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1) && Object.assign(i.style, {
      position: "absolute",
      top: `${window.scrollY}px`,
      left: `${window.scrollX}px`,
      bottom: "auto",
      right: "auto",
      width: `${c.width}px`,
      height: `${c.height}px`,
      overflow: "hidden"
    });
    const {
      x: h,
      y: d,
      scale: u,
      opacity: f
    } = l;
    if (f) {
      const t = ((t, e, i, n) => {
        const s = e - t,
          o = n - i;
        return e => i + ((e - t) / s * o || 0);
      })(a.scale, u, 1, 0);
      a.on("afterTransform", () => {
        o.style.opacity = t(a.scale) + "";
      });
    }
    a.on("endAnimation", () => {
      e.destroy();
    }), a.target.a = u, a.target.b = 0, a.target.c = 0, a.target.d = u, a.panTo({
      x: h,
      y: d,
      scale: u,
      friction: f ? .2 : .33,
      ignoreBounds: !0
    }), a.isResting && e.destroy();
  }
  setImage(t, e) {
    const i = this.instance;
    t.src = e, this.process(t, e).then(e => {
      const {
        contentEl: n,
        imageEl: s,
        thumbElSrc: o,
        el: a
      } = t;
      if (i.isClosing() || !n || !s) return;
      n.offsetHeight;
      const r = !!i.isOpeningSlide(t) && this.getZoomInfo(t);
      if (this.option("protected") && a) {
        a.addEventListener("contextmenu", t => {
          t.preventDefault();
        });
        const t = document.createElement("div");
        S(t, "fancybox-protected"), n.appendChild(t);
      }
      if (o && r) {
        const s = e.contentRect,
          a = Math.max(s.fullWidth, s.fullHeight);
        let c = null;
        !r.opacity && a > 1200 && (c = document.createElement("img"), S(c, "fancybox-ghost"), c.src = o, n.appendChild(c));
        const h = () => {
          c && (S(c, "f-fadeFastOut"), setTimeout(() => {
            c && (c.remove(), c = null);
          }, 200));
        };
        (l = o, new Promise((t, e) => {
          const i = new Image();
          i.onload = t, i.onerror = e, i.src = l;
        })).then(() => {
          i.hideLoading(t), t.state = ot.Opening, this.instance.emit("reveal", t), this.zoomIn(t).then(() => {
            h(), this.instance.done(t);
          }, () => {}), c && setTimeout(() => {
            h();
          }, a > 2500 ? 800 : 200);
        }, () => {
          i.hideLoading(t), i.revealContent(t);
        });
      } else {
        const n = this.optionFor(t, "initialSize"),
          s = this.optionFor(t, "zoom"),
          o = {
            event: i.prevMouseMoveEvent || i.options.event,
            friction: s ? .12 : 0
          };
        let a = i.optionFor(t, "showClass") || void 0,
          r = !0;
        i.isOpeningSlide(t) && ("full" === n ? e.zoomToFull(o) : "cover" === n ? e.zoomToCover(o) : "max" === n ? e.zoomToMax(o) : r = !1, e.stop("current")), r && a && (a = e.isDragging ? "f-fadeIn" : ""), i.hideLoading(t), i.revealContent(t, a);
      }
      var l;
    }, () => {
      i.setError(t, "{{IMAGE_ERROR}}");
    });
  }
  process(t, e) {
    return new Promise((i, s) => {
      var o;
      const a = this.instance,
        r = t.el;
      a.clearContent(t), a.showLoading(t);
      let l = this.optionFor(t, "content");
      if ("string" == typeof l && (l = n(l)), !l || !x(l)) {
        if (l = document.createElement("img"), l instanceof HTMLImageElement) {
          let i = "",
            n = t.caption;
          i = "string" == typeof n && n ? n.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${t.index + 1} of ${null === (o = a.carousel) || void 0 === o ? void 0 : o.pages.length}`, l.src = e || "", l.alt = i, l.draggable = !1, t.srcset && l.setAttribute("srcset", t.srcset), this.instance.isOpeningSlide(t) && (l.fetchPriority = "high");
        }
        t.sizes && l.setAttribute("sizes", t.sizes);
      }
      S(l, "fancybox-image"), t.imageEl = l, a.setContent(t, l, !1);
      t.panzoom = new R(r, u({
        transformParent: !0
      }, this.option("Panzoom") || {}, {
        content: l,
        width: a.optionFor(t, "width", "auto"),
        height: a.optionFor(t, "height", "auto"),
        wheel: () => {
          const t = a.option("wheel");
          return ("zoom" === t || "pan" == t) && t;
        },
        click: (e, i) => {
          var n, s;
          if (a.isCompact || a.isClosing()) return !1;
          if (t.index !== (null === (n = a.getSlide()) || void 0 === n ? void 0 : n.index)) return !1;
          if (i) {
            const t = i.composedPath()[0];
            if (["A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(t.nodeName)) return !1;
          }
          let o = !i || i.target && (null === (s = t.contentEl) || void 0 === s ? void 0 : s.contains(i.target));
          return a.option(o ? "contentClick" : "backdropClick") || !1;
        },
        dblClick: () => a.isCompact ? "toggleZoom" : a.option("contentDblClick") || !1,
        spinner: !1,
        panOnlyZoomed: !0,
        wheelLimit: 1 / 0,
        on: {
          ready: t => {
            i(t);
          },
          error: () => {
            s();
          },
          destroy: () => {
            s();
          }
        }
      }));
    });
  }
  zoomIn(t) {
    return new Promise((e, i) => {
      const n = this.instance,
        s = n.container,
        {
          panzoom: o,
          contentEl: a,
          el: r
        } = t;
      o && o.updateMetrics();
      const l = this.getZoomInfo(t);
      if (!(l && r && a && o && s)) return void i();
      const {
          x: c,
          y: h,
          scale: d,
          opacity: u
        } = l,
        f = () => {
          t.state !== ot.Closing && (u && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) + ""), o.scale >= 1 && o.scale > o.targetScale - .1 && e(o));
        },
        p = t => {
          (t.scale < .99 || t.scale > 1.01) && !t.isDragging || (E(s, ct), a.style.opacity = "", t.off("endAnimation", p), t.off("touchStart", p), t.off("afterTransform", f), e(t));
        };
      o.on("endAnimation", p), o.on("touchStart", p), o.on("afterTransform", f), o.on(["error", "destroy"], () => {
        i();
      }), o.panTo({
        x: c,
        y: h,
        scale: d,
        friction: 0,
        ignoreBounds: !0
      }), o.stop("current");
      const g = {
          event: "mousemove" === o.panMode ? n.prevMouseMoveEvent || n.options.event : void 0
        },
        m = this.optionFor(t, "initialSize");
      S(s, ct), n.hideLoading(t), "full" === m ? o.zoomToFull(g) : "cover" === m ? o.zoomToCover(g) : "max" === m ? o.zoomToMax(g) : o.reset(.172);
    });
  }
  getZoomInfo(t) {
    var e;
    const {
      el: i,
      imageEl: n,
      thumbEl: s,
      panzoom: o
    } = t;
    if (!i || !n || !s || !o || J(s) < 3 || !this.optionFor(t, "zoom") || this.instance.state === st.Destroy) return !1;
    if (1 !== ((null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1)) return !1;
    let {
        top: a,
        left: r,
        width: l,
        height: c
      } = s.getBoundingClientRect(),
      {
        top: h,
        left: d,
        fitWidth: u,
        fitHeight: f
      } = o.contentRect;
    if (!(l && c && u && f)) return !1;
    const p = o.container.getBoundingClientRect();
    d += p.left, h += p.top;
    const g = -1 * (d + .5 * u - (r + .5 * l)),
      m = -1 * (h + .5 * f - (a + .5 * c)),
      b = l / u;
    let v = this.option("zoomOpacity") || !1;
    return "auto" === v && (v = Math.abs(l / c - u / f) > .1), {
      x: g,
      y: m,
      scale: b,
      opacity: v
    };
  }
  attach() {
    const t = this,
      e = t.instance;
    e.on("Carousel.change", t.onChange), e.on("Carousel.createSlide", t.onCreateSlide), e.on("Carousel.removeSlide", t.onRemoveSlide), e.on("close", t.onClose);
  }
  detach() {
    const t = this,
      e = t.instance;
    e.off("Carousel.change", t.onChange), e.off("Carousel.createSlide", t.onCreateSlide), e.off("Carousel.removeSlide", t.onRemoveSlide), e.off("close", t.onClose);
  }
}
Object.defineProperty(ht, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    initialSize: "fit",
    Panzoom: {
      maxScale: 1
    },
    protected: !1,
    zoom: !0,
    zoomOpacity: "auto"
  }
}), "function" == typeof SuppressedError && SuppressedError;
const dt = "html",
  ut = "image",
  ft = "map",
  pt = "youtube",
  gt = "vimeo",
  mt = "html5video",
  bt = function (t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const i = new URL(t),
      n = new URLSearchParams(i.search),
      s = new URLSearchParams();
    for (const [t, i] of [...n, ...Object.entries(e)]) {
      let e = i.toString();
      "t" === t ? s.set("start", parseInt(e).toString()) : s.set(t, e);
    }
    let o = s.toString(),
      a = t.match(/#t=((.*)?\d+s)/);
    return a && (o += `#t=${a[1]}`), o;
  },
  vt = {
    ajax: null,
    autoSize: !0,
    iframeAttr: {
      allow: "autoplay; fullscreen",
      scrolling: "auto"
    },
    preload: !0,
    videoAutoplay: !0,
    videoRatio: 16 / 9,
    videoTpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
    videoFormat: "",
    vimeo: {
      byline: 1,
      color: "00adef",
      controls: 1,
      dnt: 1,
      muted: 0
    },
    youtube: {
      controls: 1,
      enablejsapi: 1,
      nocookie: 1,
      rel: 0,
      fs: 1
    }
  },
  yt = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo"];
class wt extends B {
  onBeforeInitSlide(t, e, i) {
    this.processType(i);
  }
  onCreateSlide(t, e, i) {
    this.setContent(i);
  }
  onClearContent(t, e) {
    e.xhr && (e.xhr.abort(), e.xhr = null);
    const i = e.iframeEl;
    i && (i.onload = i.onerror = null, i.src = "//about:blank", e.iframeEl = null);
    const n = e.contentEl,
      s = e.placeholderEl;
    if ("inline" === e.type && n && s) n.classList.remove("fancybox__content"), "none" !== n.style.display && (n.style.display = "none"), s.parentNode && s.parentNode.insertBefore(n, s), s.remove(), e.contentEl = void 0, e.placeholderEl = void 0;else for (; e.el && e.el.firstChild;) e.el.removeChild(e.el.firstChild);
  }
  onSelectSlide(t, e, i) {
    i.state === ot.Ready && this.playVideo();
  }
  onUnselectSlide(t, e, i) {
    var n, s;
    if (i.type === mt) {
      try {
        null === (s = null === (n = i.el) || void 0 === n ? void 0 : n.querySelector("video")) || void 0 === s || s.pause();
      } catch (t) {}
      return;
    }
    let o;
    i.type === gt ? o = {
      method: "pause",
      value: "true"
    } : i.type === pt && (o = {
      event: "command",
      func: "pauseVideo"
    }), o && i.iframeEl && i.iframeEl.contentWindow && i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"), i.poller && clearTimeout(i.poller);
  }
  onDone(t, e) {
    t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
  }
  onRefresh(t, e) {
    e.slides.forEach(t => {
      t.el && (this.resizeIframe(t), this.setAspectRatio(t));
    });
  }
  onMessage(t) {
    try {
      let e = JSON.parse(t.data);
      if ("https://player.vimeo.com" === t.origin) {
        if ("ready" === e.event) for (let e of Array.from(document.getElementsByClassName("fancybox__iframe"))) e instanceof HTMLIFrameElement && e.contentWindow === t.source && (e.dataset.ready = "true");
      } else if (t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e.event) {
        const t = document.getElementById(e.id);
        t && (t.dataset.ready = "true");
      }
    } catch (t) {}
  }
  loadAjaxContent(t) {
    const e = this.instance.optionFor(t, "src") || "";
    this.instance.showLoading(t);
    const i = this.instance,
      n = new XMLHttpRequest();
    i.showLoading(t), n.onreadystatechange = function () {
      n.readyState === XMLHttpRequest.DONE && i.state === st.Ready && (i.hideLoading(t), 200 === n.status ? i.setContent(t, n.responseText) : i.setError(t, 404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
    };
    const s = t.ajax || null;
    n.open(s ? "POST" : "GET", e + ""), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(s), t.xhr = n;
  }
  setInlineContent(t) {
    let e = null;
    if (x(t.src)) e = t.src;else if ("string" == typeof t.src) {
      const i = t.src.split("#", 2).pop();
      e = i ? document.getElementById(i) : null;
    }
    if (e) {
      if ("clone" === t.type || e.closest(".fancybox__slide")) {
        e = e.cloneNode(!0);
        const i = e.dataset.animationName;
        i && (e.classList.remove(i), delete e.dataset.animationName);
        let n = e.getAttribute("id");
        n = n ? `${n}--clone` : `clone-${this.instance.id}-${t.index}`, e.setAttribute("id", n);
      } else if (e.parentNode) {
        const i = document.createElement("div");
        i.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(i, e), t.placeholderEl = i;
      }
      this.instance.setContent(t, e);
    } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}");
  }
  setIframeContent(t) {
    const {
      src: e,
      el: i
    } = t;
    if (!e || "string" != typeof e || !i) return;
    i.classList.add("is-loading");
    const n = this.instance,
      s = document.createElement("iframe");
    s.className = "fancybox__iframe", s.setAttribute("id", `fancybox__iframe_${n.id}_${t.index}`);
    for (const [e, i] of Object.entries(this.optionFor(t, "iframeAttr") || {})) s.setAttribute(e, i);
    s.onerror = () => {
      n.setError(t, "{{IFRAME_ERROR}}");
    }, t.iframeEl = s;
    const o = this.optionFor(t, "preload");
    if ("iframe" !== t.type || !1 === o) return s.setAttribute("src", t.src + ""), n.setContent(t, s, !1), this.resizeIframe(t), void n.revealContent(t);
    n.showLoading(t), s.onload = () => {
      if (!s.src.length) return;
      const e = "true" !== s.dataset.ready;
      s.dataset.ready = "true", this.resizeIframe(t), e ? n.revealContent(t) : n.hideLoading(t);
    }, s.setAttribute("src", e), n.setContent(t, s, !1);
  }
  resizeIframe(t) {
    const {
      type: e,
      iframeEl: i
    } = t;
    if (e === pt || e === gt) return;
    const n = null == i ? void 0 : i.parentElement;
    if (!i || !n) return;
    let s = t.autoSize;
    void 0 === s && (s = this.optionFor(t, "autoSize"));
    let o = t.width || 0,
      a = t.height || 0;
    o && a && (s = !1);
    const r = n && n.style;
    if (!1 !== t.preload && !1 !== s && r) try {
      const t = window.getComputedStyle(n),
        e = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
        s = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom),
        l = i.contentWindow;
      if (l) {
        const t = l.document,
          i = t.getElementsByTagName(dt)[0],
          n = t.body;
        r.width = "", n.style.overflow = "hidden", o = o || i.scrollWidth + e, r.width = `${o}px`, n.style.overflow = "", r.flex = "0 0 auto", r.height = `${n.scrollHeight}px`, a = i.scrollHeight + s;
      }
    } catch (t) {}
    if (o || a) {
      const t = {
        flex: "0 1 auto",
        width: "",
        height: ""
      };
      o && "auto" !== o && (t.width = `${o}px`), a && "auto" !== a && (t.height = `${a}px`), Object.assign(r, t);
    }
  }
  playVideo() {
    const t = this.instance.getSlide();
    if (!t) return;
    const {
      el: e
    } = t;
    if (!e || !e.offsetParent) return;
    if (!this.optionFor(t, "videoAutoplay")) return;
    if (t.type === mt) try {
      const t = e.querySelector("video");
      if (t) {
        const e = t.play();
        void 0 !== e && e.then(() => {}).catch(e => {
          t.muted = !0, t.play();
        });
      }
    } catch (t) {}
    if (t.type !== pt && t.type !== gt) return;
    const i = () => {
      if (t.iframeEl && t.iframeEl.contentWindow) {
        let e;
        if ("true" === t.iframeEl.dataset.ready) return e = t.type === pt ? {
          event: "command",
          func: "playVideo"
        } : {
          method: "play",
          value: "true"
        }, e && t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"), void (t.poller = void 0);
        t.type === pt && (e = {
          event: "listening",
          id: t.iframeEl.getAttribute("id")
        }, t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"));
      }
      t.poller = setTimeout(i, 250);
    };
    i();
  }
  processType(t) {
    if (t.html) return t.type = dt, t.src = t.html, void (t.html = "");
    const e = this.instance.optionFor(t, "src", "");
    if (!e || "string" != typeof e) return;
    let i = t.type,
      n = null;
    if (n = e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
      const s = this.optionFor(t, pt),
        {
          nocookie: o
        } = s,
        a = function (t, e) {
          var i = {};
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
          }
          return i;
        }(s, ["nocookie"]),
        r = `www.youtube${o ? "-nocookie" : ""}.com`,
        l = bt(e, a),
        c = encodeURIComponent(n[2]);
      t.videoId = c, t.src = `https://${r}/embed/${c}?${l}`, t.thumbSrc = t.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`, i = pt;
    } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
      const s = bt(e, this.optionFor(t, gt)),
        o = encodeURIComponent(n[1]),
        a = n[4] || "";
      t.videoId = o, t.src = `https://player.vimeo.com/video/${o}?${a ? `h=${a}${s ? "&" : ""}` : ""}${s}`, i = gt;
    }
    if (!i && t.triggerEl) {
      const e = t.triggerEl.dataset.type;
      yt.includes(e) && (i = e);
    }
    i || "string" == typeof e && ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = mt, t.videoFormat = t.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = ut : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `https://maps.google.${n[1]}/?ll=${(n[2] ? n[2] + "&z=" + Math.floor(parseFloat(n[3])) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&")}&output=${n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, i = ft) : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `https://maps.google.${n[1]}/maps?q=${n[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, i = ft), i = i || this.instance.option("defaultType"), t.type = i, i === ut && (t.thumbSrc = t.thumbSrc || t.src);
  }
  setContent(t) {
    const e = this.instance.optionFor(t, "src") || "";
    if (t && t.type && e) {
      switch (t.type) {
        case dt:
          this.instance.setContent(t, e);
          break;
        case mt:
          const i = this.option("videoTpl");
          i && this.instance.setContent(t, i.replace(/\{\{src\}\}/gi, e + "").replace(/\{\{format\}\}/gi, this.optionFor(t, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || ""));
          break;
        case "inline":
        case "clone":
          this.setInlineContent(t);
          break;
        case "ajax":
          this.loadAjaxContent(t);
          break;
        case "pdf":
        case ft:
        case pt:
        case gt:
          t.preload = !1;
        case "iframe":
          this.setIframeContent(t);
      }
      this.setAspectRatio(t);
    }
  }
  setAspectRatio(t) {
    const e = t.contentEl;
    if (!(t.el && e && t.type && [pt, gt, mt].includes(t.type))) return;
    let i,
      n = t.width || "auto",
      s = t.height || "auto";
    if ("auto" === n || "auto" === s) {
      i = this.optionFor(t, "videoRatio");
      const e = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
      i = e && e.length > 2 ? parseFloat(e[1]) / parseFloat(e[2]) : parseFloat(i + "");
    } else n && s && (i = n / s);
    if (!i) return;
    e.style.aspectRatio = "", e.style.width = "", e.style.height = "", e.offsetHeight;
    const o = e.getBoundingClientRect(),
      a = o.width || 1,
      r = o.height || 1;
    e.style.aspectRatio = i + "", i < a / r ? (s = "auto" === s ? r : Math.min(r, s), e.style.width = "auto", e.style.height = `${s}px`) : (n = "auto" === n ? a : Math.min(a, n), e.style.width = `${n}px`, e.style.height = "auto");
  }
  attach() {
    const t = this,
      e = t.instance;
    e.on("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.on("Carousel.createSlide", t.onCreateSlide), e.on("Carousel.selectSlide", t.onSelectSlide), e.on("Carousel.unselectSlide", t.onUnselectSlide), e.on("Carousel.Panzoom.refresh", t.onRefresh), e.on("done", t.onDone), e.on("clearContent", t.onClearContent), window.addEventListener("message", t.onMessage);
  }
  detach() {
    const t = this,
      e = t.instance;
    e.off("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.off("Carousel.createSlide", t.onCreateSlide), e.off("Carousel.selectSlide", t.onSelectSlide), e.off("Carousel.unselectSlide", t.onUnselectSlide), e.off("Carousel.Panzoom.refresh", t.onRefresh), e.off("done", t.onDone), e.off("clearContent", t.onClearContent), window.removeEventListener("message", t.onMessage);
  }
}
Object.defineProperty(wt, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: vt
});
const xt = "play",
  Et = "pause",
  St = "ready";
class Pt extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "state", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: St
    }), Object.defineProperty(this, "inHover", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "timer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "progressBar", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    });
  }
  get isActive() {
    return this.state !== St;
  }
  onReady(t) {
    this.option("autoStart") && (t.isInfinite || t.page < t.pages.length - 1) && this.start();
  }
  onChange() {
    var t;
    (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) || (this.removeProgressBar(), this.pause());
  }
  onSettle() {
    this.resume();
  }
  onVisibilityChange() {
    "visible" === document.visibilityState ? this.resume() : this.pause();
  }
  onMouseEnter() {
    this.inHover = !0, this.pause();
  }
  onMouseLeave() {
    var t;
    this.inHover = !1, (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) && this.resume();
  }
  onTimerEnd() {
    const t = this.instance;
    "play" === this.state && (t.isInfinite || t.page !== t.pages.length - 1 ? t.slideNext() : t.slideTo(0));
  }
  removeProgressBar() {
    this.progressBar && (this.progressBar.remove(), this.progressBar = null);
  }
  createProgressBar() {
    var t;
    if (!this.option("showProgress")) return null;
    this.removeProgressBar();
    const e = this.instance,
      i = (null === (t = e.pages[e.page]) || void 0 === t ? void 0 : t.slides) || [];
    let n = this.option("progressParentEl");
    if (n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n) return null;
    const s = document.createElement("div");
    return S(s, "f-progress"), n.prepend(s), this.progressBar = s, s.offsetHeight, s;
  }
  set() {
    const t = this,
      e = t.instance;
    if (e.pages.length < 2) return;
    if (t.timer) return;
    const i = t.option("timeout");
    t.state = xt, S(e.container, "has-autoplay");
    let n = t.createProgressBar();
    n && (n.style.transitionDuration = `${i}ms`, n.style.transform = "scaleX(1)"), t.timer = setTimeout(() => {
      t.timer = null, t.inHover || t.onTimerEnd();
    }, i), t.emit("set");
  }
  clear() {
    const t = this;
    t.timer && (clearTimeout(t.timer), t.timer = null), t.removeProgressBar();
  }
  start() {
    const t = this;
    if (t.set(), t.state !== St) {
      if (t.option("pauseOnHover")) {
        const e = t.instance.container;
        e.addEventListener("mouseenter", t.onMouseEnter, !1), e.addEventListener("mouseleave", t.onMouseLeave, !1);
      }
      document.addEventListener("visibilitychange", t.onVisibilityChange, !1), t.emit("start");
    }
  }
  stop() {
    const t = this,
      e = t.state,
      i = t.instance.container;
    t.clear(), t.state = St, i.removeEventListener("mouseenter", t.onMouseEnter, !1), i.removeEventListener("mouseleave", t.onMouseLeave, !1), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), E(i, "has-autoplay"), e !== St && t.emit("stop");
  }
  pause() {
    const t = this;
    t.state === xt && (t.state = Et, t.clear(), t.emit(Et));
  }
  resume() {
    const t = this,
      e = t.instance;
    if (e.isInfinite || e.page !== e.pages.length - 1) {
      if (t.state !== xt) {
        if (t.state === Et && !t.inHover) {
          const e = new Event("resume", {
            bubbles: !0,
            cancelable: !0
          });
          t.emit("resume", e), e.defaultPrevented || t.set();
        }
      } else t.set();
    } else t.stop();
  }
  toggle() {
    this.state === xt || this.state === Et ? this.stop() : this.start();
  }
  attach() {
    const t = this,
      e = t.instance;
    e.on("ready", t.onReady), e.on("Panzoom.startAnimation", t.onChange), e.on("Panzoom.endAnimation", t.onSettle), e.on("Panzoom.touchMove", t.onChange);
  }
  detach() {
    const t = this,
      e = t.instance;
    e.off("ready", t.onReady), e.off("Panzoom.startAnimation", t.onChange), e.off("Panzoom.endAnimation", t.onSettle), e.off("Panzoom.touchMove", t.onChange), t.stop();
  }
}
Object.defineProperty(Pt, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    autoStart: !0,
    pauseOnHover: !0,
    progressParentEl: null,
    showProgress: !0,
    timeout: 3e3
  }
});
class Ct extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ref", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    });
  }
  onPrepare(t) {
    const e = t.carousel;
    if (!e) return;
    const i = t.container;
    i && (e.options.Autoplay = u({
      autoStart: !1
    }, this.option("Autoplay") || {}, {
      pauseOnHover: !1,
      timeout: this.option("timeout"),
      progressParentEl: () => this.option("progressParentEl") || null,
      on: {
        start: () => {
          t.emit("startSlideshow");
        },
        set: e => {
          var n;
          i.classList.add("has-slideshow"), (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) !== ot.Ready && e.pause();
        },
        stop: () => {
          i.classList.remove("has-slideshow"), t.isCompact || t.endIdle(), t.emit("endSlideshow");
        },
        resume: (e, i) => {
          var n, s, o;
          !i || !i.cancelable || (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) === ot.Ready && (null === (o = null === (s = t.carousel) || void 0 === s ? void 0 : s.panzoom) || void 0 === o ? void 0 : o.isResting) || i.preventDefault();
        }
      }
    }), e.attachPlugins({
      Autoplay: Pt
    }), this.ref = e.plugins.Autoplay);
  }
  onReady(t) {
    const e = t.carousel,
      i = this.ref;
    i && e && this.option("playOnStart") && (e.isInfinite || e.page < e.pages.length - 1) && i.start();
  }
  onDone(t, e) {
    const i = this.ref,
      n = t.carousel;
    if (!i || !n) return;
    const s = e.panzoom;
    s && s.on("startAnimation", () => {
      t.isCurrentSlide(e) && i.stop();
    }), t.isCurrentSlide(e) && i.resume();
  }
  onKeydown(t, e) {
    var i;
    const n = this.ref;
    n && e === this.option("key") && "BUTTON" !== (null === (i = document.activeElement) || void 0 === i ? void 0 : i.nodeName) && n.toggle();
  }
  attach() {
    const t = this,
      e = t.instance;
    e.on("Carousel.init", t.onPrepare), e.on("Carousel.ready", t.onReady), e.on("done", t.onDone), e.on("keydown", t.onKeydown);
  }
  detach() {
    const t = this,
      e = t.instance;
    e.off("Carousel.init", t.onPrepare), e.off("Carousel.ready", t.onReady), e.off("done", t.onDone), e.off("keydown", t.onKeydown);
  }
}
Object.defineProperty(Ct, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    key: " ",
    playOnStart: !1,
    progressParentEl: t => {
      var e;
      return (null === (e = t.instance.container) || void 0 === e ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t.instance.container;
    },
    timeout: 3e3
  }
});
const Tt = {
  classes: {
    container: "f-thumbs f-carousel__thumbs",
    viewport: "f-thumbs__viewport",
    track: "f-thumbs__track",
    slide: "f-thumbs__slide",
    isResting: "is-resting",
    isSelected: "is-selected",
    isLoading: "is-loading",
    hasThumbs: "has-thumbs"
  },
  minCount: 2,
  parentEl: null,
  thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
  type: "modern"
};
var Mt;
!function (t) {
  t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Hidden = 2] = "Hidden";
}(Mt || (Mt = {}));
const Ot = "isResting",
  At = "thumbWidth",
  Lt = "thumbHeight",
  zt = "thumbClipWidth";
let Rt = class extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "type", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "modern"
    }), Object.defineProperty(this, "container", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "track", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "carousel", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "thumbWidth", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "thumbClipWidth", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "thumbHeight", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "thumbGap", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "thumbExtraGap", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "state", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Mt.Init
    });
  }
  get isModern() {
    return "modern" === this.type;
  }
  onInitSlide(t, e) {
    const i = e.el ? e.el.dataset : void 0;
    i && (e.thumbSrc = i.thumbSrc || e.thumbSrc || "", e[zt] = parseFloat(i[zt] || "") || e[zt] || 0, e[Lt] = parseFloat(i.thumbHeight || "") || e[Lt] || 0), this.addSlide(e);
  }
  onInitSlides() {
    this.build();
  }
  onChange() {
    var t;
    if (!this.isModern) return;
    const e = this.container,
      i = this.instance,
      n = i.panzoom,
      s = this.carousel,
      a = s ? s.panzoom : null,
      r = i.page;
    if (n && s && a) {
      if (n.isDragging) {
        E(e, this.cn(Ot));
        let n = (null === (t = s.pages[r]) || void 0 === t ? void 0 : t.pos) || 0;
        n += i.getProgress(r) * (this[zt] + this.thumbGap);
        let o = a.getBounds();
        -1 * n > o.x.min && -1 * n < o.x.max && a.panTo({
          x: -1 * n,
          friction: .12
        });
      } else o(e, this.cn(Ot), n.isResting);
      this.shiftModern();
    }
  }
  onRefresh() {
    this.updateProps();
    for (const t of this.instance.slides || []) this.resizeModernSlide(t);
    this.shiftModern();
  }
  isDisabled() {
    const t = this.option("minCount") || 0;
    if (t) {
      const e = this.instance;
      let i = 0;
      for (const t of e.slides || []) t.thumbSrc && i++;
      if (i < t) return !0;
    }
    const e = this.option("type");
    return ["modern", "classic"].indexOf(e) < 0;
  }
  getThumb(t) {
    const e = this.option("thumbTpl") || "";
    return {
      html: this.instance.localize(e, [["%i", t.index], ["%d", t.index + 1], ["%s", t.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])
    };
  }
  addSlide(t) {
    const e = this.carousel;
    e && e.addSlide(t.index, this.getThumb(t));
  }
  getSlides() {
    const t = [];
    for (const e of this.instance.slides || []) t.push(this.getThumb(e));
    return t;
  }
  resizeModernSlide(t) {
    this.isModern && (t[At] = t[zt] && t[Lt] ? Math.round(this[Lt] * (t[zt] / t[Lt])) : this[At]);
  }
  updateProps() {
    const t = this.container;
    if (!t) return;
    const e = e => parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-" + e)) || 0;
    this.thumbGap = e("gap"), this.thumbExtraGap = e("extra-gap"), this[At] = e("width") || 40, this[zt] = e("clip-width") || 40, this[Lt] = e("height") || 40;
  }
  build() {
    const t = this;
    if (t.state !== Mt.Init) return;
    if (t.isDisabled()) return;
    const e = t.instance,
      i = e.container,
      n = t.getSlides(),
      s = t.option("type");
    t.type = s;
    const o = document.createElement("div");
    S(o, t.cn("container")), S(o, `is-${s}`);
    const a = t.option("parentEl");
    a ? a.appendChild(o) : i.after(o), S(i, t.cn("hasThumbs")), t.container = o, t.updateProps();
    const r = document.createElement("div");
    S(r, t.cn("track")), o.appendChild(r), t.track = r;
    const l = u({}, {
        track: r,
        infinite: !1,
        center: !0,
        fill: "classic" === s,
        dragFree: !0,
        slidesPerPage: 1,
        transition: !1,
        preload: .25,
        friction: .12,
        Panzoom: {
          maxVelocity: 0
        },
        Dots: !1,
        Navigation: !1,
        classes: {
          container: "f-thumbs",
          viewport: "f-thumbs__viewport",
          track: "f-thumbs__track",
          slide: "f-thumbs__slide"
        }
      }, t.option("Carousel") || {}, {
        Sync: {
          target: e
        },
        slides: n
      }),
      c = new e.constructor(o, l);
    c.on("createSlide", (e, i) => {
      t.setProps(i.index), t.emit("createSlide", i, i.el);
    }), c.on("ready", () => {
      t.shiftModern(), t.emit("ready");
    }), c.on("refresh", () => {
      t.shiftModern();
    }), c.on("Panzoom.click", (e, i, n) => {
      t.onClick(n);
    }), t.carousel = c, t.state = Mt.Ready;
  }
  onClick(t) {
    t.preventDefault(), t.stopPropagation();
    const e = this.instance,
      {
        pages: i,
        page: n
      } = e,
      s = t => {
        if (t) {
          const e = t.closest("[data-carousel-index]");
          if (e) return [parseInt(e.dataset.carouselIndex || "", 10) || 0, e];
        }
        return [-1, void 0];
      },
      o = (t, e) => {
        const i = document.elementFromPoint(t, e);
        return i ? s(i) : [-1, void 0];
      };
    let [a, r] = s(t.target);
    if (a > -1) return;
    const l = this[zt],
      c = t.clientX,
      h = t.clientY;
    let [d, u] = o(c - l, h),
      [f, p] = o(c + l, h);
    u && p ? (a = Math.abs(c - u.getBoundingClientRect().right) < Math.abs(c - p.getBoundingClientRect().left) ? d : f, a === n && (a = a === d ? f : d)) : u ? a = d : p && (a = f), a > -1 && i[a] && e.slideTo(a);
  }
  getShift(t) {
    var e;
    const i = this,
      {
        instance: n
      } = i,
      s = i.carousel;
    if (!n || !s) return 0;
    const o = i[At],
      a = i[zt],
      r = i.thumbGap,
      l = i.thumbExtraGap;
    if (!(null === (e = s.slides[t]) || void 0 === e ? void 0 : e.el)) return 0;
    const c = .5 * (o - a),
      h = n.pages.length - 1;
    let d = n.getProgress(0),
      u = n.getProgress(h),
      f = n.getProgress(t, !1, !0),
      p = 0,
      g = c + l + r;
    const m = d < 0 && d > -1,
      b = u > 0 && u < 1;
    return 0 === t ? (p = g * Math.abs(d), b && 1 === d && (p -= g * Math.abs(u))) : t === h ? (p = g * Math.abs(u) * -1, m && -1 === u && (p += g * Math.abs(d))) : m || b ? (p = -1 * g, p += g * Math.abs(d), p += g * (1 - Math.abs(u))) : p = g * f, p;
  }
  setProps(e) {
    const i = this;
    if (!i.isModern) return;
    const {
        instance: n
      } = i,
      s = i.carousel;
    if (n && s) {
      const o = s.slides[e].el;
      if (o && o.childNodes.length) {
        let s = t(1 - Math.abs(n.getProgress(e))),
          a = t(i.getShift(e));
        o.style.setProperty("--progress", s ? s + "" : ""), o.style.setProperty("--shift", a + "");
      }
    }
  }
  shiftModern() {
    const t = this;
    if (!t.isModern) return;
    const {
        instance: e,
        track: i
      } = t,
      n = e.panzoom,
      s = t.carousel;
    if (!(e && i && n && s)) return;
    if (n.state === m.Init || n.state === m.Destroy) return;
    for (const i of e.slides) t.setProps(i.index);
    let o = (t[zt] + t.thumbGap) * (s.slides.length || 0);
    i.style.setProperty("--width", o + "");
  }
  cleanup() {
    const t = this;
    t.carousel && t.carousel.destroy(), t.carousel = null, t.container && t.container.remove(), t.container = null, t.track && t.track.remove(), t.track = null, t.state = Mt.Init, E(t.instance.container, t.cn("hasThumbs"));
  }
  attach() {
    const t = this,
      e = t.instance;
    e.on("initSlide", t.onInitSlide), e.state === F.Init ? e.on("initSlides", t.onInitSlides) : t.onInitSlides(), e.on(["change", "Panzoom.afterTransform"], t.onChange), e.on("Panzoom.refresh", t.onRefresh);
  }
  detach() {
    const t = this,
      e = t.instance;
    e.off("initSlide", t.onInitSlide), e.off("initSlides", t.onInitSlides), e.off(["change", "Panzoom.afterTransform"], t.onChange), e.off("Panzoom.refresh", t.onRefresh), t.cleanup();
  }
};
Object.defineProperty(Rt, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: Tt
});
const kt = Object.assign(Object.assign({}, Tt), {
    key: "t",
    showOnStart: !0,
    parentEl: null
  }),
  It = "is-masked",
  Dt = "aria-hidden";
class Ft extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ref", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "hidden", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    });
  }
  get isEnabled() {
    const t = this.ref;
    return t && !t.isDisabled();
  }
  get isHidden() {
    return this.hidden;
  }
  onClick(t, e) {
    e.stopPropagation();
  }
  onCreateSlide(t, e) {
    var i, n, s;
    const o = (null === (s = null === (n = null === (i = this.instance) || void 0 === i ? void 0 : i.carousel) || void 0 === n ? void 0 : n.slides[e.index]) || void 0 === s ? void 0 : s.type) || "",
      a = e.el;
    if (a && o) {
      let t = `for-${o}`;
      ["video", "youtube", "vimeo", "html5video"].includes(o) && (t += " for-video"), S(a, t);
    }
  }
  onInit() {
    var t;
    const e = this,
      i = e.instance,
      n = i.carousel;
    if (e.ref || !n) return;
    const s = e.option("parentEl") || i.footer || i.container;
    if (!s) return;
    const o = u({}, e.options, {
      parentEl: s,
      classes: {
        container: "f-thumbs fancybox__thumbs"
      },
      Carousel: {
        Sync: {
          friction: i.option("Carousel.friction") || 0
        }
      },
      on: {
        ready: t => {
          const i = t.container;
          i && this.hidden && (e.refresh(), i.style.transition = "none", e.hide(), i.offsetHeight, queueMicrotask(() => {
            i.style.transition = "", e.show();
          }));
        }
      }
    });
    o.Carousel = o.Carousel || {}, o.Carousel.on = u((null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) || {}, {
      click: this.onClick,
      createSlide: this.onCreateSlide
    }), n.options.Thumbs = o, n.attachPlugins({
      Thumbs: Rt
    }), e.ref = n.plugins.Thumbs, e.option("showOnStart") || (e.ref.state = Mt.Hidden, e.hidden = !0);
  }
  onResize() {
    var t;
    const e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;
    e && (e.style.maxHeight = "");
  }
  onKeydown(t, e) {
    const i = this.option("key");
    i && i === e && this.toggle();
  }
  toggle() {
    const t = this.ref;
    if (t && !t.isDisabled()) return t.state === Mt.Hidden ? (t.state = Mt.Init, void t.build()) : void (this.hidden ? this.show() : this.hide());
  }
  show() {
    const t = this.ref;
    if (!t || t.isDisabled()) return;
    const e = t.container;
    e && (this.refresh(), e.offsetHeight, e.removeAttribute(Dt), e.classList.remove(It), this.hidden = !1);
  }
  hide() {
    const t = this.ref,
      e = t && t.container;
    e && (this.refresh(), e.offsetHeight, e.classList.add(It), e.setAttribute(Dt, "true")), this.hidden = !0;
  }
  refresh() {
    const t = this.ref;
    if (!t || !t.state) return;
    const e = t.container,
      i = (null == e ? void 0 : e.firstChild) || null;
    e && i && i.childNodes.length && (e.style.maxHeight = `${i.getBoundingClientRect().height}px`);
  }
  attach() {
    const t = this,
      e = t.instance;
    e.state === st.Init ? e.on("Carousel.init", t.onInit) : t.onInit(), e.on("resize", t.onResize), e.on("keydown", t.onKeydown);
  }
  detach() {
    var t;
    const e = this,
      i = e.instance;
    i.off("Carousel.init", e.onInit), i.off("resize", e.onResize), i.off("keydown", e.onKeydown), null === (t = i.carousel) || void 0 === t || t.detachPlugins(["Thumbs"]), e.ref = null;
  }
}
Object.defineProperty(Ft, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: kt
});
const jt = {
  panLeft: {
    icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
    change: {
      panX: -100
    }
  },
  panRight: {
    icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
    change: {
      panX: 100
    }
  },
  panUp: {
    icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
    change: {
      panY: -100
    }
  },
  panDown: {
    icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
    change: {
      panY: 100
    }
  },
  zoomIn: {
    icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
    action: "zoomIn"
  },
  zoomOut: {
    icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
    action: "zoomOut"
  },
  toggle1to1: {
    icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
    action: "toggleZoom"
  },
  toggleZoom: {
    icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
    action: "toggleZoom"
  },
  iterateZoom: {
    icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
    action: "iterateZoom"
  },
  rotateCCW: {
    icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
    action: "rotateCCW"
  },
  rotateCW: {
    icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
    action: "rotateCW"
  },
  flipX: {
    icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
    action: "flipX"
  },
  flipY: {
    icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
    action: "flipY"
  },
  fitX: {
    icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
    action: "fitX"
  },
  fitY: {
    icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
    action: "fitY"
  },
  reset: {
    icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
    action: "reset"
  },
  toggleFS: {
    icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
    action: "toggleFS"
  }
};
var Ht;
!function (t) {
  t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Disabled = 2] = "Disabled";
}(Ht || (Ht = {}));
const Bt = {
    absolute: "auto",
    display: {
      left: ["infobar"],
      middle: [],
      right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"]
    },
    enabled: "auto",
    items: {
      infobar: {
        tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
      },
      download: {
        tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
      },
      prev: {
        tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
      },
      next: {
        tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
      },
      slideshow: {
        tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
      },
      fullscreen: {
        tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
      },
      thumbs: {
        tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
      },
      close: {
        tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
      }
    },
    parentEl: null
  },
  Nt = {
    tabindex: "-1",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  };
class _t extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "state", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Ht.Init
    }), Object.defineProperty(this, "container", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    });
  }
  onReady(t) {
    var e;
    if (!t.carousel) return;
    let i = this.option("display"),
      n = this.option("absolute"),
      s = this.option("enabled");
    if ("auto" === s) {
      const t = this.instance.carousel;
      let e = 0;
      if (t) for (const i of t.slides) (i.panzoom || "image" === i.type) && e++;
      e || (s = !1);
    }
    s || (i = void 0);
    let o = 0;
    const a = {
      left: [],
      middle: [],
      right: []
    };
    if (i) for (const t of ["left", "middle", "right"]) for (const n of i[t]) {
      const i = this.createEl(n);
      i && (null === (e = a[t]) || void 0 === e || e.push(i), o++);
    }
    let r = null;
    if (o && (r = this.createContainer()), r) {
      for (const [t, e] of Object.entries(a)) {
        const i = document.createElement("div");
        S(i, "fancybox__toolbar__column is-" + t);
        for (const t of e) i.appendChild(t);
        "auto" !== n || "middle" !== t || e.length || (n = !0), r.appendChild(i);
      }
      !0 === n && S(r, "is-absolute"), this.state = Ht.Ready, this.onRefresh();
    } else this.state = Ht.Disabled;
  }
  onClick(t) {
    var e, i;
    const n = this.instance,
      s = n.getSlide(),
      o = null == s ? void 0 : s.panzoom,
      a = t.target,
      r = a && x(a) ? a.dataset : null;
    if (!r) return;
    if (void 0 !== r.fancyboxToggleThumbs) return t.preventDefault(), t.stopPropagation(), void (null === (e = n.plugins.Thumbs) || void 0 === e || e.toggle());
    if (void 0 !== r.fancyboxToggleFullscreen) return t.preventDefault(), t.stopPropagation(), void this.instance.toggleFullscreen();
    if (void 0 !== r.fancyboxToggleSlideshow) {
      t.preventDefault(), t.stopPropagation();
      const e = null === (i = n.carousel) || void 0 === i ? void 0 : i.plugins.Autoplay;
      let s = e.isActive;
      return o && "mousemove" === o.panMode && !s && o.reset(), void (s ? e.stop() : e.start());
    }
    const l = r.panzoomAction,
      c = r.panzoomChange;
    if ((c || l) && (t.preventDefault(), t.stopPropagation()), c) {
      let t = {};
      try {
        t = JSON.parse(c);
      } catch (t) {}
      o && o.applyChange(t);
    } else l && o && o[l] && o[l]();
  }
  onChange() {
    this.onRefresh();
  }
  onRefresh() {
    if (this.instance.isClosing()) return;
    const t = this.container;
    if (!t) return;
    const e = this.instance.getSlide();
    if (!e || e.state !== ot.Ready) return;
    const i = e && !e.error && e.panzoom;
    for (const e of t.querySelectorAll("[data-panzoom-action]")) i ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
    let n = i && i.canZoomIn(),
      s = i && i.canZoomOut();
    for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]')) n ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
    for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]')) s ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
    for (const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
      s || n ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
      const t = e.querySelector("g");
      t && (t.style.display = n ? "" : "none");
    }
  }
  onDone(t, e) {
    var i;
    null === (i = e.panzoom) || void 0 === i || i.on("afterTransform", () => {
      this.instance.isCurrentSlide(e) && this.onRefresh();
    }), this.instance.isCurrentSlide(e) && this.onRefresh();
  }
  createContainer() {
    const t = this.instance.container;
    if (!t) return null;
    const e = this.option("parentEl") || t,
      i = document.createElement("div");
    return S(i, "fancybox__toolbar"), e.prepend(i), i.addEventListener("click", this.onClick, {
      passive: !1,
      capture: !0
    }), t && S(t, "has-toolbar"), this.container = i, i;
  }
  createEl(t) {
    const e = this.instance,
      i = e.carousel;
    if (!i) return null;
    if ("toggleFS" === t) return null;
    if ("fullscreen" === t && !e.fsAPI) return null;
    let s = null;
    const o = i.slides.length || 0;
    let a = 0,
      r = 0;
    for (const t of i.slides) (t.panzoom || "image" === t.type) && a++, ("image" === t.type || t.downloadSrc) && r++;
    if (o < 2 && ["infobar", "prev", "next"].includes(t)) return s;
    if (void 0 !== jt[t] && !a) return null;
    if ("download" === t && !r) return null;
    if ("thumbs" === t) {
      const t = e.plugins.Thumbs;
      if (!t || !t.isEnabled) return null;
    }
    if ("slideshow" === t) {
      if (!i.plugins.Autoplay || o < 2) return null;
    }
    if (void 0 !== jt[t]) {
      const e = jt[t];
      s = document.createElement("button"), s.setAttribute("title", this.instance.localize(`{{${t.toUpperCase()}}}`)), S(s, "f-button"), e.action && (s.dataset.panzoomAction = e.action), e.change && (s.dataset.panzoomChange = JSON.stringify(e.change)), s.appendChild(n(this.instance.localize(e.icon)));
    } else {
      const e = (this.option("items") || [])[t];
      e && (s = n(this.instance.localize(e.tpl)), "function" == typeof e.click && s.addEventListener("click", t => {
        t.preventDefault(), t.stopPropagation(), "function" == typeof e.click && e.click.call(this, this, t);
      }));
    }
    const l = null == s ? void 0 : s.querySelector("svg");
    if (l) for (const [t, e] of Object.entries(Nt)) l.getAttribute(t) || l.setAttribute(t, String(e));
    return s;
  }
  removeContainer() {
    const t = this.container;
    t && t.remove(), this.container = null, this.state = Ht.Disabled;
    const e = this.instance.container;
    e && E(e, "has-toolbar");
  }
  attach() {
    const t = this,
      e = t.instance;
    e.on("Carousel.initSlides", t.onReady), e.on("done", t.onDone), e.on(["reveal", "Carousel.change"], t.onChange), t.onReady(t.instance);
  }
  detach() {
    const t = this,
      e = t.instance;
    e.off("Carousel.initSlides", t.onReady), e.off("done", t.onDone), e.off(["reveal", "Carousel.change"], t.onChange), t.removeContainer();
  }
}
Object.defineProperty(_t, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: Bt
});
const $t = {
    Hash: rt,
    Html: wt,
    Images: ht,
    Slideshow: Ct,
    Thumbs: Ft,
    Toolbar: _t
  },
  Wt = "with-fancybox",
  Xt = "hide-scrollbar",
  qt = "--fancybox-scrollbar-compensate",
  Yt = "--fancybox-body-margin",
  Vt = "is-using-tab",
  Zt = "is-animated",
  Ut = "is-compact",
  Gt = "is-loading",
  Kt = "has-caption",
  Jt = "disabled",
  Qt = "tabindex",
  te = "download",
  ee = "href",
  ie = "src",
  ne = t => "string" == typeof t,
  se = function () {
    var t = window.getSelection();
    return t && "Range" === t.type;
  };
let oe = null,
  ae = null;
const re = new Map();
let le = 0;
class ce extends g {
  get isIdle() {
    return this.idle;
  }
  get isCompact() {
    return this.option("compact");
  }
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    super(e), Object.defineProperty(this, "userSlides", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "userPlugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, "idle", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "idleTimer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "clickTimer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "pwt", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "ignoreFocusChange", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Object.defineProperty(this, "state", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: st.Init
    }), Object.defineProperty(this, "id", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "container", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "footer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "caption", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "carousel", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "lastFocus", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "prevMouseMoveEvent", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "fsAPI", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.fsAPI = (() => {
      let t,
        e = "",
        i = "",
        n = "";
      return document.fullscreenEnabled ? (e = "requestFullscreen", i = "exitFullscreen", n = "fullscreenElement") : document.webkitFullscreenEnabled && (e = "webkitRequestFullscreen", i = "webkitExitFullscreen", n = "webkitFullscreenElement"), e && (t = {
        request: function (t) {
          return "webkitRequestFullscreen" === e ? t[e](Element.ALLOW_KEYBOARD_INPUT) : t[e]();
        },
        exit: function () {
          return document[n] && document[i]();
        },
        isFullscreen: function () {
          return document[n];
        }
      }), t;
    })(), this.id = e.id || ++le, re.set(this.id, this), this.userSlides = t, this.userPlugins = i, queueMicrotask(() => {
      this.init();
    });
  }
  init() {
    if (this.state === st.Destroy) return;
    this.state = st.Init, this.attachPlugins(Object.assign(Object.assign({}, ce.Plugins), this.userPlugins)), this.emit("init"), this.emit("attachPlugins"), !0 === this.option("hideScrollbar") && (() => {
      if (!Q) return;
      const t = document,
        e = t.body,
        i = t.documentElement;
      if (e.classList.contains(Xt)) return;
      let n = window.innerWidth - i.getBoundingClientRect().width;
      const s = parseFloat(window.getComputedStyle(e).marginRight);
      n < 0 && (n = 0), i.style.setProperty(qt, `${n}px`), s && e.style.setProperty(Yt, `${s}px`), e.classList.add(Xt);
    })(), this.initLayout(), this.scale();
    const t = () => {
        this.initCarousel(this.userSlides), this.state = st.Ready, this.attachEvents(), this.emit("ready"), setTimeout(() => {
          this.container && this.container.setAttribute("aria-hidden", "false");
        }, 16);
      },
      e = this.fsAPI;
    this.option("Fullscreen.autoStart") && e && !e.isFullscreen() ? e.request(this.container).then(() => t()).catch(() => t()) : t();
  }
  initLayout() {
    var t, e;
    const i = this.option("parentEl") || document.body,
      s = n(this.localize(this.option("tpl.main") || ""));
    s && (s.setAttribute("id", `fancybox-${this.id}`), s.setAttribute("aria-label", this.localize("{{MODAL}}")), s.classList.toggle(Ut, this.isCompact), S(s, this.option("mainClass") || ""), this.container = s, this.footer = s.querySelector(".fancybox__footer"), i.appendChild(s), S(document.documentElement, Wt), oe && ae || (oe = document.createElement("span"), S(oe, "fancybox-focus-guard"), oe.setAttribute(Qt, "0"), oe.setAttribute("aria-hidden", "true"), oe.setAttribute("aria-label", "Focus guard"), ae = oe.cloneNode(), null === (t = s.parentElement) || void 0 === t || t.insertBefore(oe, s), null === (e = s.parentElement) || void 0 === e || e.append(ae)), s.addEventListener("mousedown", () => {
      E(s, Vt);
    }), this.option("animated") && (S(s, Zt), setTimeout(() => {
      this.isClosing() || E(s, Zt);
    }, 350)), this.emit("initLayout"));
  }
  initCarousel(t) {
    var _this2 = this;
    const i = this.container;
    if (!i) return;
    const n = i.querySelector(".fancybox__carousel");
    if (!n) return;
    const s = this.carousel = new K(n, u({}, {
      slides: t,
      transition: "fade",
      Panzoom: {
        lockAxis: this.option("dragToClose") ? "xy" : "x",
        infinite: !!this.option("dragToClose") && "y"
      },
      Dots: !1,
      Navigation: {
        classes: {
          container: "fancybox__nav",
          button: "f-button",
          isNext: "is-next",
          isPrev: "is-prev"
        }
      },
      initialPage: this.option("startIndex"),
      l10n: this.option("l10n")
    }, this.option("Carousel") || {}));
    s.on("*", function (t, e) {
      for (var _len5 = arguments.length, i = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        i[_key5 - 2] = arguments[_key5];
      }
      _this2.emit(`Carousel.${e}`, t, ...i);
    }), s.on(["ready", "change"], () => {
      this.manageCaption();
    }), this.on("Carousel.removeSlide", (t, e, i) => {
      this.clearContent(i), i.state = void 0;
    }), s.on("Panzoom.touchStart", () => {
      var t, e;
      this.isCompact || this.endIdle(), (null === (t = document.activeElement) || void 0 === t ? void 0 : t.closest(".f-thumbs")) && (null === (e = this.container) || void 0 === e || e.focus());
    }), s.on("settle", () => {
      this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus();
    }), this.option("dragToClose") && (s.on("Panzoom.afterTransform", (t, i) => {
      const n = this.getSlide();
      if (n && e(n.el)) return;
      const s = this.container;
      if (s) {
        const t = Math.abs(i.current.f),
          e = t < 1 ? "" : Math.max(.5, Math.min(1, 1 - t / i.contentRect.fitHeight * 1.5));
        s.style.setProperty("--fancybox-ts", e ? "0s" : ""), s.style.setProperty("--fancybox-opacity", e + "");
      }
    }), s.on("Panzoom.touchEnd", (t, i, n) => {
      var s;
      const o = this.getSlide();
      if (o && e(o.el)) return;
      if (i.isMobile && document.activeElement && -1 !== ["TEXTAREA", "INPUT"].indexOf(null === (s = document.activeElement) || void 0 === s ? void 0 : s.nodeName)) return;
      const a = Math.abs(i.dragOffset.y);
      "y" === i.lockedAxis && (a >= 200 || a >= 50 && i.dragOffset.time < 300) && (n && n.cancelable && n.preventDefault(), this.close(n, "f-throwOut" + (i.current.f < 0 ? "Up" : "Down")));
    })), s.on("change", t => {
      var e;
      let i = null === (e = this.getSlide()) || void 0 === e ? void 0 : e.triggerEl;
      if (i) {
        const e = new CustomEvent("slideTo", {
          bubbles: !0,
          cancelable: !0,
          detail: t.page
        });
        i.dispatchEvent(e);
      }
    }), s.on(["refresh", "change"], t => {
      const e = this.container;
      if (!e) return;
      for (const i of e.querySelectorAll("[data-fancybox-current-index]")) i.innerHTML = t.page + 1;
      for (const i of e.querySelectorAll("[data-fancybox-count]")) i.innerHTML = t.pages.length;
      if (!t.isInfinite) {
        for (const i of e.querySelectorAll("[data-fancybox-next]")) t.page < t.pages.length - 1 ? (i.removeAttribute(Jt), i.removeAttribute(Qt)) : (i.setAttribute(Jt, ""), i.setAttribute(Qt, "-1"));
        for (const i of e.querySelectorAll("[data-fancybox-prev]")) t.page > 0 ? (i.removeAttribute(Jt), i.removeAttribute(Qt)) : (i.setAttribute(Jt, ""), i.setAttribute(Qt, "-1"));
      }
      const i = this.getSlide();
      if (!i) return;
      let n = i.downloadSrc || "";
      n || "image" !== i.type || i.error || !ne(i[ie]) || (n = i[ie]);
      for (const t of e.querySelectorAll("[data-fancybox-download]")) {
        const e = i.downloadFilename;
        n ? (t.removeAttribute(Jt), t.removeAttribute(Qt), t.setAttribute(ee, n), t.setAttribute(te, e || n), t.setAttribute("target", "_blank")) : (t.setAttribute(Jt, ""), t.setAttribute(Qt, "-1"), t.removeAttribute(ee), t.removeAttribute(te));
      }
    }), this.emit("initCarousel");
  }
  attachEvents() {
    const t = this,
      e = t.container;
    if (!e) return;
    e.addEventListener("click", t.onClick, {
      passive: !1,
      capture: !1
    }), e.addEventListener("wheel", t.onWheel, {
      passive: !1,
      capture: !1
    }), document.addEventListener("keydown", t.onKeydown, {
      passive: !1,
      capture: !0
    }), document.addEventListener("visibilitychange", t.onVisibilityChange, !1), document.addEventListener("mousemove", t.onMousemove), t.option("trapFocus") && document.addEventListener("focus", t.onFocus, !0), window.addEventListener("resize", t.onResize);
    const i = window.visualViewport;
    i && (i.addEventListener("scroll", t.onResize), i.addEventListener("resize", t.onResize));
  }
  detachEvents() {
    const t = this,
      e = t.container;
    if (!e) return;
    document.removeEventListener("keydown", t.onKeydown, {
      passive: !1,
      capture: !0
    }), e.removeEventListener("wheel", t.onWheel, {
      passive: !1,
      capture: !1
    }), e.removeEventListener("click", t.onClick, {
      passive: !1,
      capture: !1
    }), document.removeEventListener("mousemove", t.onMousemove), window.removeEventListener("resize", t.onResize);
    const i = window.visualViewport;
    i && (i.removeEventListener("resize", t.onResize), i.removeEventListener("scroll", t.onResize)), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), document.removeEventListener("focus", t.onFocus, !0);
  }
  scale() {
    const t = this.container;
    if (!t) return;
    const e = window.visualViewport,
      i = Math.max(1, (null == e ? void 0 : e.scale) || 1);
    let n = "",
      s = "",
      o = "";
    if (e && i > 1) {
      let t = `${e.offsetLeft}px`,
        a = `${e.offsetTop}px`;
      n = e.width * i + "px", s = e.height * i + "px", o = `translate3d(${t}, ${a}, 0) scale(${1 / i})`;
    }
    t.style.transform = o, t.style.width = n, t.style.height = s;
  }
  onClick(t) {
    var e, i;
    const {
      container: n,
      isCompact: s
    } = this;
    if (!n || this.isClosing()) return;
    !s && this.option("idle") && this.resetIdle();
    const o = t.composedPath()[0];
    if (o.closest(".f-spinner") || o.closest("[data-fancybox-close]")) return t.preventDefault(), void this.close(t);
    if (o.closest("[data-fancybox-prev]")) return t.preventDefault(), void this.prev();
    if (o.closest("[data-fancybox-next]")) return t.preventDefault(), void this.next();
    const a = document.activeElement;
    if (se() && a && n.contains(a)) return;
    if (o === (null === (e = this.carousel) || void 0 === e ? void 0 : e.container)) return;
    if (s && "image" === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.type)) return void (this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(() => {
      this.toggleIdle(), this.clickTimer = null;
    }, 350));
    if (this.emit("click", t), t.defaultPrevented) return;
    let r = !1;
    if (o.closest(".fancybox__content")) {
      if (a) {
        if (a.closest("[contenteditable]")) return;
        o.matches(et) || a.blur();
      }
      if (se()) return;
      r = this.option("contentClick");
    } else o.closest(".fancybox__carousel") && !o.matches(et) && (r = this.option("backdropClick"));
    "close" === r ? (t.preventDefault(), this.close(t)) : "next" === r ? (t.preventDefault(), this.next()) : "prev" === r && (t.preventDefault(), this.prev());
  }
  onWheel(t) {
    const e = t.target;
    let n = this.option("wheel", t);
    e.closest(".fancybox__thumbs") && (n = "slide");
    const s = "slide" === n,
      o = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (t, e) {
        return Math.abs(e) > Math.abs(t) ? e : t;
      }),
      a = Math.max(-1, Math.min(1, o)),
      r = Date.now();
    this.pwt && r - this.pwt < 300 ? s && t.preventDefault() : (this.pwt = r, this.emit("wheel", t, a), t.defaultPrevented || ("close" === n ? (t.preventDefault(), this.close(t)) : "slide" === n && (i(e) || (t.preventDefault(), this[a > 0 ? "prev" : "next"]()))));
  }
  onKeydown(t) {
    if (!this.isTopmost()) return;
    this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
    const e = t.key,
      i = this.option("keyboard");
    if (!i) return;
    const n = t.composedPath()[0],
      s = document.activeElement && document.activeElement.classList,
      o = s && s.contains("f-button") || n.dataset.carouselPage || n.dataset.carouselIndex;
    if ("Escape" !== e && !o && x(n)) {
      if (n.isContentEditable || -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(n.nodeName)) return;
    }
    if ("Tab" === t.key ? S(this.container, Vt) : E(this.container, Vt), t.ctrlKey || t.altKey || t.shiftKey) return;
    this.emit("keydown", e, t);
    const a = i[e];
    a && "function" == typeof this[a] && (t.preventDefault(), this[a]());
  }
  onResize() {
    const t = this.container;
    if (!t) return;
    const e = this.isCompact;
    t.classList.toggle(Ut, e), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize");
  }
  onFocus(t) {
    this.isTopmost() && this.checkFocus(t);
  }
  onMousemove(t) {
    this.prevMouseMoveEvent = t, !this.isCompact && this.option("idle") && this.resetIdle();
  }
  onVisibilityChange() {
    "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
  }
  manageCloseBtn(t) {
    const e = this.optionFor(t, "closeButton") || !1;
    if ("auto" === e) {
      const t = this.plugins.Toolbar;
      if (t && t.state === Ht.Ready) return;
    }
    if (!e) return;
    if (!t.contentEl || t.closeBtnEl) return;
    const i = this.option("tpl.closeButton");
    if (i) {
      const e = n(this.localize(i));
      t.closeBtnEl = t.contentEl.appendChild(e), t.el && S(t.el, "has-close-btn");
    }
  }
  manageCaption() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
    var e, i;
    const n = "fancybox__caption",
      s = this.container;
    if (!s) return;
    E(s, Kt);
    const o = this.isCompact || this.option("commonCaption"),
      a = !o;
    if (this.caption && this.stop(this.caption), a && this.caption && (this.caption.remove(), this.caption = null), o && !this.caption) for (const t of (null === (e = this.carousel) || void 0 === e ? void 0 : e.slides) || []) t.captionEl && (t.captionEl.remove(), t.captionEl = void 0, E(t.el, Kt), null === (i = t.el) || void 0 === i || i.removeAttribute("aria-labelledby"));
    if (t || (t = this.getSlide()), !t || o && !this.isCurrentSlide(t)) return;
    const r = t.el;
    let l = this.optionFor(t, "caption", "");
    if (!l) return void (o && this.caption && this.animate(this.caption, "f-fadeOut", () => {
      this.caption && (this.caption.innerHTML = "");
    }));
    let c = null;
    if (a) {
      if (c = t.captionEl || null, r && !c) {
        const e = n + `_${this.id}_${t.index}`;
        c = document.createElement("div"), S(c, n), c.setAttribute("id", e), t.captionEl = r.appendChild(c), S(r, Kt), r.setAttribute("aria-labelledby", e);
      }
    } else {
      if (c = this.caption, c || (c = s.querySelector("." + n)), !c) {
        c = document.createElement("div"), c.dataset.fancyboxCaption = "", S(c, n);
        (this.footer || s).prepend(c);
      }
      S(s, Kt), this.caption = c;
    }
    c && (c.innerHTML = "", ne(l) || "number" == typeof l ? c.innerHTML = l + "" : l instanceof HTMLElement && c.appendChild(l));
  }
  checkFocus(t) {
    this.focus(t);
  }
  focus(t) {
    var e;
    if (this.ignoreFocusChange) return;
    const i = document.activeElement || null,
      n = (null == t ? void 0 : t.target) || null,
      s = this.container,
      o = this.getSlide();
    if (!s || !(null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport)) return;
    if (!t && i && s.contains(i)) return;
    const a = o && o.state === ot.Ready ? o.el : null;
    if (!a || a.contains(i) || s === i) return;
    t && t.cancelable && t.preventDefault(), this.ignoreFocusChange = !0;
    const r = Array.from(s.querySelectorAll(et));
    let l = [],
      c = null;
    for (let t of r) {
      const e = !t.offsetParent || !!t.closest('[aria-hidden="true"]'),
        i = a && a.contains(t),
        n = !this.carousel.viewport.contains(t);
      if (t === s || (i || n) && !e) {
        l.push(t);
        const e = t.dataset.origTabindex;
        void 0 !== e && e && (t.tabIndex = parseFloat(e)), t.removeAttribute("data-orig-tabindex"), !t.hasAttribute("autoFocus") && c || (c = t);
      } else {
        const e = void 0 === t.dataset.origTabindex ? t.getAttribute("tabindex") || "" : t.dataset.origTabindex;
        e && (t.dataset.origTabindex = e), t.tabIndex = -1;
      }
    }
    let h = null;
    t ? (!n || l.indexOf(n) < 0) && (h = c || s, l.length && (i === ae ? h = l[0] : this.lastFocus !== s && i !== oe || (h = l[l.length - 1]))) : h = o && "image" === o.type ? s : c || s, h && it(h), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1;
  }
  next() {
    const t = this.carousel;
    t && t.pages.length > 1 && t.slideNext();
  }
  prev() {
    const t = this.carousel;
    t && t.pages.length > 1 && t.slidePrev();
  }
  jumpTo() {
    this.carousel && this.carousel.slideTo(...arguments);
  }
  isTopmost() {
    var t;
    return (null === (t = ce.getInstance()) || void 0 === t ? void 0 : t.id) == this.id;
  }
  animate() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let i = arguments.length > 2 ? arguments[2] : undefined;
    if (!t || !e) return void (i && i());
    this.stop(t);
    const n = s => {
      s.target === t && t.dataset.animationName && (t.removeEventListener("animationend", n), delete t.dataset.animationName, i && i(), E(t, e));
    };
    t.dataset.animationName = e, t.addEventListener("animationend", n), S(t, e);
  }
  stop(t) {
    t && t.dispatchEvent(new CustomEvent("animationend", {
      bubbles: !1,
      cancelable: !0,
      currentTarget: t
    }));
  }
  setContent(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (this.isClosing()) return;
    const s = t.el;
    if (!s) return;
    let o = null;
    if (x(e) ? o = e : (o = n(e + ""), x(o) || (o = document.createElement("div"), o.innerHTML = e + "")), ["img", "picture", "iframe", "video", "audio"].includes(o.nodeName.toLowerCase())) {
      const t = document.createElement("div");
      t.appendChild(o), o = t;
    }
    x(o) && t.filter && !t.error && (o = o.querySelector(t.filter)), o && x(o) ? (S(o, "fancybox__content"), t.id && o.setAttribute("id", t.id), "none" !== o.style.display && "none" !== getComputedStyle(o).getPropertyValue("display") || (o.style.display = t.display || this.option("defaultDisplay") || "flex"), s.classList.add(`has-${t.error ? "error" : t.type || "unknown"}`), s.prepend(o), t.contentEl = o, i && this.revealContent(t), this.manageCloseBtn(t), this.manageCaption(t)) : this.setError(t, "{{ELEMENT_NOT_FOUND}}");
  }
  revealContent(t, e) {
    const i = t.el,
      n = t.contentEl;
    i && n && (this.emit("reveal", t), this.hideLoading(t), t.state = ot.Opening, (e = this.isOpeningSlide(t) ? void 0 === e ? this.optionFor(t, "showClass") : e : "f-fadeIn") ? this.animate(n, e, () => {
      this.done(t);
    }) : this.done(t));
  }
  done(t) {
    this.isClosing() || (t.state = ot.Ready, this.emit("done", t), S(t.el, "is-done"), this.isCurrentSlide(t) && this.option("autoFocus") && queueMicrotask(() => {
      var e;
      null === (e = t.panzoom) || void 0 === e || e.updateControls(), this.option("autoFocus") && (this.option("autoFocus") ? this.focus() : this.checkFocus());
    }), this.isOpeningSlide(t) && !this.isCompact && this.option("idle") && this.setIdle());
  }
  isCurrentSlide(t) {
    const e = this.getSlide();
    return !(!t || !e) && e.index === t.index;
  }
  isOpeningSlide(t) {
    var e, i;
    return null === (null === (e = this.carousel) || void 0 === e ? void 0 : e.prevPage) && t.index === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index);
  }
  showLoading(t) {
    t.state = ot.Loading;
    const e = t.el;
    if (!e) return;
    S(e, Gt), this.emit("loading", t), t.spinnerEl || setTimeout(() => {
      if (!this.isClosing() && !t.spinnerEl && t.state === ot.Loading) {
        let i = n(w);
        t.spinnerEl = i, e.prepend(i), this.animate(i, "f-fadeIn");
      }
    }, 250);
  }
  hideLoading(t) {
    const e = t.el;
    if (!e) return;
    const i = t.spinnerEl;
    this.isClosing() ? null == i || i.remove() : (E(e, Gt), i && this.animate(i, "f-fadeOut", () => {
      i.remove();
    }), t.state === ot.Loading && (this.emit("loaded", t), t.state = ot.Ready));
  }
  setError(t, e) {
    if (this.isClosing()) return;
    const i = new Event("error", {
      bubbles: !0,
      cancelable: !0
    });
    if (this.emit("error", i, t), i.defaultPrevented) return;
    t.error = e, this.hideLoading(t), this.clearContent(t);
    const n = document.createElement("div");
    n.classList.add("fancybox-error"), n.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, n);
  }
  clearContent(t) {
    if (void 0 === t.state) return;
    this.emit("clearContent", t), t.contentEl && (t.contentEl.remove(), t.contentEl = void 0);
    const e = t.el;
    e && (E(e, "has-error"), E(e, "has-unknown"), E(e, `has-${t.type || "unknown"}`)), t.closeBtnEl && t.closeBtnEl.remove(), t.closeBtnEl = void 0, t.captionEl && t.captionEl.remove(), t.captionEl = void 0, t.spinnerEl && t.spinnerEl.remove(), t.spinnerEl = void 0;
  }
  getSlide() {
    var t;
    const e = this.carousel;
    return (null === (t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0;
  }
  close(t, e) {
    if (this.isClosing()) return;
    const i = new Event("shouldClose", {
      bubbles: !0,
      cancelable: !0
    });
    if (this.emit("shouldClose", i, t), i.defaultPrevented) return;
    t && t.cancelable && (t.preventDefault(), t.stopPropagation());
    const n = this.fsAPI,
      s = () => {
        this.proceedClose(t, e);
      };
    n && n.isFullscreen() === this.container ? Promise.resolve(n.exit()).then(() => s()) : s();
  }
  clearIdle() {
    this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
  }
  setIdle() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    const e = () => {
      this.clearIdle(), this.idle = !0, S(this.container, "is-idle"), this.emit("setIdle");
    };
    if (this.clearIdle(), !this.isClosing()) if (t) e();else {
      const t = this.option("idle");
      t && (this.idleTimer = setTimeout(e, t));
    }
  }
  endIdle() {
    this.clearIdle(), this.idle && !this.isClosing() && (this.idle = !1, E(this.container, "is-idle"), this.emit("endIdle"));
  }
  resetIdle() {
    this.endIdle(), this.setIdle();
  }
  toggleIdle() {
    this.idle ? this.endIdle() : this.setIdle(!0);
  }
  toggleFullscreen() {
    const t = this.fsAPI;
    t && (t.isFullscreen() ? t.exit() : this.container && t.request(this.container));
  }
  isClosing() {
    return [st.Closing, st.CustomClosing, st.Destroy].includes(this.state);
  }
  proceedClose(t, e) {
    var i, n;
    this.state = st.Closing, this.clearIdle(), this.detachEvents();
    const s = this.container,
      o = this.carousel,
      a = this.getSlide(),
      r = a && this.option("placeFocusBack") ? a.triggerEl || this.option("triggerEl") : null;
    if (r && (J(r) ? it(r) : r.focus()), s && (S(s, "is-closing"), s.setAttribute("aria-hidden", "true"), this.option("animated") && S(s, Zt), s.style.pointerEvents = "none"), o) {
      o.clearTransitions(), null === (i = o.panzoom) || void 0 === i || i.destroy(), null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
      for (const t of o.slides) {
        t.state = ot.Closing, this.hideLoading(t);
        const e = t.contentEl;
        e && this.stop(e);
        const i = null == t ? void 0 : t.panzoom;
        i && (i.stop(), i.detachEvents(), i.detachObserver()), this.isCurrentSlide(t) || o.emit("removeSlide", t);
      }
    }
    this.emit("close", t), this.state !== st.CustomClosing ? (void 0 === e && a && (e = this.optionFor(a, "hideClass")), e && a ? (this.animate(a.contentEl, e, () => {
      o && o.emit("removeSlide", a);
    }), setTimeout(() => {
      this.destroy();
    }, 500)) : this.destroy()) : setTimeout(() => {
      this.destroy();
    }, 500);
  }
  destroy() {
    var t;
    if (this.state === st.Destroy) return;
    this.state = st.Destroy, null === (t = this.carousel) || void 0 === t || t.destroy();
    const e = this.container;
    e && e.remove(), re.delete(this.id);
    const i = ce.getInstance();
    i ? i.focus() : (oe && (oe.remove(), oe = null), ae && (ae.remove(), ae = null), E(document.documentElement, Wt), (() => {
      if (!Q) return;
      const t = document,
        e = t.body;
      e.classList.remove(Xt), e.style.setProperty(Yt, ""), t.documentElement.style.setProperty(qt, "");
    })(), this.emit("destroy"));
  }
  static bind(t, e, i) {
    if (!Q) return;
    let n,
      s = "",
      o = {};
    if (void 0 === t ? n = document.body : ne(t) ? (n = document.body, s = t, "object" == typeof e && (o = e || {})) : (n = t, ne(e) && (s = e), "object" == typeof i && (o = i || {})), !n || !x(n)) return;
    s = s || "[data-fancybox]";
    const a = ce.openers.get(n) || new Map();
    a.set(s, o), ce.openers.set(n, a), 1 === a.size && n.addEventListener("click", ce.fromEvent);
  }
  static unbind(t, e) {
    let i,
      n = "";
    if (ne(t) ? (i = document.body, n = t) : (i = t, ne(e) && (n = e)), !i) return;
    const s = ce.openers.get(i);
    s && n && s.delete(n), n && s || (ce.openers.delete(i), i.removeEventListener("click", ce.fromEvent));
  }
  static destroy() {
    let t;
    for (; t = ce.getInstance();) t.destroy();
    for (const t of ce.openers.keys()) t.removeEventListener("click", ce.fromEvent);
    ce.openers = new Map();
  }
  static fromEvent(t) {
    if (t.defaultPrevented) return;
    if (t.button && 0 !== t.button) return;
    if (t.ctrlKey || t.metaKey || t.shiftKey) return;
    let e = t.composedPath()[0];
    const i = e.closest("[data-fancybox-trigger]");
    if (i) {
      const t = i.dataset.fancyboxTrigger || "",
        n = document.querySelectorAll(`[data-fancybox="${t}"]`),
        s = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
      e = n[s] || e;
    }
    if (!(e && e instanceof Element)) return;
    let n, s, o, a;
    if ([...ce.openers].reverse().find(_ref5 => {
      let [t, i] = _ref5;
      return !(!t.contains(e) || ![...i].reverse().find(_ref6 => {
        let [i, r] = _ref6;
        let l = e.closest(i);
        return !!l && (n = t, s = i, o = l, a = r, !0);
      }));
    }), !n || !s || !o) return;
    a = a || {}, t.preventDefault(), e = o;
    let r = [],
      l = u({}, nt, a);
    l.event = t, l.triggerEl = e, l.delegate = i;
    const c = l.groupAll,
      h = l.groupAttr,
      d = h && e ? e.getAttribute(`${h}`) : "";
    if ((!e || d || c) && (r = [].slice.call(n.querySelectorAll(s))), e && !c && (r = d ? r.filter(t => t.getAttribute(`${h}`) === d) : [e]), !r.length) return;
    const f = ce.getInstance();
    return f && f.options.triggerEl && r.indexOf(f.options.triggerEl) > -1 ? void 0 : (e && (l.startIndex = r.indexOf(e)), ce.fromNodes(r, l));
  }
  static fromSelector(t, e, i) {
    let n = null,
      s = "",
      o = {};
    if (ne(t) ? (n = document.body, s = t, "object" == typeof e && (o = e || {})) : t instanceof HTMLElement && ne(e) && (n = t, s = e, "object" == typeof i && (o = i || {})), !n || !s) return !1;
    const a = ce.openers.get(n);
    return !!a && (o = u({}, a.get(s) || {}, o), !!o && ce.fromNodes(Array.from(n.querySelectorAll(s)), o));
  }
  static fromNodes(t, e) {
    e = u({}, nt, e || {});
    const i = [];
    for (const n of t) {
      const t = n.dataset || {},
        s = t[ie] || n.getAttribute(ee) || n.getAttribute("currentSrc") || n.getAttribute(ie) || void 0;
      let o;
      const a = e.delegate;
      let r;
      a && i.length === e.startIndex && (o = a instanceof HTMLImageElement ? a : a.querySelector("img:not([aria-hidden])")), o || (o = n instanceof HTMLImageElement ? n : n.querySelector("img:not([aria-hidden])")), o && (r = o.currentSrc || o[ie] || void 0, !r && o.dataset && (r = o.dataset.lazySrc || o.dataset[ie] || void 0));
      const l = {
        src: s,
        triggerEl: n,
        thumbEl: o,
        thumbElSrc: r,
        thumbSrc: r
      };
      for (const e in t) {
        let i = t[e] + "";
        i = "false" !== i && ("true" === i || i), l[e] = i;
      }
      i.push(l);
    }
    return new ce(i, e);
  }
  static getInstance(t) {
    if (t) return re.get(t);
    return Array.from(re.values()).reverse().find(t => !t.isClosing() && t) || null;
  }
  static getSlide() {
    var t;
    return (null === (t = ce.getInstance()) || void 0 === t ? void 0 : t.getSlide()) || null;
  }
  static show() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new ce(t, e);
  }
  static next() {
    const t = ce.getInstance();
    t && t.next();
  }
  static prev() {
    const t = ce.getInstance();
    t && t.prev();
  }
  static close() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
    for (var _len6 = arguments.length, e = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
      e[_key6 - 1] = arguments[_key6];
    }
    if (t) for (const t of re.values()) t.close(...e);else {
      const t = ce.getInstance();
      t && t.close(...e);
    }
  }
}
Object.defineProperty(ce, "version", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "5.0.28"
}), Object.defineProperty(ce, "defaults", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: nt
}), Object.defineProperty(ce, "Plugins", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: $t
}), Object.defineProperty(ce, "openers", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new Map()
});


/***/ }),

/***/ "./node_modules/ssr-window/ssr-window.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   getDocument: () => (/* binding */ getDocument),
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   ssrDocument: () => (/* binding */ ssrDocument),
/* harmony export */   ssrWindow: () => (/* binding */ ssrWindow)
/* harmony export */ });
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend(target = {}, src = {}) {
    Object.keys(src).forEach((key) => {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject(src[key]) &&
            isObject(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

const ssrDocument = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: '',
    },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return {
            initEvent() { },
        };
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() { },
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}

const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState() { },
        pushState() { },
        go() { },
        back() { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle() {
        return {
            getPropertyValue() {
                return '';
            },
        };
    },
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia() {
        return {};
    },
    requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    const win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
}




/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/getBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/getBreakpoint.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBreakpoint)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function getBreakpoint(breakpoints, base = 'window', containerEl) {
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint.js */ "./node_modules/swiper/core/breakpoints/setBreakpoint.js");
/* harmony import */ var _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint.js */ "./node_modules/swiper/core/breakpoints/getBreakpoint.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setBreakpoint: _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  getBreakpoint: _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/setBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/setBreakpoint.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setBreakpoint)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

  // Get breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate(realIndex);
    swiper.updateSlides();
  }
  swiper.emit('breakpoint', breakpointParams);
}

/***/ }),

/***/ "./node_modules/swiper/core/check-overflow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/check-overflow/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  checkOverflow
});

/***/ }),

/***/ "./node_modules/swiper/core/classes/addClasses.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/classes/addClasses.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addClasses)
/* harmony export */ });
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/core/classes/index.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/classes/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses.js */ "./node_modules/swiper/core/classes/addClasses.js");
/* harmony import */ var _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses.js */ "./node_modules/swiper/core/classes/removeClasses.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addClasses: _addClasses_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  removeClasses: _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/classes/removeClasses.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/classes/removeClasses.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeClasses)
/* harmony export */ });
function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/core/core.js":
/*!******************************************!*\
  !*** ./node_modules/swiper/core/core.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_get_support_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/get-support.js */ "./node_modules/swiper/shared/get-support.js");
/* harmony import */ var _shared_get_device_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/get-device.js */ "./node_modules/swiper/shared/get-device.js");
/* harmony import */ var _shared_get_browser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/get-browser.js */ "./node_modules/swiper/shared/get-browser.js");
/* harmony import */ var _modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/resize/resize.js */ "./node_modules/swiper/core/modules/resize/resize.js");
/* harmony import */ var _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/observer/observer.js */ "./node_modules/swiper/core/modules/observer/observer.js");
/* harmony import */ var _events_emitter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events-emitter.js */ "./node_modules/swiper/core/events-emitter.js");
/* harmony import */ var _update_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/index.js */ "./node_modules/swiper/core/update/index.js");
/* harmony import */ var _translate_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./translate/index.js */ "./node_modules/swiper/core/translate/index.js");
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/swiper/core/transition/index.js");
/* harmony import */ var _slide_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slide/index.js */ "./node_modules/swiper/core/slide/index.js");
/* harmony import */ var _loop_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loop/index.js */ "./node_modules/swiper/core/loop/index.js");
/* harmony import */ var _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grab-cursor/index.js */ "./node_modules/swiper/core/grab-cursor/index.js");
/* harmony import */ var _events_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./events/index.js */ "./node_modules/swiper/core/events/index.js");
/* harmony import */ var _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./breakpoints/index.js */ "./node_modules/swiper/core/breakpoints/index.js");
/* harmony import */ var _classes_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./classes/index.js */ "./node_modules/swiper/core/classes/index.js");
/* harmony import */ var _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./check-overflow/index.js */ "./node_modules/swiper/core/check-overflow/index.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/swiper/core/defaults.js");
/* harmony import */ var _moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./moduleExtendParams.js */ "./node_modules/swiper/core/moduleExtendParams.js");
/* harmony import */ var _shared_process_lazy_preloader_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/process-lazy-preloader.js */ "./node_modules/swiper/shared/process-lazy-preloader.js");
/* eslint no-param-reassign: "off" */





















const prototypes = {
  eventsEmitter: _events_emitter_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  update: _update_index_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  translate: _translate_index_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  transition: _transition_index_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  slide: _slide_index_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  loop: _loop_index_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  grabCursor: _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  events: _events_index_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  breakpoints: _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  checkOverflow: _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  classes: _classes_index_js__WEBPACK_IMPORTED_MODULE_16__["default"]
};
const extendedDefaults = {};
class Swiper {
  constructor(...args) {
    let el;
    let params;
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, params);
    if (el && !params.el) params.el = el;
    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = (0,_shared_get_support_js__WEBPACK_IMPORTED_MODULE_2__.getSupport)();
    swiper.device = (0,_shared_get_device_js__WEBPACK_IMPORTED_MODULE_3__.getDevice)({
      userAgent: params.userAgent
    });
    swiper.browser = (0,_shared_get_browser_js__WEBPACK_IMPORTED_MODULE_4__.getBrowser)();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: (0,_moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_19__["default"])(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, _defaults_js__WEBPACK_IMPORTED_MODULE_18__["default"], allModulesParams);

    // Extend defaults with passed params
    swiper.params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, swiper.params);
    swiper.passedParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        evCache: []
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementChildren)(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementIndex)(slides[0]);
    return (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementIndex)(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementChildren)(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view = 'current', exact = false) {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        (0,_shared_process_lazy_preloader_js__WEBPACK_IMPORTED_MODULE_20__.processLazyPreloader)(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.shadowEl) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementChildren)(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementChildren)(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement ? el : wrapperEl,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementStyle)(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementStyle)(el, 'direction') === 'rtl'),
      wrongRTL: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementStyle)(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Attach events
    swiper.attachEvents();
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        (0,_shared_process_lazy_preloader_js__WEBPACK_IMPORTED_MODULE_20__.processLazyPreloader)(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          (0,_shared_process_lazy_preloader_js__WEBPACK_IMPORTED_MODULE_20__.processLazyPreloader)(swiper, e.target);
        });
      }
    });
    (0,_shared_process_lazy_preloader_js__WEBPACK_IMPORTED_MODULE_20__.preload)(swiper);

    // Init Flag
    swiper.initialized = true;
    (0,_shared_process_lazy_preloader_js__WEBPACK_IMPORTED_MODULE_20__.preload)(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute('style');
      wrapperEl.removeAttribute('style');
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.deleteProps)(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.extend)(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return _defaults_js__WEBPACK_IMPORTED_MODULE_18__["default"];
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_6__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swiper);

/***/ }),

/***/ "./node_modules/swiper/core/defaults.js":
/*!**********************************************!*\
  !*** ./node_modules/swiper/core/defaults.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopedSlides: null,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});

/***/ }),

/***/ "./node_modules/swiper/core/events-emitter.js":
/*!****************************************************!*\
  !*** ./node_modules/swiper/core/events-emitter.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler(...args) {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit(...args) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
});

/***/ }),

/***/ "./node_modules/swiper/core/events/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/events/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart.js */ "./node_modules/swiper/core/events/onTouchStart.js");
/* harmony import */ var _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove.js */ "./node_modules/swiper/core/events/onTouchMove.js");
/* harmony import */ var _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd.js */ "./node_modules/swiper/core/events/onTouchEnd.js");
/* harmony import */ var _onResize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onResize.js */ "./node_modules/swiper/core/events/onResize.js");
/* harmony import */ var _onClick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick.js */ "./node_modules/swiper/core/events/onClick.js");
/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onScroll.js */ "./node_modules/swiper/core/events/onScroll.js");
/* harmony import */ var _onLoad_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onLoad.js */ "./node_modules/swiper/core/events/onLoad.js");








let dummyEventAttached = false;
function dummyEventListener() {}
const events = (swiper, method) => {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;

  // Touch Events
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize_js__WEBPACK_IMPORTED_MODULE_4__["default"], true);
  } else {
    swiper[swiperMethod]('observerUpdate', _onResize_js__WEBPACK_IMPORTED_MODULE_4__["default"], true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const {
    params
  } = swiper;
  swiper.onTouchStart = _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper);
  swiper.onTouchMove = _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper);
  swiper.onTouchEnd = _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = _onScroll_js__WEBPACK_IMPORTED_MODULE_6__["default"].bind(swiper);
  }
  swiper.onClick = _onClick_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(swiper);
  swiper.onLoad = _onLoad_js__WEBPACK_IMPORTED_MODULE_7__["default"].bind(swiper);
  if (!dummyEventAttached) {
    document.addEventListener('touchstart', dummyEventListener);
    dummyEventAttached = true;
  }
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  attachEvents,
  detachEvents
});

/***/ }),

/***/ "./node_modules/swiper/core/events/onClick.js":
/*!****************************************************!*\
  !*** ./node_modules/swiper/core/events/onClick.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onClick)
/* harmony export */ });
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onLoad.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/events/onLoad.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onLoad)
/* harmony export */ });
/* harmony import */ var _shared_process_lazy_preloader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/process-lazy-preloader.js */ "./node_modules/swiper/shared/process-lazy-preloader.js");

function onLoad(e) {
  const swiper = this;
  (0,_shared_process_lazy_preloader_js__WEBPACK_IMPORTED_MODULE_0__.processLazyPreloader)(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onResize.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onResize.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onResize)
/* harmony export */ });
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onScroll.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onScroll.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onScroll)
/* harmony export */ });
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchEnd.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchEnd.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchEnd)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === event.pointerId);
  if (pointerIndex >= 0) {
    data.evCache.splice(pointerIndex, 1);
  }
  if (['pointercancel', 'pointerout', 'pointerleave'].includes(event.type)) {
    const proceed = event.type === 'pointercancel' && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchMove.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchMove.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchMove)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function onTouchMove(event) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
  if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
  const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        prevX: swiper.touches.currentX,
        prevY: swiper.touches.currentY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.now)();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  if (!data.isMoved) {
    if (isLoop) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
    // need another loop fix
    swiper.loopFix({
      direction: swiper.swipeDirection,
      setTranslate: true
    });
    loopFixed = true;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchStart.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchStart.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchStart)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");



// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)() || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event) {
  const swiper = this;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const data = swiper.touchEventsData;
  data.evCache.push(event);
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!swiper.wrapperEl.contains(targetEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = event.composedPath ? event.composedPath() : event.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.now)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor.js */ "./node_modules/swiper/core/grab-cursor/setGrabCursor.js");
/* harmony import */ var _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor.js */ "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setGrabCursor: _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  unsetGrabCursor: _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/setGrabCursor.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/setGrabCursor.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setGrabCursor)
/* harmony export */ });
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unsetGrabCursor)
/* harmony export */ });
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/loop/index.js":
/*!************************************************!*\
  !*** ./node_modules/swiper/core/loop/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate.js */ "./node_modules/swiper/core/loop/loopCreate.js");
/* harmony import */ var _loopFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix.js */ "./node_modules/swiper/core/loop/loopFix.js");
/* harmony import */ var _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy.js */ "./node_modules/swiper/core/loop/loopDestroy.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loopCreate: _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  loopFix: _loopFix_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  loopDestroy: _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopCreate.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopCreate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopCreate)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const slides = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementChildren)(slidesEl, `.${params.slideClass}, swiper-slide`);
  slides.forEach((el, index) => {
    el.setAttribute('data-swiper-slide-index', index);
  });
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next'
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopDestroy.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopDestroy.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopDestroy)
/* harmony export */ });
function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopFix.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopFix.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopFix)
/* harmony export */ });
function loopFix({
  slideRealIndex,
  slideTo = true,
  direction,
  setTranslate,
  activeSlideIndex,
  byController,
  byMousewheel
} = {}) {
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
  let loopedSlides = params.loopedSlides || slidesPerView;
  if (loopedSlides % params.slidesPerGroup !== 0) {
    loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
  }
  swiper.loopedSlides = loopedSlides;
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  // prepend last slides before start
  if (activeSlideIndex < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      prependSlidesIndexes.push(slides.length - index - 1);
    }
  } else if (activeSlideIndex /* + slidesPerView */ > swiper.slides.length - loopedSlides * 2) {
    slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      appendSlidesIndexes.push(index);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
          if (setTranslate) {
            swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
          }
        }
      } else {
        if (setTranslate) {
          swiper.slideToLoop(slideRealIndex, 0, false, true);
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
          }
        }
      } else {
        swiper.slideToLoop(slideRealIndex, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      slideTo: false,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix(loopParams);
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix(loopParams);
    }
  }
  swiper.emit('loopFix');
}

/***/ }),

/***/ "./node_modules/swiper/core/moduleExtendParams.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/moduleExtendParams.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ moduleExtendParams)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
      return;
    }
    if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
  };
}

/***/ }),

/***/ "./node_modules/swiper/core/modules/observer/observer.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/modules/observer/observer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Observer)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function Observer({
  swiper,
  extendParams,
  on,
  emit
}) {
  const observers = [];
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const attach = (target, options = {}) => {
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementParents)(swiper.el);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.el, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/***/ }),

/***/ "./node_modules/swiper/core/modules/resize/resize.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/modules/resize/resize.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Resize)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function Resize({
  swiper,
  on,
  emit
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/index.js":
/*!*************************************************!*\
  !*** ./node_modules/swiper/core/slide/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slideTo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo.js */ "./node_modules/swiper/core/slide/slideTo.js");
/* harmony import */ var _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop.js */ "./node_modules/swiper/core/slide/slideToLoop.js");
/* harmony import */ var _slideNext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext.js */ "./node_modules/swiper/core/slide/slideNext.js");
/* harmony import */ var _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev.js */ "./node_modules/swiper/core/slide/slidePrev.js");
/* harmony import */ var _slideReset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset.js */ "./node_modules/swiper/core/slide/slideReset.js");
/* harmony import */ var _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest.js */ "./node_modules/swiper/core/slide/slideToClosest.js");
/* harmony import */ var _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide.js */ "./node_modules/swiper/core/slide/slideToClickedSlide.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  slideTo: _slideTo_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  slideToLoop: _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  slideNext: _slideNext_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  slidePrev: _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  slideReset: _slideReset_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  slideToClosest: _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  slideToClickedSlide: _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideNext.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideNext.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideNext)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slidePrev.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slidePrev.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slidePrev)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled) return swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideReset.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideReset.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideReset)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideTo.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideTo.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideTo)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // Update Index
  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToClickedSlide.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClickedSlide.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToClickedSlide)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementChildren)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementChildren)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToClosest.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClosest.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToClosest)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToLoop.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToLoop.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToLoop)
/* harmony export */ });
function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      newIndex = swiper.getSlideIndexByData(newIndex);
    }
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/index.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/transition/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition.js */ "./node_modules/swiper/core/transition/setTransition.js");
/* harmony import */ var _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart.js */ "./node_modules/swiper/core/transition/transitionStart.js");
/* harmony import */ var _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd.js */ "./node_modules/swiper/core/transition/transitionEnd.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setTransition: _setTransition_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  transitionStart: _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  transitionEnd: _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/transition/setTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/setTransition.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTransition)
/* harmony export */ });
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
  }
  swiper.emit('setTransition', duration, byController);
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionEmit.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEmit.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionEmit)
/* harmony export */ });
function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionEnd.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEnd.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionEnd)
/* harmony export */ });
/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "./node_modules/swiper/core/transition/transitionEmit.js");

function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionStart.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionStart.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionStart)
/* harmony export */ });
/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "./node_modules/swiper/core/transition/transitionEmit.js");

function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/getTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/getTranslate.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSwiperTranslate)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.getTranslate)(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/translate/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate.js */ "./node_modules/swiper/core/translate/getTranslate.js");
/* harmony import */ var _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate.js */ "./node_modules/swiper/core/translate/setTranslate.js");
/* harmony import */ var _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate.js */ "./node_modules/swiper/core/translate/minTranslate.js");
/* harmony import */ var _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate.js */ "./node_modules/swiper/core/translate/maxTranslate.js");
/* harmony import */ var _translateTo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo.js */ "./node_modules/swiper/core/translate/translateTo.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getTranslate: _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  setTranslate: _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  minTranslate: _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  maxTranslate: _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  translateTo: _translateTo_js__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/translate/maxTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/maxTranslate.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ maxTranslate)
/* harmony export */ });
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/minTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/minTranslate.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ minTranslate)
/* harmony export */ });
function minTranslate() {
  return -this.snapGrid[0];
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/setTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/setTranslate.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTranslate)
/* harmony export */ });
function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/translateTo.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/translate/translateTo.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ translateTo)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

/***/ }),

/***/ "./node_modules/swiper/core/update/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/update/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateSize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize.js */ "./node_modules/swiper/core/update/updateSize.js");
/* harmony import */ var _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides.js */ "./node_modules/swiper/core/update/updateSlides.js");
/* harmony import */ var _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight.js */ "./node_modules/swiper/core/update/updateAutoHeight.js");
/* harmony import */ var _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset.js */ "./node_modules/swiper/core/update/updateSlidesOffset.js");
/* harmony import */ var _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress.js */ "./node_modules/swiper/core/update/updateSlidesProgress.js");
/* harmony import */ var _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress.js */ "./node_modules/swiper/core/update/updateProgress.js");
/* harmony import */ var _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses.js */ "./node_modules/swiper/core/update/updateSlidesClasses.js");
/* harmony import */ var _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex.js */ "./node_modules/swiper/core/update/updateActiveIndex.js");
/* harmony import */ var _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide.js */ "./node_modules/swiper/core/update/updateClickedSlide.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  updateSize: _updateSize_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  updateSlides: _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  updateAutoHeight: _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  updateSlidesOffset: _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  updateSlidesProgress: _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  updateProgress: _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  updateSlidesClasses: _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  updateActiveIndex: _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  updateClickedSlide: _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/update/updateActiveIndex.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateActiveIndex.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateActiveIndex),
/* harmony export */   getActiveIndexByTranslate: () => (/* binding */ getActiveIndexByTranslate)
/* harmony export */ });
/* harmony import */ var _shared_process_lazy_preloader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/process-lazy-preloader.js */ "./node_modules/swiper/shared/process-lazy-preloader.js");

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
    }
    return;
  }
  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (swiper.slides[activeIndex]) {
    realIndex = parseInt(swiper.slides[activeIndex].getAttribute('data-swiper-slide-index') || activeIndex, 10);
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    (0,_shared_process_lazy_preloader_js__WEBPACK_IMPORTED_MODULE_0__.preload)(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateAutoHeight.js":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateAutoHeight.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateAutoHeight)
/* harmony export */ });
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateClickedSlide.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateClickedSlide.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateClickedSlide)
/* harmony export */ });
function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide = e.closest(`.${params.slideClass}, swiper-slide`);
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateProgress.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateProgress.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateProgress)
/* harmony export */ });
function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSize.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSize.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSize)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementStyle)(el, 'padding-left') || 0, 10) - parseInt((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementStyle)(el, 'padding-right') || 0, 10);
  height = height - parseInt((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementStyle)(el, 'padding-top') || 0, 10) - parseInt((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementStyle)(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlides.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlides.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlides)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function updateSlides() {
  const swiper = this;
  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementChildren)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(wrapperEl, '--swiper-centered-offset-before', '');
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }
    if (slides[i] && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementStyle)(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementOuterSize)(slide, 'width', true) : (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementOuterSize)(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesClasses.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesClasses.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesClasses)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const getFilteredSlide = selector => {
    return (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementChildren)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    activeSlide = slides[activeIndex];
  }
  if (activeSlide) {
    // Active classes
    activeSlide.classList.add(params.slideActiveClass);

    // Next Slide
    let nextSlide = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementNextAll)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !nextSlide) {
      nextSlide = slides[0];
    }
    if (nextSlide) {
      nextSlide.classList.add(params.slideNextClass);
    }
    // Prev Slide
    let prevSlide = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementPrevAll)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !prevSlide === 0) {
      prevSlide = slides[slides.length - 1];
    }
    if (prevSlide) {
      prevSlide.classList.add(params.slidePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesOffset.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesOffset.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesOffset)
/* harmony export */ });
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesProgress.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesProgress.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesProgress)
/* harmony export */ });
function updateSlidesProgress(translate = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/a11y/a11y.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/a11y/a11y.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A11y)
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ "./node_modules/swiper/shared/classes-to-selector.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function A11y({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.innerHTML = '';
    notification.innerHTML = message;
  }
  const makeElementsArray = el => {
    if (!Array.isArray(el)) el = [el].filter(e => !!e);
    return el;
  };
  function getRandomNumber(size = 16) {
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && targetEl.matches((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementIndex)(bulletEl) + 1));
        }
      }
      if (bulletEl.matches((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = () => {
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    if (swiper.isElement) {
      swiper.el.shadowEl.append(liveRegion);
    } else {
      swiper.el.append(liveRegion);
    }

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    swiper.el.removeEventListener('focus', handleFocus, true);
    swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
    swiper.el.removeEventListener('pointerup', handlePointerUp, true);
  }
  on('beforeInit', () => {
    liveRegion = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/autoplay/autoplay.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay/autoplay.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Autoplay)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */

function Autoplay({
  swiper,
  extendParams,
  on,
  emit,
  params
}) {
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime;
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    swiper.el.removeEventListener('pointerenter', onPointerEnter);
    swiper.el.removeEventListener('pointerleave', onPointerLeave);
  };
  const attachDocumentEvents = () => {
    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      autoplayStartTime = new Date().getTime();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/controller/controller.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/controller/controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

function Controller({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            c.updateAutoHeight();
          });
        }
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementTransitionEnd)(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElement = document.querySelector(swiper.params.controller.control);
      if (controlElement && controlElement.swiper) {
        swiper.controller.control = controlElement.swiper;
      } else if (controlElement) {
        const onControllerSwiper = e => {
          swiper.controller.control = e.detail[0];
          swiper.update();
          controlElement.removeEventListener('init', onControllerSwiper);
        };
        controlElement.addEventListener('init', onControllerSwiper);
      }
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards/effect-cards.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards/effect-cards.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCards)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");





function EffectCards({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        // next
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

      /* eslint-disable */
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      /* eslint-enable */

      if (params.slideShadows) {
        // Set shadows
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl) {
          shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_4__.getSlideTransformEl)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCoverflow)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");




function EffectCoverflow({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBeforeEl) {
          shadowBeforeEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, slideEl, isHorizontal ? 'left' : 'top');
        }
        if (!shadowAfterEl) {
          shadowAfterEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, slideEl, isHorizontal ? 'right' : 'bottom');
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.getSlideTransformEl)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative/effect-creative.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative/effect-creative.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCreative)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");





function EffectCreative({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl && data.shadow) {
          shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_4__.getSlideTransformEl)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube/effect-cube.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube/effect-cube.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCube)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function EffectCube({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', `swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`);
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', `swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`);
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.slidesEl.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'swiper-cube-shadow');
          swiper.slidesEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', 'swiper-cube-shadow');
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector('.swiper-cube-shadow');
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFade)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");




function EffectFade({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.getSlideTransformEl)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip/effect-flip.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip/effect-flip.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFlip)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");





function EffectFlip({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress, params) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // Set shadows
    const params = swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress, params);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, params);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_4__.getSlideTransformEl)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/free-mode/free-mode.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode/free-mode.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ freeMode)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function freeMode({
  swiper,
  extendParams,
  emit,
  once
}) {
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)()
    });
  }
  function onTouchEnd({
    currentPos
  }) {
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    // Time diff
    const touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementTransitionEnd)(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementTransitionEnd)(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementTransitionEnd)(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/grid/grid.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/grid/grid.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
function Grid({
  swiper,
  extendParams
}) {
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = slidesLength => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    // Set slides order
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.style.order = newSlideOrderIndex;
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide.row = row;
    slide.column = column;
    slide.style[getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
  };
  const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    swiper.wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  swiper.grid = {
    initSlides,
    updateSlide,
    updateWrapperSize
  };
}

/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation/hash-navigation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HashNavigation)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function HashNavigation({
  swiper,
  extendParams,
  emit,
  on
}) {
  let initialized = false;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute('data-hash') === hash)[0];
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
          return index;
        }
        return swiper.getSlideIndex((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementChildren)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${activeSlideHash}` || '');
      emit('hashSet');
    } else {
      document.location.hash = activeSlideHash || '';
      emit('hashSet');
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window.addEventListener('hashchange', onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window.removeEventListener('hashchange', onHashChange);
    }
  };
  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/history/history.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/modules/history/history.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function History({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };
  const getPathValues = urlOverride => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    const slide = swiper.slides[index];
    let value = slugify(slide.getAttribute('data-history'));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ''}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ''}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute('data-history'));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };
  const destroy = () => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };
  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/keyboard/keyboard.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard/keyboard.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* eslint-disable consistent-return */


function Keyboard({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementParents)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementParents)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementOffset)(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit('keyPress', kc);
    return undefined;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document.addEventListener('keydown', handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document.removeEventListener('keydown', handle);
    swiper.keyboard.enabled = false;
  }
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/manipulation.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/manipulation.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manipulation)
/* harmony export */ });
/* harmony import */ var _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/appendSlide.js */ "./node_modules/swiper/modules/manipulation/methods/appendSlide.js");
/* harmony import */ var _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/prependSlide.js */ "./node_modules/swiper/modules/manipulation/methods/prependSlide.js");
/* harmony import */ var _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/addSlide.js */ "./node_modules/swiper/modules/manipulation/methods/addSlide.js");
/* harmony import */ var _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/removeSlide.js */ "./node_modules/swiper/modules/manipulation/methods/removeSlide.js");
/* harmony import */ var _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/removeAllSlides.js */ "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js");





function Manipulation({
  swiper
}) {
  Object.assign(swiper, {
    appendSlide: _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__["default"].bind(swiper),
    prependSlide: _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper),
    addSlide: _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper),
    removeSlide: _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper),
    removeAllSlides: _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__["default"].bind(swiper)
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/addSlide.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/addSlide.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSlide)
/* harmony export */ });
function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/appendSlide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/appendSlide.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendSlide)
/* harmony export */ });
function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.append(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/prependSlide.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/prependSlide.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ prependSlide)
/* harmony export */ });
function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.prepend(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeAllSlides)
/* harmony export */ });
function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/removeSlide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeSlide.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeSlide)
/* harmony export */ });
function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel/mousewheel.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel/mousewheel.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mousewheel)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* eslint-disable consistent-return */


function Mousewheel({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: 'swiper-no-mousewheel'
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.now)();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.now)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    }

    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.now)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    lastScrollTime = new window.Date().getTime();
    // Return false as a default
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  }
  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;

    // Ignore event if the target or its parents have the swiper-no-mousewheel class
    if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    // Get the scroll positions
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

    // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? 'next' : 'prev',
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]('mouseenter', handleMouseEnter);
    targetEl[method]('mouseleave', handleMouseLeave);
    targetEl[method]('wheel', handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events('addEventListener');
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events('removeEventListener');
    swiper.mousewheel.enabled = false;
    return true;
  }
  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/navigation/navigation.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/navigation/navigation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");

function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  const makeElementsArray = el => {
    if (!Array.isArray(el)) el = [el].filter(e => !!e);
    return el;
  };
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.shadowRoot.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/pagination/pagination.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/pagination/pagination.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ "./node_modules/swiper/shared/classes-to-selector.js");
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");



function Pagination({
  swiper,
  extendParams,
  on,
  emit
}) {
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  const makeElementsArray = el => {
    if (!Array.isArray(el)) el = [el].filter(e => !!e);
    return el;
  };
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.elementIndex)(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const newSlideIndex = swiper.getSlideIndexByData(index);
      const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
      if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
        swiper.loopFix({
          direction: newSlideIndex > currentSlideIndex ? 'next' : 'prev',
          activeSlideIndex: newSlideIndex,
          slideTo: false
        });
      }
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.elementOuterSize)(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.elementIndex)(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        subEl.innerHTML = paginationHTML || '';
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.shadowRoot.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.filter(subEl => {
          if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.elementParents)(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(params.clickableClass);
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    let {
      el
    } = swiper.pagination;
    if (!Array.isArray(el)) el = [el].filter(element => !!element);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/parallax/parallax.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/parallax/parallax.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function Parallax({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute('data-swiper-parallax') || '0';
    let x = el.getAttribute('data-swiper-parallax-x');
    let y = el.getAttribute('data-swiper-parallax-y');
    const scale = el.getAttribute('data-swiper-parallax-scale');
    const opacity = el.getAttribute('data-swiper-parallax-opacity');
    const rotate = el.getAttribute('data-swiper-parallax-rotate');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== 'undefined' && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid
    } = swiper;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementChildren)(el, '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]').forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = (duration = swiper.params.speed) => {
    const {
      el
    } = swiper;
    el.querySelectorAll('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar/scrollbar.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar/scrollbar.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");



function Scrollbar({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementOffset)(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__["default"])(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.shadowRoot.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`);
      if (!dragEl) {
        dragEl = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    }
    disableDraggable();
  }
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/thumbs/thumbs.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs/thumbs.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Thumb)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function Thumb({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementChildren)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {
          // newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener('init', onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener('init', onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/virtual/virtual.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/modules/virtual/virtual.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Virtual)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function Virtual({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document.createElement('div');
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    // eslint-disable-next-line
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === 'string') {
        tempDOM.innerHTML = slideEl;
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('swiper-slide');
    } else {
      slideEl = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', swiper.params.slideClass);
    }
    slideEl.setAttribute('data-swiper-slide-index', index);
    if (!params.renderSlide) {
      slideEl.innerHTML = slide;
    }
    if (params.cache) swiper.virtual.cache[index] = slideEl;
    return slideEl;
  }
  function update(force) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit('virtualUpdate');
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        // eslint-disable-next-line
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slidesEl.querySelectorAll(`.${swiper.params.slideClass}, swiper-slide`).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slidesEl.querySelectorAll(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementChildren)(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
        if (cachedElIndex) {
          cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === 'undefined') {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    if (!swiper.params.initialSlide) {
      update();
    }
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.setCSSProperty)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/zoom/zoom.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/zoom/zoom.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zoom)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function Zoom({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    imageEl: undefined,
    imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit('zoomChange', value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.el.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }

  // Events
  function onGestureStart(e) {
    if (e.pointerType === 'mouse') {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementParents)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = undefined;
        return;
      }
      gesture.maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = '0ms';
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = undefined;
    }
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event.pageX;
    image.touchesStart.y = event.pageY;
  }
  function onTouchMove(e) {
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !gesture.slideEl) return;
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth;
      image.height = gesture.imageEl.offsetHeight;
      image.startX = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getTranslate)(gesture.imageWrapEl, 'x') || 0;
      image.startY = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getTranslate)(gesture.imageWrapEl, 'y') || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = '0ms';
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = undefined;
      gesture.imageEl = undefined;
      gesture.imageWrapEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementChildren)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementParents)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const forceZoomRatio = typeof e === 'number' ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = undefined;
      touchY = undefined;
    }
    zoom.scale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    currentScale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementOffset)(gesture.slideEl).left + window.scrollX;
      offsetY = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementOffset)(gesture.slideEl).top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth;
      imageHeight = gesture.imageEl.offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementChildren)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.elementParents)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }
    zoom.scale = 1;
    currentScale = 1;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = undefined;
    gesture.originX = 0;
    gesture.originY = 0;
  }

  // Toggle Zoom
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  // Attach/Detach Events
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd(e);
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}

/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ classesToSelector)
/* harmony export */ });
function classesToSelector(classes = '') {
  return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}

/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElementIfNotDefined)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/swiper/shared/utils.js");

function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementChildren)(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}

/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createShadow)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/swiper/shared/utils.js");

function createShadow(params, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
  const shadowContainer = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getSlideTransformEl)(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass}`);
  if (!shadowEl) {
    shadowEl = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', `swiper-slide-shadow${side ? `-${side}` : ''}`);
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}

/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ effectInit)
/* harmony export */ });
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      // remove shadows
      swiper.slides.forEach(slideEl => {
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
      });
      // create new one
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ effectTarget)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/swiper/shared/utils.js");

function effectTarget(effectParams, slideEl) {
  const transformEl = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getSlideTransformEl)(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}

/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ effectVirtualTransitionEnd)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/swiper/shared/utils.js");

function effectVirtualTransitionEnd({
  swiper,
  duration,
  transformElements,
  allSlides
}) {
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.filter(slideEl => slideEl.shadowEl && slideEl.shadowEl === el.parentNode)[0];
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.elementTransitionEnd)(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}

/***/ }),

/***/ "./node_modules/swiper/shared/get-browser.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-browser.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBrowser: () => (/* binding */ getBrowser)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

let browser;
function calcBrowser() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  return {
    isSafari: needPerspectiveFix || isSafari(),
    needPerspectiveFix,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}


/***/ }),

/***/ "./node_modules/swiper/shared/get-device.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/shared/get-device.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDevice: () => (/* binding */ getDevice)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _get_support_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support.js */ "./node_modules/swiper/shared/get-support.js");


let deviceCached;
function calcDevice({
  userAgent
} = {}) {
  const support = (0,_get_support_js__WEBPACK_IMPORTED_MODULE_1__.getSupport)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}


/***/ }),

/***/ "./node_modules/swiper/shared/get-support.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-support.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSupport: () => (/* binding */ getSupport)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

let support;
function calcSupport() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}


/***/ }),

/***/ "./node_modules/swiper/shared/process-lazy-preloader.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/shared/process-lazy-preloader.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preload: () => (/* binding */ preload),
/* harmony export */   processLazyPreloader: () => (/* binding */ processLazyPreloader)
/* harmony export */ });
const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

/***/ }),

/***/ "./node_modules/swiper/shared/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/swiper/shared/utils.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateCSSModeScroll: () => (/* binding */ animateCSSModeScroll),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   deleteProps: () => (/* binding */ deleteProps),
/* harmony export */   elementChildren: () => (/* binding */ elementChildren),
/* harmony export */   elementIndex: () => (/* binding */ elementIndex),
/* harmony export */   elementNextAll: () => (/* binding */ elementNextAll),
/* harmony export */   elementOffset: () => (/* binding */ elementOffset),
/* harmony export */   elementOuterSize: () => (/* binding */ elementOuterSize),
/* harmony export */   elementParents: () => (/* binding */ elementParents),
/* harmony export */   elementPrevAll: () => (/* binding */ elementPrevAll),
/* harmony export */   elementStyle: () => (/* binding */ elementStyle),
/* harmony export */   elementTransitionEnd: () => (/* binding */ elementTransitionEnd),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   findElementsInElements: () => (/* binding */ findElementsInElements),
/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle),
/* harmony export */   getSlideTransformEl: () => (/* binding */ getSlideTransformEl),
/* harmony export */   getTranslate: () => (/* binding */ getTranslate),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   nextTick: () => (/* binding */ nextTick),
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   setCSSProperty: () => (/* binding */ setCSSProperty)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle(el) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis = 'x') {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el, null);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend(...args) {
  const to = Object(args[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowEl && slideEl.shadowEl.querySelector('.swiper-slide-transform') || slideEl;
}
function findElementsInElements(elements = [], selector = '') {
  const found = [];
  elements.forEach(el => {
    found.push(...el.querySelectorAll(selector));
  });
  return found;
}
function elementChildren(element, selector = '') {
  return [...element.children].filter(el => el.matches(selector));
}
function createElement(tag, classes = []) {
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : [classes]));
  return el;
}
function elementOffset(el) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}


/***/ }),

/***/ "./node_modules/swiper/swiper.esm.js":
/*!*******************************************!*\
  !*** ./node_modules/swiper/swiper.esm.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11y: () => (/* reexport safe */ _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   Autoplay: () => (/* reexport safe */ _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Controller: () => (/* reexport safe */ _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   EffectCards: () => (/* reexport safe */ _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   EffectCoverflow: () => (/* reexport safe */ _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   EffectCreative: () => (/* reexport safe */ _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   EffectCube: () => (/* reexport safe */ _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   EffectFade: () => (/* reexport safe */ _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   EffectFlip: () => (/* reexport safe */ _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   FreeMode: () => (/* reexport safe */ _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   Grid: () => (/* reexport safe */ _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   HashNavigation: () => (/* reexport safe */ _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   History: () => (/* reexport safe */ _modules_history_history_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   Keyboard: () => (/* reexport safe */ _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Manipulation: () => (/* reexport safe */ _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   Mousewheel: () => (/* reexport safe */ _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Navigation: () => (/* reexport safe */ _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Pagination: () => (/* reexport safe */ _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Parallax: () => (/* reexport safe */ _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   Scrollbar: () => (/* reexport safe */ _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Swiper: () => (/* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Thumbs: () => (/* reexport safe */ _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   Virtual: () => (/* reexport safe */ _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Zoom: () => (/* reexport safe */ _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.js */ "./node_modules/swiper/core/core.js");
/* harmony import */ var _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/virtual/virtual.js */ "./node_modules/swiper/modules/virtual/virtual.js");
/* harmony import */ var _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyboard/keyboard.js */ "./node_modules/swiper/modules/keyboard/keyboard.js");
/* harmony import */ var _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mousewheel/mousewheel.js */ "./node_modules/swiper/modules/mousewheel/mousewheel.js");
/* harmony import */ var _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation/navigation.js */ "./node_modules/swiper/modules/navigation/navigation.js");
/* harmony import */ var _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pagination/pagination.js */ "./node_modules/swiper/modules/pagination/pagination.js");
/* harmony import */ var _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollbar/scrollbar.js */ "./node_modules/swiper/modules/scrollbar/scrollbar.js");
/* harmony import */ var _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax/parallax.js */ "./node_modules/swiper/modules/parallax/parallax.js");
/* harmony import */ var _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom/zoom.js */ "./node_modules/swiper/modules/zoom/zoom.js");
/* harmony import */ var _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/controller/controller.js */ "./node_modules/swiper/modules/controller/controller.js");
/* harmony import */ var _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/a11y/a11y.js */ "./node_modules/swiper/modules/a11y/a11y.js");
/* harmony import */ var _modules_history_history_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/history/history.js */ "./node_modules/swiper/modules/history/history.js");
/* harmony import */ var _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/hash-navigation/hash-navigation.js */ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js");
/* harmony import */ var _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/autoplay/autoplay.js */ "./node_modules/swiper/modules/autoplay/autoplay.js");
/* harmony import */ var _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/thumbs/thumbs.js */ "./node_modules/swiper/modules/thumbs/thumbs.js");
/* harmony import */ var _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/free-mode/free-mode.js */ "./node_modules/swiper/modules/free-mode/free-mode.js");
/* harmony import */ var _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/grid/grid.js */ "./node_modules/swiper/modules/grid/grid.js");
/* harmony import */ var _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/manipulation/manipulation.js */ "./node_modules/swiper/modules/manipulation/manipulation.js");
/* harmony import */ var _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/effect-fade/effect-fade.js */ "./node_modules/swiper/modules/effect-fade/effect-fade.js");
/* harmony import */ var _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/effect-cube/effect-cube.js */ "./node_modules/swiper/modules/effect-cube/effect-cube.js");
/* harmony import */ var _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/effect-flip/effect-flip.js */ "./node_modules/swiper/modules/effect-flip/effect-flip.js");
/* harmony import */ var _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/effect-coverflow/effect-coverflow.js */ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js");
/* harmony import */ var _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/effect-creative/effect-creative.js */ "./node_modules/swiper/modules/effect-creative/effect-creative.js");
/* harmony import */ var _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/effect-cards/effect-cards.js */ "./node_modules/swiper/modules/effect-cards/effect-cards.js");
/**
 * Swiper 9.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 13, 2023
 */


























/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");



})();

/******/ })()
;
//# sourceMappingURL=main.js.map