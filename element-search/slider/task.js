let activeArrowPrev = document.querySelector("div.slider__arrow_prev");
let activeArrowNext = document.querySelector("div.slider__arrow_next");
const getAllSlider = document.querySelectorAll("div.slider__item"); 
console.log(getAllSlider);
let arr = Array.from(getAllSlider);

const getAllDots= document.querySelectorAll("div.slider__dot"); 
let arrDots = Array.from(getAllDots);
console.log(arrDots);

let ActiveIndex = arr.findIndex(() => document.querySelector("div.slider__item_active"));
console.log(ActiveIndex);

activeArrowPrev.onclick = function ()
{
	let activeSlider = document.querySelector("div.slider__item_active");
	if (activeSlider != null) {
		activeSlider.classList.remove("slider__item_active");
	}
	if (activeSlider.previousElementSibling != null )
		{activeSlider.previousElementSibling.classList.add("slider__item_active");}
	else
		{activeSlider.parentElement.lastElementChild.classList.add("slider__item_active");}


}
activeArrowNext.onclick = function ()
{
	let activeSlider = document.querySelector("div.slider__item_active");
	if (activeSlider!= null) {
		activeSlider.classList.remove("slider__item_active");
	}
	if (activeSlider.nextElementSibling != null )
		{activeSlider.nextElementSibling.classList.add("slider__item_active");}
	else
		{activeSlider.parentElement.firstElementChild.classList.add("slider__item_active");}
}

// points

//const getAllDots= document.querySelectorAll("div.slider__dot"); 
//let arrDots = Array.from(getAllDots);

for (let i = 0; i<length; i++)
{
	arrDots[i].onclick = function ()
	{
		arrDots[i].classList.add("slider__dot_active");
		let activeSlider = document.querySelector("div.slider__item_active");
		console.log(activeSlider);
		if (activeSlider != null) {
			activeSlider.classList.remove("slider__item_active");
		}
		arr[i].classList.add("slider__item_active");
		console.log(arr[i]);

	}
}
