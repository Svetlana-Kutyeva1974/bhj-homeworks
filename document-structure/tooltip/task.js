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

const onClickToggle = function() {
   tool.innerHTML = this.getAttribute("title");
   if (!tool.classList.contains("tooltip_active")) { 
     tool.classList.add("tooltip_active");//      заменить  блок if на tool.classList.toggle("tooltip_active");
   }
   event.preventDefault();
   toolPosition.call(this);
}

for (let elem of allLinksOffTools) {
  elem.addEventListener('click', onClickToggle);
}






























//------------------------------------------------------------

/*<body>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>

  <blockquote>
    Teacher: Why are you late?
    Student: There was a man who lost a hundred dollar bill.
    Teacher: That's nice. Were you helping him look for it?
    Student: No. I was standing on it.
  </blockquote>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>


  <script>
    /**
     * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
     *
     * @param {Node} anchor     элемент, около которого позиционируется другой элемент
     * @param {string} position одно из: top/right/bottom
     * @param {Node} elem       элемент, который позиционируется
     *
     * Оба элемента elem и anchor должны присутствовать в документе
     */
    function positionAt(anchor, position, elem) {

      let anchorCoords = anchor.getBoundingClientRect();

      switch (position) {
        case "top":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
          break;

        case "right":
          elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
          elem.style.top = anchorCoords.top + "px";
          break;

        case "bottom":
          elem.style.left = anchorCoords.left + "px";
          elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
          break;
      }

    }

    /**
     * Показывает заметку с заданным содержимым на заданной позиции
     * относительно элемента anchor.
     */
    function showNote(anchor, position, html) {

      let note = document.createElement('div');
      note.className = "note";
      note.innerHTML = html;
      document.body.append(note);

      positionAt(anchor, position, note);
    }

    // проверка
    let blockquote = document.querySelector('blockquote');

    showNote(blockquote, "top", "note above");
    showNote(blockquote, "right", "note at the right");
    showNote(blockquote, "bottom", "note below");
  </script>


</body>
*/






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

