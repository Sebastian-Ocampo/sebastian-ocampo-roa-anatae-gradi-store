import Swiper from "swiper";
import { principalConfig, thumbsConfig } from "../utils/slider-configuration";

export function mountSlider(main) {
  const { dataset: { direction = null } } = main;
  let thumbnails;
  let principalClass;

  if (direction === '1') {
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

  // eslint-disable-next-line no-unused-expressions
  direction && (
    new Swiper(
      principalClass,
      principalConfig(thumbnails),
    )
  )
}
