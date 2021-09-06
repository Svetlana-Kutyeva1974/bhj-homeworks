const chatWindows = document.querySelector(".chat-widget");
const messages = document.querySelector( '.chat-widget__messages' );
let message = "message";
let item = "";

function getCurrentFormattedTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    if (hours < 10) { hours = "0" + hours;}
    if (minutes < 10) { minutes = "0" + minutes;}
    return `${hours}:${minutes}`;
}

function getSmsRobot() {
    const words = [
        'Могу ли я Вам чем-нибудь помочь?',
        'Благодарим за обращение в нашу компанию! ',
        'Готовим ответ на Ваш запрос.',
        'Все операторы заняты, просьба немного подождать.',
        'Рады новой встрече с Вами.',
        'До свидания!Хорошего дня!'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

function viewSms (message, item) {
	messages.innerHTML += `
  <div class="${message}">
    <div class="message__time">${getCurrentFormattedTime()}</div>
    <div class="message__text">
      ${item}
    </div>
  </div>
`;
}

function isActive () {
	return (arr.findIndex((item) => (item.classList.contains("chat-widget_active"))));
}

const onKey = (e) => {
    console.log(e.key, e.code);
    if (e.code === "Enter") {
      message += " message_client";
      viewSms (message, item);
      viewSms ("message", getSmsRobot());
      item = "";
      document.querySelector(".chat-widget__input").value = "";
      message = "message";

    }
item += `${e.key}`;
}

function onClick(event) {
    chatWindows.classList.add("chat-widget_active");
    document.addEventListener('keydown', onKey);
    }

chatWindows.addEventListener('click', onClick);
viewSms(message, "Добрый день!");






















        
/*messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${getCurrentFormattedTime()}</div>
    <div class="message__text">
      
      ${item}
    </div>
  </div>
`;
console.log(messages);
item = "";*/




       // getElementsByID("chat-widget__input").setAttribute("placeholder", "Введите ваше сообщение");
      /* const input = document.querySelector(".chat-widget__input");
       console.log(input);
       input.setAttribute("placeholder", "Введите ваше сообщение");*/
///document.querySelector(".chat-widget__input").textContent = "Введите ваше сообщение";
     // document.querySelector(".chat-widget__input").setAttribute(textContent, "Введите ваше сообщение");