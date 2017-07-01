var gamburgerButton = document.querySelector(".main-nav__toggle");
var crossButton = document.querySelector(".main-nav__close");
var menuBlock = document.querySelector(".main-nav__list");

var popupError = document.querySelector(".modal--error");
var popupSuccess = document.querySelector(".modal--success");

var form = document.querySelector(".form-block__form");

menuBlock.classList.remove("main-nav__list--open");

gamburgerButton.addEventListener("click", function () {
  menuBlock.classList.add("main-nav__list--open");
  gamburgerButton.classList.remove("main-nav__toggle--show");
});

crossButton.addEventListener("click", function () {
  menuBlock.classList.remove("main-nav__list--open");
  gamburgerButton.classList.add("main-nav__toggle--show");
});

var errorCheck = false;

if (form) {
  var inputName = form.querySelector("[name = name]");
  var inputSurname = form.querySelector("[name = surname]");
  var inputEmail = form.querySelector("[name = email]");
  var inputTelephone = form.querySelector("[name = telephone]");
  var modalErrorClose = popupError.querySelector(".modal-btn");
  var modalSuccessClose = popupSuccess.querySelector(".modal-btn");

  form.addEventListener("submit", function (evt) {
    if (!inputName.value) {
      errorCheck = true;
      inputName.classList.add("form-block__user-info--error");
    } else {
      inputName.classList.remove("form-block__user-info--error");
    }

    if (!inputSurname.value) {
      errorCheck = true;
      inputSurname.classList.add("form-block__user-info--error");
    } else {
      inputSurname.classList.remove("form-block__user-info--error");
    }

    if (!inputEmail.value) {
      errorCheck = true;
      inputEmail.classList.add("form-block__user-info--error");
    } else {
      inputEmail.classList.remove("form-block__user-info--error");
    }

    if (!inputTelephone.value) {
      errorCheck = true;
      inputTelephone.classList.add("form-block__user-info--error");
    } else {
      inputTelephone.classList.remove("form-block__user-info--error");
    }

    if (errorCheck) {
      evt.preventDefault();
      popupError.classList.add("modal--show");
    } else {
      popupSuccess.classList.add("modal--show");
    }
  });

  modalErrorClose.addEventListener("click", function () {
    errorCheck = false;
    popupError.classList.remove("modal--show");
  });

  modalSuccessClose.addEventListener("click", function () {
    popupSuccess.classList.remove("modal--show");
  });

}
