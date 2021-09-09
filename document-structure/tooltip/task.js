const allLinksOffTools = Array.from(document.querySelectorAll("a.has-tooltip"));
let tool = document.querySelector("div.tooltip");


// получаем координаты элемента в контексте документа
/*function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}*/


function toolPosition(){
   console.log("на каком а =" + this);
   let coords = this.getBoundingClientRect();
};


/*function isActive () {
    return (allLinksOffTools.findIndex((item) => (item.nextElementSibiling.classList.contains("tooltip_active"))));
  }
*/

const onClickToggle = function() {
  //tool.classList.remove("tooltip_active");
  //let tool = document.querySelector("div.tooltip");
  let coords = this.getBoundingClientRect();
  //let coords = getCoords(this);
  //console.log("активный=" + isActive ());
  console.log(this);
  console.log(coords.left + coords.bottom);
  console.log("исход текст" + tool.innertext);
  //tool.classList.toggle("tooltip_active");
  tool.innerHTML = this.getAttribute("title");
  console.log("атрибут значение:" + this.getAttribute("title"));
  console.log("новый текст" + tool.innerHTML);
 // tool.style.cssText = "position: fixed;";
 // tool.dataset.position = "top";
  tool.style.left = coords.left + "px";
  tool.style.top = coords.bottom + "px";

  
if (!tool.classList.contains("tooltip_active")) { 
  tool.classList.add("tooltip_active");}

  event.preventDefault();
}

for (let elem of allLinksOffTools) {
elem.addEventListener('click', onClickToggle);
console.log(this);

}

//document.removeEventListener('click', onClickToggle);

const onScrollToggle = function() {
  if (document.querySelector("div.tooltip").classList.contains("tooltip_active")) {
    //onClickToggle();
    document.querySelector("div.tooltip").classList.remove("tooltip_active");
    //document.querySelector("div.tooltip_active").scrollIntoView(false);//в конец окна
  }
  
}
window.addEventListener('scroll', onScrollToggle);








/*

arrPoint.forEach((item,) => {
  item.addEventListener('click', onClick);
});
*/

/*const arrReveal = Array.from(document.querySelectorAll("div.reveal"));

let isInViewport = function(element) {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;
  //return (elementTop > 0 && elementTop < viewportHeight) ? true : false;
  return (elementTop > 0 && elementTop < viewportHeight) || (elementBottom.bottom < viewportHeight && elementBottom.bottom > 0) ? true : false;

};

const onScrollToggle = function() {
  arrReveal.forEach((itemReveal) => {
    console.log(isInViewport(itemReveal));
    (isInViewport(itemReveal)) ? itemReveal.classList.add('reveal_active') : itemReveal.classList.remove('reveal_active');
  });
}
window.addEventListener('scroll', onScrollToggle);
*/



/*


allLinksOffTools.forEach((item) => {
   console.log(this);
    (isInViewport(itemReveal)) ? itemReveal.classList.add('reveal_active') : itemReveal.classList.remove('reveal_active');
  });
});





/*if (tool.classList.contains("tooltip_active")) {
    //toolPosition();
   // tool.classList.remove("tooltip_active");
  }
  else {
    tool.classList.add("tooltip_active");
    //toolPosition();
}*/
*/