import { $Q } from './query-selector'

/**
 * Update the width of bar progress
 * @param {DOM element} input - input hidde with data
 */
export const barProgress = (input) => {
  const totalPrice = parseFloat(input.dataset.total)/100;
  const limitPrice = input.dataset.limit;
  const progress = $Q(".bar-progress");

  const barWidth = totalPrice/limitPrice * 100;
  if (barWidth > 100) {
    progress.style.width = "100%";
  } else {
    progress.style.width = `${barWidth}%`;
  }
}