let arrLinksOfSize = Array.from(document.getElementsByClassName("font-size"));

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
    let divBook = document.getElementsById("book");
    //divBook.classList.add("book_fs-big");
    //divBook.classList.add("book_fs-small");

    //event.preventDefault();
    return false;
    //link.style.color = arrRotator[i].dataset.color;
  }
  function onClick() {
    toggleSize();
    //toggleBookSize();
  }

  link.addEventListener('click', onClick);
}