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

// Swiper Slide Sale
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
      breakpoints:{
        1600:{
          slidesPerView: 5,
        },
          1200:{
          slidesPerView: 4,
          spaceBetween: 30,
        },
          700:{
          slidesPerView: 3,
          spaceBetween: 15,
        },
          0:{
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }
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
       breakpoints:{
        1600:{
          slidesPerView: 4,
        },
          1200:{
          slidesPerView: 3,
          spaceBetween: 30,
        },
          900:{
          slidesPerView: 2,
          spaceBetween: 15,
        },
        700:{
          slidesPerView: 3,
          spaceBetween: 15,
        },
          0:{
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }
    });