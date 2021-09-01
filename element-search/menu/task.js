let arrMenu = Array.from(document.getElementsByClassName("menu_main"));
for (let menuClick of arrMenu)
{
	let arrLinks = Array.from(menuClick.querySelectorAll("a.menu__link"));
	for (let linkClick of arrLinks)
	{
		linkClick.onclick = function ()
		{
			let activeMenu = menuClick.querySelector("ul.menu_active");
			let activeMenus = Array.from(document.querySelectorAll("ul.menu_active"));
			console.log(activeMenus.length);
			if (linkClick.nextElementSibling.classList.contains("menu_active")) {
				  linkClick.nextElementSibling.classList.remove("menu_active");
				  return false;
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
}