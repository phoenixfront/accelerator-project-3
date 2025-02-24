import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

const initReviewsSlider = () => {
  new Swiper('.reviews__container', {
    modules: [Navigation, Scrollbar],
    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 326,
      draggable: true,
    },
    navigation: {
      nextEl: '.reviews__slider-buttons .swiper-button-next',
      prevEl: '.reviews__slider-buttons .swiper-button-prev',
    },
    watchOverflow: true,
    spaceBetween: 30,
    lazy: true,
    lazyPreloadPrevNext: 1,

    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 1.2,
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: false,
        scrollbar: {
          dragSize: 394,
        },
      }
    },
  });
};

export { initReviewsSlider };
