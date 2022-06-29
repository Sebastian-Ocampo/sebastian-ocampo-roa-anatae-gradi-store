import Swiper, { Navigation, Thumbs, FreeMode } from "swiper";

export const horizontalSlider = {
  modules: [FreeMode],
  slidesPerView: 3,
  watchSlidesProgress: true,
  freeMode: true
}

export const verticalSlider = {
  direction: "vertical",
  modules: [FreeMode],
  slidesPerView: 3,
  watchSlidesProgress: true,
  freeMode: true
}