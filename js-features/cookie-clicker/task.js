
const elementClicker = document.getElementById("clicker__counter");
const element = document.getElementById("cookie");
let count = +elementClicker.textContent;
let sizeCount = 2;
let speedClick = 0;
let prevDate = new Date();
let second = prevDate.getSeconds();

function changeSizes() {
  let currentDate = new Date();
  let currentSecond = currentDate.getSeconds();

  speedClick = 1 / (currentSecond - second);
  second = currentSecond;
  element.width = element.width*sizeCount;
  //element.height = element.width*sizeCount;
  count ++;

	if (count % 2 === 0) {
	  sizeCount = 2;
	}
	else {
	  sizeCount = 0.5;
    }
	elementClicker.textContent = count + '\n' +`Скорость клика: ${speedClick}`;
};

element.onclick = changeSizes;