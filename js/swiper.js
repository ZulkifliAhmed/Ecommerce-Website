// Swiper Slide Side-bar
 var swiper = new Swiper(".slide-swp", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullests: true,
      },
      autoplay:{
        delay: 2500,
      },
      loop: true,
    });

// Swiper Slide Side-bar
 var swiper = new Swiper(".sale-swiper", {
      slidesPerView: 5,
      spaceBetween:30,
      autoplay:{
        delay: 3000,
      },
      navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
      },
      loop: true,
    });

    
// Swiper Slider Computer & Desktop
 var swiper = new Swiper(".products-swiper", {
      slidesPerView: 4,
      spaceBetween:30,
      autoplay:{
        delay: 3000,
      },
      navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
      },
      loop: true,
    });