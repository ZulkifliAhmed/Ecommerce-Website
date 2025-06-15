// Open & Close Filter
let filter = document.querySelector(".filter");

function openCloseFilter(){
    filter.classList.toggle("active")
}

fetch("js/items.json")
  .then((Response) => Response.json())
  .then((products) => {
    const allProducts = document.querySelector("#products-div");
    productsInCart = products;

    products.forEach((products) => {
        const oldPrice = products.old_price ? "$"+products.old_price :'';
        const Discount =  products.old_price ? `<span class="sale-present">%${Math.floor(((products.old_price - products.price) / products.old_price) * 100)}</span>` : '';
        allProducts.innerHTML += `
        <div class="product swiper-slide">
          ${Discount}
            <div class="icons">
                <span onclick="addItemsInCart(${products.id}, this)" id="cart-icon" class="cart-icon"><i class="fa-solid fa-cart-plus"></i></span>
                <span class="cart-icon"><i class="fa-solid fa-heart"></i></span>
                <span class="cart-icon"><i class="fa-solid fa-share"></i></span>
            </div>
            <div class="img-product">
                <img src="${products.img}"
                    alt="${products.name}">
                <img src="${products.img_hover}" alt="${products.name}"
                    class="img-hover">
            </div>
            <h3 class="name-product"><a href="">${products.name}</a></h3>
            <div class="stars">
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
            </div>
            <div class="price">
                <p><span>$${products.price}</span></p>
                <div class="old-price">${oldPrice}</div>
            </div>
        </div>
    `;
      
    });
  });
