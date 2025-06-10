let cart = document.querySelector(".cart"),
  itemsCart = document.querySelector(".items-in-cart"),
  menu = document.querySelector("#menu"),
  totalCartPrice = document.querySelector("#cart-price"),
  totalCartItems = document.querySelector("#cart-items"),
  itemInCart = document.querySelector("#item-in-cart"),
  cartSubtotal = document.querySelector("#cart-subtotal");

// Open & Close Cart
function openCart() {
  cart.classList.add("active");
}
function closeCart() {
  cart.classList.remove("active");
}

// Open & Close Menu
function openMenu() {
  menu.classList.add("active");
}
function closeMenu() {
  menu.classList.remove("active");
}


// Add Items to Cart
let productsInCart,
  itemsInCartArray = [];
function addItemsInCart(id, btn) {
  itemsInCartArray.push(productsInCart[id]);
  btn.classList.add("active");
  getItemsCart();
}
function getItemsCart() {
  let itemsInCart = "",
    totalPrice = 0;
  for (let i = 0; i < itemsInCartArray.length; i++) {
    itemsInCart += `
        <div class="item-cart">
            <img src="${itemsInCartArray[i].img}" alt="${itemsInCartArray[i].img}">
            <div class="content">
                <h4>${itemsInCartArray[i].name}</h4>
                <p class="price-cart">$${itemsInCartArray[i].price}</p>
            </div>
            <button onclick="removeFromCart(${i})" class="delete-item"><i
            class="fa-solid fa-trash-can"></i></button>
        </div>
    `;
    totalPrice += itemsInCartArray[i].price;
  }

  itemsCart.innerHTML = itemsInCart;

  // Total Items & Price
  totalCartPrice.innerHTML = `$${totalPrice}`;
  totalCartItems.innerHTML = itemsInCartArray.length;
  cartSubtotal.innerHTML = `$${totalPrice}`;
  itemInCart.innerHTML = `(${itemsInCartArray.length} item in cart)`;
}

// Remove Items from Cart
function removeFromCart(index) {
  itemsInCartArray.splice(index, 1);
  getItemsCart();
  let addToCartBtn = document.querySelectorAll("#cart-icon");
  for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].classList.remove("active");
    itemsInCartArray.forEach((product) => {
      if (product.id == i) {
        addToCartBtn[i].classList.add("active");
      }
    });
  }
}