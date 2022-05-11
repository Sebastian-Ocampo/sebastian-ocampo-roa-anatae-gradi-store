import Swiper, { Navigation, Thumbs, FreeMode } from "swiper";

/**
 * SWIPER SLIDER: Thumbs - media product page
 */
const swiper = new Swiper(".main-product__slider-thumbs", {
  modules: [FreeMode],
  spaceBetween: 10,
  slidesPerView: 3,
  watchSlidesProgress: true,
  freeMode: true
});

/**
 * SWIPER SLIDER: Feature images - media product page
 */
export const swiperPrincipal = new Swiper(".main-product__slider-principal", {
  modules: [Navigation, Thumbs],
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
