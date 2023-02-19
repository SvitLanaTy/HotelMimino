var swiper = new Swiper('.swiper-about-right', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  centeredSlides: true,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
