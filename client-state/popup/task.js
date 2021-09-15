const element = document.getElementById("subscribe-modal");
const iClose = document.querySelector("div.modal__close_times");

function closeModal() {
const modalParent = this.closest(".modal");
modalParent.classList.remove("modal_active");
modalParent.classList.add("modal__close");
document.cookie = 'close=true';
// console.log(document.cookie);
}

window.addEventListener("load", (event) => {
	console.log(document.cookie);
	if (document.cookie !== "" && document.cookie !== null) {// работаем с куки
		console.log(document.cookie.split("=")[1]);
	}	
  else {
   // обычное выполнение и запись кук
     element.classList.add("modal_active");
     iClose.onclick = closeModal;
     window.addEventListener("beforeunload", (event) => {
		  event.preventDefault();
	 });
  }
});


