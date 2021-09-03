let arrLinks = Array.from(document.getElementsByClassName("card"));
let id;
for (let linkClick of arrLinks)
{
console.log("linkClick----" + linkClick);
const arrRotator = Array.from(linkClick.querySelectorAll("span.rotator__case"));
console.log("массив" + arrRotator[0] + arrRotator[1]);
//let timerId = setInterval(function() {
//let timerId = setInterval(() => onClick(), 2000);

function isActive () {
  return (arrRotator.findIndex((item) => (item.classList.contains("rotator__case_active"))));
}

function toggleBanner(i) {
  arrRotator[isActive()].classList.remove("rotator__case_active");
  arrRotator[i].classList.add("rotator__case_active");
}

function toggleRotator() {
  let i= isActive();
   console.log("индекс" + i);
      (i === (arrRotator.length - 1)) ? i = 0 : i+= 1;
        console.log("индекс новый" + i);
        toggleBanner(i)
        console.log(arrRotator[i].classList);
        console.log(arrRotator);
        return ;
}

function onClick() {// один раз проходит. теперь эту процедуру поставить на интервал
  //toggleRotator();
  id = setInterval (() => toggleRotator(), 1000);
}

function onClickClear() {
  clearInterval(id);
}

linkClick.addEventListener('click', onClick);
//linkClick.addEventListener('click', onClickClear);
}








/*


 // arrRotator.indexOf(classList.contains('rotator__case_active'))

let arrLinks = Array.from(document.getElementsByClassName("card"));
for (let linkClick of arrLinks)
{

const arrRotator = Array.from(linkClick.querySelectorAll("span.rotator__case"));

const onClick = setInterval(function() {
  arrRotator.forEach((item, i, arr) => {
    console.log(item);
    //linkClick.addEventListener('click', onClick);
    if (i != arr.length-1 && item.classList.contains('rotator__case_active')) {
      item.classList.remove('rotator__case_active');
      arr[i+1].classList.add('rotator__case_active');
    console.log(item);

  }
});
}
, 1000);

linkClick.addEventListener('click', seonClick);
 
}*/





/*
let arrLinks = Array.from(document.getElementsByClassName("card"));
for (let linkClick of arrLinks)
{
  console.log("linkClick----" + linkClick);
const arrRotator = Array.from(linkClick.querySelectorAll("span.rotator__case"));
//let timerId = setInterval(function() {
//let timerId = setInterval(() => onClick(), 2000);

function toggleRotator(){

}



function onClick() {
  arrRotator.forEach((item, i, arr) => {
    console.log(item);
    //linkClick.addEventListener('click', onClick);
    if (i != arr.length-2 && item.classList.contains('rotator__case_active')) {
      item.classList.remove('rotator__case_active');
      arr[i+1].classList.add('rotator__case_active');
    }

    if (i = arr.length-1 && item.classList.contains('rotator__case_active')) {
      item.classList.remove('rotator__case_active');
      i = 0;
      arr[i].classList.add('rotator__case_active');
    }

  });
}//, 1000);


linkClick.addEventListener('click', setInterval(() => onClick(), 2000));
//linkClick.addEventListener('click', onClick);
 
}

*/