fetch("js/items.json")
  .then((Response) => Response.json())
  .then((products) => {
    const swiperProducts = document.querySelector(".products");
    const otherProductSwiper = document.querySelector("#other-product-swiper");
    const otherProductSwiper2 = document.querySelector("#other-product-swiper-2");
    productsInCart = products;

    products.forEach((products) => {
      if (products.old_price) {
        let totalDisc = Math.floor(
          ((products.old_price - products.price) / products.old_price) * 100
        );
        swiperProducts.innerHTML += `
        <div class="product swiper-slide">
            <span class="sale-present">%${totalDisc}</span>
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
            <h3 class="name-product"><a href="#">${products.name}</a></h3>
            <div class="stars">
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
            </div>
            <div class="price">
                <p><span>$${products.price}</span></p>
                <div class="old-price">$${products.old_price}</div>
            </div>
        </div>
    `;
      }
    });

     products.forEach((products) => {
        otherProductSwiper.innerHTML += `
        <div class="product swiper-slide">
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
            <h3 class="name-product"><a href="#">${products.name}</a></h3>
            <div class="stars">
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
            </div>
            <div class="price">
                <p><span>$${products.price}</span></p>
            </div>
        </div>
    `;
    });

     products.forEach((products) => {
        otherProductSwiper2.innerHTML += `
        <div class="product swiper-slide">
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
            <h3 class="name-product"><a href="#">${products.name}</a></h3>
            <div class="stars">
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
            </div>
            <div class="price">
                <p><span>$${products.price}</span></p>
            </div>
        </div>
    `;
    });
  });
