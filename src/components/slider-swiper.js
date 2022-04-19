import { $Qll } from '../utils/query-selector'
import Swiper, { Navigation, Pagination, FreeMode, Autoplay } from "swiper";

const configArrows = (id) => {
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

export const configPagination = (id) => {
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

export const swiperSmall = new Swiper(".slider_small", {
  modules: [Pagination, Autoplay, FreeMode],
  slidesPerView: 1,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
  },
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

export const swiperArrows = (() => {
  $Qll(".slider_arrows").map(slide => {
    configArrows('#' + slide.id)
  })
})();

export const swiperPagination = (() => {
  $Qll(".slider_pagination").map(slide => {
    configPagination('#' + slide.id)
  })
})();

export const sliderUpsell = () => {
  new Swiper('.slider_upsell', configSwiperUpsell);
};
