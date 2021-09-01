let arrLinks = Array.from(document.getElementsByClassName("card"));
for (let linkClick of arrLinks)
{
	let activeMenu = linkClick.querySelector("div.dropdown__value");
	activeMenu.onclick = function (event)
	  {
	  	if (!(linkClick.querySelector("ul.dropdown__list").classList.contains("dropdown__list_active"))) {

		  linkClick.querySelector("ul.dropdown__list").classList.add("dropdown__list_active");
		}
		  else {
		  	linkClick.querySelector("ul.dropdown__list").classList.remove("dropdown__list_active");
		  }
	  }

	let arr = Array.from(linkClick.querySelectorAll("a.dropdown__link"));

	let onClick = (event) => {
		activeMenu.textContent = event.target.innerHTML;
		document.querySelector("ul.dropdown__list_active").classList.remove("dropdown__list_active");
		event.preventDefault();
	}

  arr.forEach((point) => {
	  point.addEventListener('click', onClick);
  });
}
















//----------------мусор-----------------

/*
document.body.addEventListener("click", function(event) {
	console.log("Clicked1", event.target.nodeName);
    if (event.target.nodeName == "div.card")
      console.log("Clicked2", event.target.textContent);

  });
  */