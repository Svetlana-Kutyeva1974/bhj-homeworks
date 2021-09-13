const allLinksOffTools = Array.from(document.querySelectorAll("a.has-tooltip"));
//let tool = document.querySelector("div.tooltip");//для проверки 1 вариант с готовым элементом
let tool = document.createElement('div');
tool.classList.add("tooltip");
document.body.insertBefore(tool,document.body.children[2]);

function isActive () {
    return (allLinksOffTools.findIndex((item) => (item.classList.contains("tooltip_active"))));
  }

function toolPosition () {
 let coords = this.getBoundingClientRect();
 tool.style.left = coords.left + "px";
 tool.style.top = coords.bottom + "px";
};

const onClickToggle = function(event) {
  tool.innerHTML = this.getAttribute("title");
   if (!tool.classList.contains("tooltip_active") ) {
    event.preventDefault();
    toolPosition.call(this);
    tool.classList.add("tooltip_active");
   }
 else {
  if(tool.getBoundingClientRect().left !== this.getBoundingClientRect().left && tool.getBoundingClientRect().top !== this.getBoundingClientRect().bottom){
    tool.classList.remove("tooltip_active");
    toolPosition.call(this);
    event.preventDefault();
    tool.classList.add("tooltip_active");
   }
   else{
   tool.classList.remove("tooltip_active");
   }
 }
}

for (let elem of allLinksOffTools) {
  elem.addEventListener('click', onClickToggle);
}






























//------------------------------------------------------------

/*

else {
  tool.classList.remove("tooltip_active");
  if(tool.getBoundingClientRect().left === this.getBoundingClientRect().left && tool.getBoundingClientRect().top === this.getBoundingClientRect().bottom){
  
  }
  else{
    event.preventDefault();
    toolPosition.call(this);
    tool.classList.add("tooltip_active");
    
    }
 }




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

