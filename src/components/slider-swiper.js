import { $Qll } from '../utils/query-selector'
import Swiper, { Navigation, Pagination, FreeMode, Autoplay } from "swiper";

/**
 * Create new slider with arrows
 * @param {String} id - className reference in DOM
 */
const configArrows = (id) => {
  // eslint-disable-next-line no-new
  new Swiper(id, {
    modules: [Navigation, FreeMode],
    slidesPerView: "auto",
    spaceBetween: 25,
    navigation: {
      nextEl: `.swiper-button-next[data-id="${id.substr(1)}"]`,
      prevEl: `.swiper-button-prev[data-id="${id.substr(1)}"]`,
    },
    freeMode: true,
    breakpoints: {
      749: {
        slidesPerView: 3,
        spaceBetween: 28,
        freeMode: false,
      },
    },
  });
}

/**
 * Create new slider with pagination
 * @param {String} id - className reference in DOM
 */
export const configPagination = (id) => {
  // eslint-disable-next-line no-new
  new Swiper(id, {
    modules: [Pagination, FreeMode],
    slidesPerView: "auto",
    spaceBetween: 25,
    pagination: {
      el: `.swiper-pagination[data-id="${id.substr(1)}"]`,
    },
    freeMode: true,
    breakpoints: {
      749: {
        slidesPerView: 3,
        spaceBetween: 28,
        freeMode: false,
      },
    },
  });
}

export const configSwiperUpsell = {
  modules: [Navigation, FreeMode],
  slidesPerView: "auto",
  spaceBetween: 25,
  navigation: {
    nextEl: `.swiper-button-next[data-slider="upsell"]`,
    prevEl: `.swiper-button-prev[data-slider="upsell"]`,
  },
  freeMode: true,
  breakpoints: {
    749: {
      slidesPerView: 3,
      spaceBetween: 28,
      freeMode: false,
    },
  },
}

/**
 * Create new slider - 1 slide per view
 * @param {String} id - className reference in DOM
 */
export const swiperSmall = new Swiper(".slider_small", {
  modules: [Pagination, Autoplay, FreeMode],
  slidesPerView: 1,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  freeMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/**
 * Iteration to create all sliders with arrows
 */
export const swiperArrows = (() => {
  $Qll(".slider_arrows").map((slide) => configArrows(`#${slide.id}`))
})();

/**
 * Iteration to create all sliders with pagination
 */
export const swiperPagination = (() => {
  $Qll(".slider_pagination").map((slide) => configPagination(`#${slide.id}`))
})();

export const sliderUpsell = () => {
  // eslint-disable-next-line no-new
  new Swiper('.slider_upsell', configSwiperUpsell);
};
