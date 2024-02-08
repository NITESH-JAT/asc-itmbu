let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 5000, // Adjust delay in milliseconds (e.g., 5000 for 5 seconds)
        disableOnInteraction: false, // Enable navigation even if user interacts with the slider
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });





