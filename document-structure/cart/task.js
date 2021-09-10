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
	console.log(this);
	let buscet = document.querySelector('div.cart__products');
	
	let buscetAll = Array.from(buscet.querySelectorAll('div.cart__product'));
//return (arr.findIndex((item) => (item.classList.contains("slider__item_active"))));
	let l = buscetAll.findIndex((item) => (item.dataset.id === this.closest('.product').dataset.id));

	let product = document.createElement('div');
	let img = document.createElement('img');
	let productCount = document.createElement('div');
     

	if (buscetAll.length === 0 || l === -1 )

    {
    product.classList.add("cart__product");
   // let i = this.closest('.product');
   // product.dataset.id = i.getAttribute('data-id');
    product.dataset.id = this.closest('.product').dataset.id;
    //document.body.insertBefore(product,document.body.children[2]);
    //buscet.insertAdjacentElement('beforeEnd', product);
     buscet.insertAdjacentElement('afterBegin', product);


    img.classList.add("cart__product-image");
    img.src = this.closest('div.product').children[1].getAttribute('src');
    //img.src = "https://static-eu.insales.ru/images/products/1/7875/257179331/4515850.jpg";//изменить
    //document.body.insertBefore(product,document.body.children[2]);

    product.insertAdjacentElement('afterBegin', img);

    productCount.classList.add("cart__product-count");
    //let i = this.closest('.product__quantity-controls');
    let i = this.previousElementSibling.children[1];
   // let ii = i.querySelector('div.product__quantity-value');
    productCount.innerText = i.innerText;//"20";//изменить  

    //document.body.insertBefore(product,document.body.children[2]);

    product.insertAdjacentElement('beforeEnd', productCount);
}

else {
	 buscetAll[l].children[1].innerText += this.previousElementSibling.children[1].innerText;
}
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