let activeArrowPrev = document.querySelector("div.slider__arrow_prev");
let activeArrowNext = document.querySelector("div.slider__arrow_next");
const getAllSlider = document.querySelectorAll("div.slider__item"); 
console.log(getAllSlider);
let arr = Array.from(getAllSlider);
console.log(arr);

const getAllDots= document.querySelectorAll("div.slider__dot"); 
let arrDots = Array.from(getAllDots);
console.log(arrDots);
let length = arrDots.length;

function ActiveIndex () {
let ActiveIndex = arr.findIndex(() => document.querySelector("div.slider__item_active"));
console.log(ActiveIndex);
return ActiveIndex;
}

function RemoveSl() {
console.log(this);
console.log(ActiveIndex());
let activeSlider = document.querySelector("div.slider__item_active");
console.log(activeSlider);
	if (activeSlider !== null) {
		activeSlider.classList.remove("slider__item_active");
	}
}


function ActivePrSl() {
//const modalParent = this.closest(".slider__items");
let activeSlider = document.querySelector("div.slider__item_active");
	if (activeSlider.previousElementSibling !== null )
		{activeSlider.previousElementSibling.classList.add("slider__item_active");}
	else
		{activeSlider.parentElement.lastElementChild.classList.add("slider__item_active");}

}

function ActiveNextSl() {
	//const modalParent = this.closest(".slider__items");
	let activeSlider = document.querySelector("div.slider__item_active");
if (activeSlider.nextElementSibling !== null )
		{activeSlider.nextElementSibling.classList.add("slider__item_active");}
	else
		{activeSlider.parentElement.firstElementChild.classList.add("slider__item_active");}

}

activeArrowPrev.onclick = function ()
{
	//RemoveSl.call(activeArrowPrev);
	RemoveSl();
    //ActivePrSl.call(activeArrowPrev);
    ActivePrSl.call(activeArrowPrev.closest(".slider__navigation"));
    //ActivePrSl();

}
activeArrowNext.onclick = function ()
{

  RemoveSl();
  //RemoveSl.call(activeArrowPrev);
  ActiveNextSl.call(activeArrowNext.closest(".slider__navigation"));
  //ActiveNextSl();
}

// points

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
