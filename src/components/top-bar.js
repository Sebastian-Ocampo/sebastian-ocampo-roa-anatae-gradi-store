import Swiper, { Autoplay } from 'swiper';
import { $Q, $Qll } from '../utils/query-selector';

export const initTopBar = () => {
  const topBar = $Q('.top-bar');
  const isTopBarHidden = localStorage.getItem('topbar');

  if (!isTopBarHidden) {
    topBar.style.display = 'block';
  }

  $Q('.bar-close-js').addEventListener('click', () => closeTopBar(topBar));

  const slides = $Qll('.top-bar_content--message');

  if (slides.length > 2 && slides.length < 150) {
    initTopBarSlider();
  } else {
    closeTopBar(topBar);
  }
};

/**
 * close top bar
 * @param {HTML} topBar - element html top bar
 */
const closeTopBar = (topBar) => {
  localStorage.setItem('topbar', 'true');
  topBar.style.display = 'none';
};

/**
 * initialize slider top bar
 */
const initTopBarSlider = () => {
  new Swiper('.top-bar', {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
};
