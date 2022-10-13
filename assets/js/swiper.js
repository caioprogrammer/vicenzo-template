const swiper = new Swiper('.swiper.banner-home', {
  // Optional parameters
  autoplay: {
    delay: 3000,

  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
});

const showcaseSwiper = new Swiper('.swiper.showcase__content', {
  // Optional parameters
  slidesPerView: 4.475,
  loop: true,
  centeredSlides: true,
  spaceBetween: 50,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
});

const showcaseFixedSwiper = new Swiper('.swiper.showcase__content--fixed', {
  // Optional parameters
  slidesPerView: 3,
  loop: true,
  spaceBetween: 0,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
});
const showcaseBestSwiper = new Swiper('.swiper.showcase__content--best', {
  // Optional parameters
  slidesPerView: 4.5,
  loop: false,
  centeredSlides: false,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
});