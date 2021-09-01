const activeArrowPrev = document.querySelector("div.slider__arrow_prev");
const activeArrowNext = document.querySelector("div.slider__arrow_next");
const arr = Array.from(document.querySelectorAll("div.slider__item"));
const arrDots = Array.from(document.querySelectorAll("div.slider__dot"));

let count = 0;
arrDots[count].classList.add("slider__dot_active");

function RemoveAddSl(count) {
	arr.forEach((item, i) => {
        if (item.classList.contains("slider__item_active")) {
            arrDots[i].classList.remove("slider__dot_active");
            item.classList.remove("slider__item_active");
            return;
        }
    });

arr[count].classList.add("slider__item_active");
arrDots[count].classList.add("slider__dot_active");

}

activeArrowPrev.onclick = function ()
{
	if (count >= 1 && count <= 4) {
		count -=1;
		RemoveAddSl.call(activeArrowPrev,count);
	};
	if (count === 0) {
		count = 4;
		RemoveAddSl.call(activeArrowPrev,count);
	};
}

activeArrowNext.onclick = function ()
{
 
  if (count >= 0 && count <= 3) {
		count += 1;
		RemoveAddSl.call(activeArrowNext,count);
	};
 if (count === 4) {
		count = 0;
		RemoveAddSl.call(activeArrowNext, count);
	};
}

// points

for (let i = 0; i<arrDots.length; i++)
{
	arrDots[i].onclick = function ()
	{
        RemoveAddSl(i);
		arrDots[i].classList.add("slider__dot_active");
        
		/*count = getActiveIndex();
		arrDots[count].classList.remove("slider__dot_active");*/

		let activeSlider = document.querySelector("div.slider__item_active");
		console.log(activeSlider);
		if (activeSlider != null) {
			activeSlider.classList.remove("slider__item_active");
		}

		arr[i].classList.add("slider__item_active");

	}
}




















 /*countCurrent = arr.findIndex((item, i, array) => {
	if (item.classList.contains("slider__item_active")) {
    console.log(i);
     return i;
}
});
		arr[countCurrent].classList.remove("slider__item_active");
  
  */





/*function getActiveIndex() {
let ActiveIndex = arr.findIndex((item, i, array) => {
	if (array[i].classList.contains("div.slider__item.slider__item_active")) {
return i;
}
});
return ActiveIndex;
}
*/