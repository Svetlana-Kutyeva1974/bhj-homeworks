const element = document.getElementById("subscribe-modal");
const iClose = document.querySelector("div.modal__close_times");

function saveCookie() {
 document.cookie = 'close=true';
}

function getCookieFull() {
//return JSON.parse(localStorage.getItem('obj'));
document.cookie = 'user=' + encodeURIComponent('true');
return document.cookie;
}

function closeModal() {
const modalParent = this.closest(".modal");
modalParent.classList.remove("modal_active");
modalParent.classList.add("modal__close");
document.cookie = 'close=true';
// console.log(document.cookie);
}


const getCookie = () => {
//const value = document.cookie;
const value = "; " + document.cookie;
let parts = value.split("; " + modal__close + "=");
if (parts.length === 2) {
return parts
.pop()
.split(";")
.shift();
}
/*let arrParts = document.cookie.split("=");
return arrParts[1];*/
}

window.addEventListener("load", (event) => {
	//getCookieFull();
	console.log(document.cookie);
	if (document.cookie !== "" && document.cookie !== null) {// работаем с куки


		//if (document.cookie.split("=")[1] === "" || document.cookie.split("=")[1] === 'false') {
			/*element.classList.add("modal_active");
			iClose.onclick = closeModal;
			event.preventDefault();
	        saveCookie();*/
		//}
		console.log(document.cookie.split("=")[1]);
	}
		
  else {
   // обычное выполнение и запись кук
     element.classList.add("modal_active");
     iClose.onclick = closeModal;
     
     //document.cookie = 'close=true';
     //console.log(document.cookie);

     //saveCookie();
     //event.preventDefault();

     window.addEventListener("beforeunload", (event) => {
		  event.preventDefault();
	 });
  }
});


