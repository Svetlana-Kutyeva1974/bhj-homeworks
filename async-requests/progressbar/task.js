let xhr = new XMLHttpRequest();
let formData = new FormData();
const progress = document.getElementById( 'progress' );

let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  let xhr = new XMLHttpRequest();
  let formData = new FormData(form);
    // отслеживаем процесс отправки
    xhr.upload.onprogress = function(event) {
    console.log(`Отправлено ${event.loaded} из ${event.total}`);
    progress.attributes[0].value = `${event.loaded/event.total}`;
    console.log(progress.attributes[0].value);
    };

    xhr.onloadend = function() {
      if (xhr.status == 200) {
        console.log("Успех");
      } else {
        console.log("Ошибка " + this.status);
      }
    };

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	xhr.send(formData);
  e.preventDefault();
});
