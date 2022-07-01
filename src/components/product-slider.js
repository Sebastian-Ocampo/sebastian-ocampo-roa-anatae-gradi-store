import Swiper, { Navigation, Thumbs } from "swiper";
import { horizontalSlider, verticalSlider } from "../utils/slider-configuration";

/**
 * HORIZONTAL SWIPER SLIDER: Thumbs - media product page
 */
const swiperHorizontal = new Swiper(".horizontal-swipper-thumbs", horizontalSlider);

/**
 * HORIZONTAL SWIPER SLIDER: Feature images - media product page
 */
export const swiperHorizontalPrincipal = new Swiper(".horizontal-swipper-principal", {
  modules: [Navigation, Thumbs],
  spaceBetween: 10,
  thumbs: {
    swiper: swiperHorizontal,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

/**
 * VERTICAL SWIPER SLIDER: Thumbs - media product page
 */
const swiperVertical = new Swiper(".vertical-swipper-thumbs", verticalSlider);

/**
 * VERTICAL SWIPER SLIDER: Feature images - media product page
 */
export const swiperVerticalPrincipal = new Swiper(".vertical-swipper-principal", {
  modules: [Navigation, Thumbs],
  spaceBetween: 10,
  thumbs: {
    swiper: swiperVertical,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
