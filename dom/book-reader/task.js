let arrLinksOfSize = Array.from(document.getElementsByClassName("font-size"));
let arrBookLinkBackground = Array.from(document.getElementsByClassName("control__background-color"));
let  arrBookLinkColor = Array.from(document.querySelectorAll(div.book__control_color));
for (let link of arrLinksOfSize)
{
  //let arrRotator = Array.from(linkClick.querySelectorAll("span.rotator__case"));

  function isActive () {
    return (arrLinksOfSize.findIndex((item) => (item.classList.contains("font-size_active"))));
  }

  function toggleSize() {
    console.log(isActive());
    arrLinksOfSize[isActive()].classList.remove("font-size_active");
    this.classList.add("font-size_active");
    console.log(this);
    //event.preventDefault();
    return false;
    //link.style.color = arrRotator[i].dataset.color;
  }

  function toggleBookSize() {
      let  divBook= document.querySelector(div.book__content);
    //let divBook div = document.getElementsById("book");
    if (isActive() == 0) {
      divBook.classList.add("book_fs-big");}
    else if(isActive() == 2) {
      divBook.classList.add("book_fs-small");
     }  //иначе ничего не меняем
    //event.preventDefault();
    //return false;
    //link.style.color = arrRotator[i].dataset.color;
  }

function toggleBookColor() {
      let  arrBookLinkColor = document.querySelectorAll(div.book__control_color);
    //let divBook div = document.getElementsById("book");
    //if (isActive() == 0) {
      document.querySelector(div.book__content).style.color = arrBookColor[isActive()].dataset.color);}
    //else if(isActive() == 2) {
     // divBook.classList.add("book_fs-small");
     //}//иначе ничего не меняем
    //event.preventDefault();
    //return false;
    //link.style.color = arrRotator[i].dataset.color;
  }

function toggleBookBackground() {
      let  arrBookBackground = document.querySelector(div.book__control__background);
    //let divBook div = document.getElementsById("book");
    if (isActive() == 0) {
      document.querySelector(div.book).style.background = arrBookBackground[isActive()].dataset.background);}
    else if(isActive() == 2) {
     divBook.classList.add("book_fs-small");
     } //иначе ничего не меняем
    //event.preventDefault();
    //return false;
    //link.style.color = arrRotator[i].dataset.color;
  }

  function onClick() {
    toggleSize();
    //toggleBookSize();
  }


  link.addEventListener('click', onClick);
}
