const activeArrowPrev = document.querySelector("div.slider__arrow_prev");
const activeArrowNext = document.querySelector("div.slider__arrow_next");
const arr = Array.from(document.querySelectorAll("div.slider__item"));
const arrDots = Array.from(document.querySelectorAll("div.slider__dot"));

function isActive () {
	return (arr.findIndex((item, i, array) => {
		return (item.classList.contains("slider__item_active")); 
	}));
}

function toggleSlider(i) {
	arrDots[isActive()].classList.remove("slider__dot_active");
	arr[isActive()].classList.remove("slider__item_active");

	arr[i].classList.add("slider__item_active");
	arrDots[i].classList.add("slider__dot_active");
}

arrDots[isActive()].classList.add("slider__dot_active");

activeArrowPrev.onclick = function ()
{
	let count = isActive();
	if (count === 0) 
	{
		count = arr.length-1;
	}
	else {
		count = count - 1;
	} 
	toggleSlider(count);
}

activeArrowNext.onclick = function ()
{
	let count = isActive();
	if (count <= (arr.length - 2)) 
	{
		count = count + 1;
	}
	else {
		count = 0;
	}
	toggleSlider(count);
}

for (let i = 0; i<arrDots.length; i++)
{
	arrDots[i].onclick = function () 
	{
		toggleSlider(i);
	}
}






















//---------------------------мусор---------------------------------

/*function isActive(element, index, array) {
return (element.classList.contains("slider__item_active"));
}*/
//console.log(arr.findIndex(isActive));


/*console.log(arr.findIndex((item, i, array) => {
	return (item.classList.contains("slider__item_active") === true); 
})
);
*/
		//arr[countCurrent].classList.remove("slider__item_active");

/*function isActive(element, index, array) {
return (element.classList.contains("slider__item_active"));
}
console.log(arr.findIndex(isActive));
*/




//arrDots[i].classList.add("slider__dot_active");


		//count = getActiveIndex();
		//arrDots[count].classList.remove("slider__dot_active");

		/*let activeSlider = document.querySelector("div.slider__item_active");
		console.log(activeSlider);
		if (activeSlider != null) {
			activeSlider.classList.remove("slider__item_active");
		}

		arr[i].classList.add("slider__item_active");

*/
