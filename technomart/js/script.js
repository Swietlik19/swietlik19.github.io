var link = document.querySelector(".write-us-open");
var linkMap = document.querySelector(".map-click");

var popup = document.querySelector(".modal-content");
var popupName = popup.querySelector("[name = name]");
var popupEmail = popup.querySelector("[name = email]");
var popupLetter = popup.querySelector("[name = letter-text]");
var popupMap = document.querySelector(".modal-content-map");

var closePopup = document.querySelectorAll(".modal-content-close");

var form = popup.querySelector("form");

var storage = localStorage.getItem("myName");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.style.display = "block";
  
  if (storage) {
    popupName.value = storage;
    popupEmail.focus();
  } else {
    popupName.focus();
  }
});

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.style.display = "block";
});

closePopup[0].addEventListener("click", function () {
  popup.style.display = "none";
});

closePopup[1].addEventListener("click", function () {
  popupMap.style.display = "none";
});

form.addEventListener("submit", function (evt) {
  if (!popupName.value || !popupEmail.value || !popupLetter.value) {
    evt.preventDefault();
    console.log("Нужно заполнить все поля");
  } else {
    localStorage.setItem("myName", popupName.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.style.display === "block") {
      popup.style.display = "none";
    }
    if (popupMap.style.display === "block") {
      popupMap.style.display = "none";
    }
  }
});