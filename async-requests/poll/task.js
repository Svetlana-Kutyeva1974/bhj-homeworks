let xhr = new XMLHttpRequest();
 let items = document.getElementById('poll__answers');

function saveUser(obj) {
localStorage.obj = JSON.stringify(obj);
}

function getUser() {
	try {
	return JSON.parse(localStorage.getItem('obj'));
	} catch (e) {
	return null;
	}
}

function createButton (text){
  //let items = document.getElementById('poll__answers');
  const item = document.createElement('button');
        item.classList.add('poll__answer'); 
        item.innerText = text;
        items.insertAdjacentElement('beforeEnd', item);
}

function viewTable(obj) {
  //let items = document.getElementById('poll__answers');
  let itemsTitle = document.getElementById('poll__title');
	for (let i of obj.data.answers)
      {
        itemsTitle.innerText = obj.data.title;
        createButton(i);
	  };
}

        xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php'); // создаем асинхронный запрос
		//xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.responseType = 'json';
		//let responseVar = { {CharCode : null,Value : null}};
		xhr.send(); // отправляем запрос

		xhr.onreadystatechange = function () {
	    if(xhr.readyState === xhr.DONE && xhr.status === 200) {

			//document.querySelector('img.loader_active').classList.remove("loader_active");
		   // let items = document.getElementById('items');
		    let obj = xhr.response;
		    console.log(obj);
		    console.log(obj.id, obj.data);
		    console.log(obj.data.title, obj.data.answers);

		    //saveUser(obj);
		    viewTable(obj);

            const arrButton = Array.from(document.querySelectorAll('button.poll__answer'));
		    //for (let button of arrButton){
		    	for (let ibutton = 0; ibutton <= arrButton.length-1; ibutton++){
			    arrButton[ibutton].addEventListener("click", (event) => {
					//event.preventDefault();
					console.log(ibutton);
					alert('Спасибо, ваш голос засчитан!');




			const xhr2 = new XMLHttpRequest;
			xhr2.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
			xhr2.responseType = 'json';
			xhr2.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
			xhr2.send(`vote=${obj.id}&answer=${ibutton}`);		
			xhr2.onreadystatechange = function () {
		        if(xhr2.readyState === xhr2.DONE && xhr2.status === 200) {
					let obj2 = xhr2.response;
				    console.log(obj2, obj2.stat.length-1);
				    for (let i = 0; i <= obj2.stat.length-1; i++) {
	                console.log(obj2.stat[i]["answer"], obj2.stat[i]["votes"]);
	                //if (i=0){items.innerText = "";}
	                items.innerText = `${obj2.stat[i]["answer"]}` + `${obj2.stat[i]["votes"]}` + "\n";
	                 }
                 }
            }


		        });
		    }



		   /* window.addEventListener("beforeunload", (event) => {
				event.preventDefault();
			    saveUser(obj);
	        });*/
	    }
	  }