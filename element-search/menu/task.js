
let arrLinks = Array.from(document.querySelectorAll("a.menu__link"));
for (let linkClick of arrLinks)
{
	linkClick.onclick = function ()
	{
		 let activeMenu = document.querySelector("ul.menu_active");
				if (linkClick.nextElementSibling.classList.contains("menu_active")) {
				linkClick.nextElementSibling.classList.remove("menu_active");
				return;
			}
			 
			if (linkClick.nextElementSibling != null && !(linkClick.nextElementSibling.classList.contains("menu_active"))) {
				if (activeMenu != null) {
				activeMenu.classList.remove("menu_active");
			}
				linkClick.nextElementSibling.classList.add("menu_active");
	    	return false;
			}
	  }
}







//--------------------------------------------------------------------------

// два меню
/*function variantMenu() {
const linkClick2 = this.closest(".menu");
		 let activeMenu = document.querySelector("ul.menu_active");
				if (linkClick2.nextElementSibling.classList.contains("menu_active")) {
				linkClick2.nextElementSibling.classList.remove("menu_active");
				return;
			}
			
			else if (linkClick2.nextElementSibling != null) {
				if (activeMenu != null) {
				activeMenu.classList.remove("menu_active");
			}
				linkClick2.nextElementSibling.classList.add("menu_active");
	    	return false;
			}
}

let arrLinks = Array.from(document.querySelectorAll("a.menu__link"));
for (let linkClick of arrLinks)
{
	linkClick.onclick = variantMenu;
}
*/



// два меню
/*function variantMenu() {
const linkClick2 = this.closest(".menu");
		 let activeMenu = document.querySelector("ul.menu_active");
				if (linkClick2.nextElementSibling.classList.contains("menu_active")) {
				linkClick2.nextElementSibling.classList.remove("menu_active");
				return;
			}
			
			else if (linkClick2.nextElementSibling != null) {
				if (activeMenu != null) {
				activeMenu.classList.remove("menu_active");
			}
				linkClick2.nextElementSibling.classList.add("menu_active");
	    	return false;
			}
}

let arrLinks = Array.from(document.querySelectorAll("a.menu__link"));
for (let linkClick of arrLinks)
{
	linkClick.onclick = variantMenu;
}
*/









/*
let index = arrLinks.findIndex((item) => {
			 	console.log("иntv" + item);
			 	item.nextElementSibling.classList.contains("menu_active") == true});
			console.log("индекс " + index);
*/