let xhr = new XMLHttpRequest(); // экземпляр объекта XMLHttpRequest
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com'); // создаем асинхронный запрос
//xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'json';
//let responseVar = { {CharCode : null,Value : null}};
xhr.send(); // отправляем запрос


/*xhr.onload = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log(xhr.responseXML);
    }
  }
};*/


xhr.onreadystatechange = function () {
	if(xhr.readyState === xhr.DONE && xhr.status === 200) {
	
	document.querySelector('img.loader_active').classList.remove("loader_active");
	console.log(xhr.response, "\n", xhr.response.response.Valute);
	//responseVar = JSON.parse(xhr.response);
	//console.log(responseVar);
    let items = document.getElementById('items');

    for (let i in xhr.response.response.Valute)
      {
        const item = document.createElement('div');
        item.classList.add('item'); 
        items.insertAdjacentElement('beforeEnd', item);

        const itemCode = document.createElement('div');
	    const itemValue = document.createElement('div');
	    const itemCurrency = document.createElement('div');
	    
	    itemCode.classList.add("item__code"); 
	    itemValue.classList.add("item__value"); 
	    itemCurrency.classList.add("item__currency");

	    itemCurrency.innerText = "руб" + "\n";

    	console.log(xhr.response.response.Valute[i].CharCode, xhr.response.response.Valute[i].Value);
    	itemCode.innerText = xhr.response.response.Valute[i].CharCode;
        itemValue.innerText = xhr.response.response.Valute[i].Value;
        console.log(itemCode.innerText , itemValue.innerText );

	    item.insertAdjacentElement('beforeEnd', itemCode);
	    item.insertAdjacentElement('beforeEnd', itemValue);
	    item.insertAdjacentElement('beforeEnd', itemCurrency);
	};
}
}
