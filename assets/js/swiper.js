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
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.175,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.275,
      spaceBetween: 30
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 4.475,
      spaceBetween: 40
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
});

const showcaseFixedSwiper = new Swiper('.swiper.showcase__content--fixed', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
});
const showcaseBestSwiper = new Swiper('.swiper.showcase__content--best', {
  // Optional parameters
  slidesPerView: 1.5,
  loop: false,
  centeredSlides: false,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 30
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 4.5,
      spaceBetween: 40
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
});