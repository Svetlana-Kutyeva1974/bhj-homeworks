let xhr = new XMLHttpRequest();
let formData = new FormData();
const progress = document.getElementById( 'progress' );

let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
let formData = new FormData(form);
let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
xhr.addEventListener('readystatechange', function() {
	if (xhr.readyState == xhr.DONE && xhr.status == 200) {
		//let data = JSON.parse(xhr.responseText);
	}
	 
    xhr.onprogress = function(event) { // xhr.upload.onprogress = function(event) {

  // event.loaded - количество загруженных байт
  // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
  // event.total - количество байт всего (только если lengthComputable равно true)
    console.log(`Загружено ${event.loaded} из ${event.total}`);
    progress.attributes[0].value = `${event.loaded/10000}`;
    console.log(progress.attributes[0].value);
};
});
xhr.send(formData);
e.preventDefault();
});