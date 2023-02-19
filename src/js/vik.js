var swiper = new Swiper('.vikmySwiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 25,
  navigation: {
    nextEl: '.about-rest-main-btn-next',
    prevEl: '.about-rest-main-btn-prev',
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
