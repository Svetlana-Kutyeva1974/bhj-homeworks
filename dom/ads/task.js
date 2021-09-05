let arrLinks = Array.from(document.getElementsByClassName("card"));

for (let linkClick of arrLinks)
{
  let id;
  let time = 1000;
  let arrRotator = Array.from(linkClick.querySelectorAll("span.rotator__case"));

  function isActive () {
    return (arrRotator.findIndex((item) => (item.classList.contains("rotator__case_active"))));
  }

  function toggleBanner(i) {
    arrRotator[isActive()].classList.remove("rotator__case_active");
    arrRotator[i].classList.add("rotator__case_active");
    arrRotator[i].style.color = arrRotator[i].dataset.color;
    time = +arrRotator[i].dataset.speed;
    onClickClear();
    onClick(time);
  }

  function toggleRotator() {
    let i= isActive();
     console.log("индекс" + i);
        (i === (arrRotator.length - 1)) ? i = 0 : i+= 1;
          toggleBanner(i)
          return ;
  }

  function onClick(time) {
    id = setInterval (() => toggleRotator(), time);
  }

  function onClickClear() {
    clearInterval(id);
  }

  linkClick.addEventListener('click', onClick);
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