import Swiper from "swiper";
import { principalConfig, thumbsConfig } from "../utils/slider-configuration";
import { $Q } from "../utils/query-selector";

export function mountSlider (main) {
  const { dataset: { direction = null } } = main;
  let thumbnails;
  let principalClass;

  if(direction === '1') {
    /**
     * HORIZONTAL SWIPER SLIDER: media product page
     */
    thumbnails = new Swiper(".horizontal-swipper-thumbs", thumbsConfig(3, false));
    principalClass = ".horizontal-swipper-principal";
  } else {
    /**
     * VERTICAL SWIPER SLIDER: media product page
     */
    thumbnails = new Swiper(".vertical-swipper-thumbs", thumbsConfig(4, true));
    principalClass = ".vertical-swipper-principal";
  }

  direction && (
    new Swiper(
      principalClass,
      principalConfig(thumbnails)
    )
  )
};
