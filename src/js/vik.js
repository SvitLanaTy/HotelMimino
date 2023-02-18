var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 25,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    414: {
      spaceBetween: 25,
    },
    1024: {
      spaceBetween: 40,
    },
    1280: {
      spaceBetween: 40,
    },
  },
});
