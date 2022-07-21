import { Navigation, Thumbs, FreeMode } from "swiper";

export const thumbsConfig = (slidesPerView, vertical) => {
  let config = {
    modules: [FreeMode],
    slidesPerView: slidesPerView,
    watchSlidesProgress: true,
    freeMode: true,
  }
  vertical && (config.direction = "vertical");

  return config;
}

export const principalConfig = (thumbnails) => {
  return {
    modules: [Navigation, Thumbs],
    spaceBetween: 10,
    thumbs: {
      swiper: thumbnails,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  }
}