let arrLinksOfSize = Array.from(document.getElementsByClassName("font-size"));
let divBook = document.getElementById("book");

function isActive () {
  return (arrLinksOfSize.findIndex((item) => (item.classList.contains("font-size_active"))));
  }

for (let link of arrLinksOfSize)
  {
    
  function toggleBookSize() {
    if (isActive() === 2) {
      divBook.classList.toggle("book_fs-big");
    }
    else if(isActive() === 0) {
      divBook.classList.toggle("book_fs-small");
    }  //иначе ничего не меняем
  }
  
  function toggleSize() {
    toggleBookSize();
    arrLinksOfSize[isActive()].classList.remove("font-size_active");
    link.classList.add("font-size_active");
    toggleBookSize();
    event.preventDefault();
  }

  function onClick(event) {
    toggleSize();
  }

  link.addEventListener('click', onClick);
}

