//let decNumberProduct = document.querySelectorAll( '.product__quantity-control_dec' );
//let incNumberProduct = document.querySelectorAll( '.product__quantity-control_inc' );
let productControl = Array.from(document.querySelectorAll('product__controls'));
let productChild = document.querySelectorAll('product__quantity');

function addTaskHtml (item) {
  tasks.innerHTML += `
    <div class="task">
      <div class="task__title">
       ${item}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
`;
}


/*function clickNodeRemove () {
  event.preventDefault();
  this.querySelector("a.product__quantity-control_dec")..remove();

}*/

//function AddElement(){
  /*event.preventDefault();
  addTaskHtml(item);
  item = "";
  document.querySelector(".tasks__input").value = "";// очистка поля ввода
  document.querySelector("div.tasks__list").addEventListener('click', clickNodeRemove);*/
  //this.querySelector("a.product__quantity-control_dec").();
 /* this.querySelectorAll( '.product__quantity-control_dec' ).forEach((point) => {
	  point.addEventListener('click', onClick1);
  });
  this.querySelectorAll( '.product__quantity-control_inc' ).forEach((point) => {
	  point.addEventListener('click', onClick2);
  });;
  this.querySelectorAll( '.product__add').forEach((point) => {
	  point.addEventListener('click', onClick3);
  });;*/
//}

/*for (let item of productControl) {
  item.addEventListener('click', AddElement);
}*/

function onClickDec() {
    (this.nextElementSibling.innerText === "0") ? this.nextElementSibling.innerText = `0` : this.nextElementSibling.innerText -= `1`;
  }

 function onClickInc() {
     this.previousElementSibling.innerText += `1`;
  }

function onClickAdd() {
	let buscet = document.querySelector('div.cart__products');
	let product = document.createElement('div');
	let img = document.createElement('img');
	let productCount = document.createElement('div');
    
    product.classList.add("cart__product");
    product.dataset.id = "1";// изменить
    //document.body.insertBefore(product,document.body.children[2]);
    buscet.insertAdjacentElement('afterBegin', product);

    img.classList.add("cart__product-image");
    img.src = "https://static-eu.insales.ru/images/products/1/7875/257179331/4515850.jpg";//изменить
    //document.body.insertBefore(product,document.body.children[2]);
    buscet.insertAdjacentElement('beforeEnd', img);

    productCount.classList.add("cart__product-count");
    productCount.innerText = "20";//изменить
    //document.body.insertBefore(product,document.body.children[2]);
    buscet.insertAdjacentElement('beforeEnd', productCount);

   // buscet.insertBefore(tool,document.body.children[2]);
    //this.closest('div.prodact').dataset.id;
    //product.setAttribute('id',`${this.closest('div.prodact').dataset.id}`)
   
    //this.input.selectedIndex = item.index;
    //this.valueElement.textContent = item.text;
    // this.nextElementSibiling.innerHTML += 1;
  }


 document.querySelectorAll('div.product__quantity-control_dec' ).forEach((point) => {
	  point.addEventListener('click', onClickDec);
  });
  document.querySelectorAll('.product__quantity-control_inc' ).forEach((point) => {
	  point.addEventListener('click', onClickInc);
  });;
  document.querySelectorAll('.product__add').forEach((point) => {
	  point.addEventListener('click', onClickAdd);
  });;