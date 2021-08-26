const element = document.getElementById("modal_main");
const elementTimes = document.querySelectorAll("div.modal__close_times");
let arr = Array.from(elementTimes);
const length = arr.length;
element.classList.add("modal_active");

for (let i = 0; i<length; i++)
{
  arr[i].onclick = function () {
    arr[i].parentElement.parentElement.classList.remove("modal_active");
    arr[i].parentElement.parentElement.classList.add("modal__close");
  }
}

const elementSuccess = document.getElementById("modal_success");
const elementForSuccess = document.querySelector("a.show-success"); 
elementForSuccess.onclick = function() {
  element.classList.remove("modal_active");
  element.classList.add("modal__close");
  elementSuccess.classList.add("modal_active");
};