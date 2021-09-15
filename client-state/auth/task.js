let welcome = document.getElementById('welcome');
const author = document.getElementById('signin')
const form = document.getElementById('signin__form');

function enterUser() {
   author.classList.remove('signin_active');
   welcome.classList.add('welcome_active');
}

window.addEventListener("load", (event) => {
  if (localStorage.length != 0 ) {
    console.log("Локально" );
    enterUser();
    welcome.children[0].innerHTML = localStorage.getItem('id');
  }
  else {
  //запрос
  form.addEventListener('submit', (e) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let formData = new FormData(form);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    
      xhr.onload= function(event) {
        if (xhr.status == 200 ) {
          console.log("Успех" + xhr.response.success + xhr.response.user_id);
          if (xhr.response.success === true) {
            enterUser();
            welcome.children[0].innerHTML = xhr.response.user_id;
            localStorage.id = `${xhr.response.user_id}`;
          }
          else {
            alert("Неверный логин/пароль");
          }
        } else {
          console.log("Ошибка " + this.status + xhr.statusText);
          
          }
      };
      xhr.send(formData);
      e.preventDefault();
      });
  ///-------
  }
});























//----------------------------------




   // отслеживаем процесс отправки
   /* xhr.upload.onprogress = function(event) {
    console.log(`Отправлено ${event.loaded} из ${event.total}`);
    progress.attributes[0].value = `${event.loaded/event.total}`;
    console.log(progress.attributes[0].value);
    };
*/

    /*xhr.onload = function() {
  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
  } else { // если всё прошло гладко, выводим результат
    alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
  }
};*/


 /* xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.send(formData);
  e.preventDefault();
 */
