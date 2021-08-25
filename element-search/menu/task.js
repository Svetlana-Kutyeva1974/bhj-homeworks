const element = document.getElementById("modal_main");
element.className = element.className + " modal_active";

let elementClose = document.querySelector("div.modal__close");
elementClose.onclick = function() {
  element.className = "modal modal__close";
};

const elementSuccess = document.getElementById("modal_success");
const elementForSuccess = document.querySelector("a.show-success"); 
elementForSuccess.onclick = function() {
  element.className = "modal modal__close";
  elementSuccess.className = "modal modal_active";
};