const arrPoint = Array.from(document.querySelectorAll("div.tab"));
const arrContent = Array.from(document.querySelectorAll("div.tab__content"));

function isToggleTab(arr, string){
  arr.forEach((item) => {
		if (item.classList.contains(string)){
			item.classList.remove(string);
		};
	});
}
const onClick = (event) => {
    isToggleTab(arrPoint, "tab_active");
    isToggleTab(arrContent, "tab__content_active");
	event.currentTarget.classList.add("tab_active");
	arrContent[arrPoint.indexOf(event.currentTarget)].classList.add("tab__content_active");
}

arrPoint.forEach((item,) => {
	item.addEventListener('click', onClick);
});

















//--------------мусор------------------------------------------

/*

const arrPoint = Array.from(document.querySelectorAll("div.tab"));
const arrContent = Array.from(document.querySelectorAll("div.tab__content"));

function isToggleTab(arr, string){

}
const onClick = (e) => {
	console.log(e.type, e.report, e.target, event.currentTarget);
	console.log(event.currentTarget);
	arrPoint.forEach((item) => {
		if (item.classList.contains("tab_active")){
			item.classList.remove("tab_active");
		};
	});
	arrContent.forEach((item) => {
		if (item.classList.contains("tab__content_active")){
			item.classList.remove("tab__content_active");
		};
	});

	event.currentTarget.classList.add("tab_active");

	console.log("индекс" , arrPoint.indexOf(event.currentTarget));

	arrContent[arrPoint.indexOf(event.currentTarget)].classList.add("tab__content_active");
}

arrPoint.forEach((item,) => {
	item.addEventListener('click', onClick);
});



*/