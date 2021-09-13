const allLinksOffTools = Array.from(document.querySelectorAll("a.has-tooltip"));
//let tool = document.querySelector("div.tooltip");//для проверки 1 вариант с готовым элементом
let tool = document.createElement('div');
tool.classList.add("tooltip");
document.body.insertBefore(tool,document.body.children[2]);

function toolPosition () {
 let coords = this.getBoundingClientRect();
 tool.style.left = coords.left + "px";
 tool.style.top = coords.bottom + "px";
};


const onClickToggle = function(event) {
  tool.innerHTML = this.getAttribute("title");
  tool.classList.toggle("tooltip_active");
  event.preventDefault();
  toolPosition.call(this);

}



for (let elem of allLinksOffTools) {
  elem.addEventListener('click', onClickToggle);
}






























//------------------------------------------------------------

/*
const onScrollToggle = function() {
  if (document.querySelector("div.tooltip").classList.contains("tooltip_active")) {
    document.querySelector("div.tooltip").classList.remove("tooltip_active");
   // toolPosition.call(this);
   // document.querySelector("div.tooltip_active").scrollIntoView(false);//в конец окна
  }
  
}
window.addEventListener('scroll', onScrollToggle);

*/






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



*/

/*if (tool.classList.contains("tooltip_active")) {
    //toolPosition();
   // tool.classList.remove("tooltip_active");
  }
  else {
    tool.classList.add("tooltip_active");
    //toolPosition();
  }*/



/*function isActive () {
    return (allLinksOffTools.findIndex((item) => (item.nextElementSibiling.classList.contains("tooltip_active"))));
  }
  */

