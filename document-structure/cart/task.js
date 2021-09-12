let productControl = Array.from(document.querySelectorAll('product__controls'));
let productChild = document.querySelectorAll('product__quantity');


function onClickDec() {
    //(this.nextElementSibling.innerText === "0") ? this.nextElementSibling.innerText = `0` : this.nextElementSibling.innerText -= `1`;
    let num = Number(this.nextElementSibling.innerText) - 1;
   (this.nextElementSibling.innerText === "1") ? this.nextElementSibling.innerText = `1` : this.nextElementSibling.innerText = `${num}`;
 
  }

 function onClickInc() {
  let num = Number(this.previousElementSibling.innerText) + 1;
     this.previousElementSibling.innerText = `${num}`;
  }

function onClickAdd() {
	console.log(this);
	let buscet = document.querySelector('div.cart__products');
	let buscetAll = Array.from(buscet.querySelectorAll('div.cart__product'));
	let l = buscetAll.findIndex((item) => (item.dataset.id === this.closest('.product').dataset.id));

	let product = document.createElement('div');
	let img = document.createElement('img');
	let productCount = document.createElement('div');
     

	if (buscetAll.length === 0 || l === -1 )

    {
    product.classList.add("cart__product");
    product.dataset.id = this.closest('.product').dataset.id;
    buscet.insertAdjacentElement('afterBegin', product);


    img.classList.add("cart__product-image");
    img.src = this.closest('div.product').children[1].getAttribute('src');
    product.insertAdjacentElement('afterBegin', img);

    productCount.classList.add("cart__product-count");
    let i = this.previousElementSibling.children[1];
    productCount.innerText = i.innerText;//"20"
    product.insertAdjacentElement('beforeEnd', productCount);
}

else {
   let num2 = Number(buscetAll[l].children[1].innerText) + Number(this.previousElementSibling.children[1].innerText);
	// buscetAll[l].children[1].innerText = this.previousElementSibling.children[1].innerText;
  buscetAll[l].children[1].innerText = `${num2}`;
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