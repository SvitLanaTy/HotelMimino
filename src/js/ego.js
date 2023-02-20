var swiperAboutRight = new Swiper('.swiper-about-right', {
  slidesPerView: 'auto',
  spaceBetween: 25,
  mousewheel: {
    sensitivity: 1,
  },
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
var swiperAboutLeft = new Swiper('.swiper-about-left', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  mousewheel: {
    sensitivity: 1,
  },
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

var swiperHotleThree = new Swiper('.swiper-hotel-right', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  mousewheel: {
    sensitivity: 1,
  },
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
