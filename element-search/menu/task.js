const getMenuPoint = document.querySelectorAll("a.menu__link"); 
let arr = Array.from(getMenuPoint);
const length = arr.length;
for (let i = 0; i<length; i++)
{
	arr[i].onclick = function ()
	{
		let activeMenu = document.querySelector("ul.menu_active");
			if (activeMenu != null) {
				activeMenu.classList.remove("menu_active");
			}
			if (arr[i].nextElementSibling != null) {
	    	arr[i].nextElementSibling.classList.add("menu_active");
	    	return false;
	    }
	    if (arr[i].parentElement.parentElement.className === "menu menu_sub") {
	    	return false;
	    }
	  };
}