import { $Q } from './query-selector'

/**
 * Update the width of bar progress
 * @param {HTMLElement} input - input hidde with data
 */
export const barProgress = (input) => {
  const totalPrice = parseFloat(input.dataset.total) / 100;
  const limitPrice = input.dataset.limit;
  const progress = $Q(".bar-progress");
  const elementTotal = $Q('.total-residuary');

  const textProgress = $Q('.progress-text-js');
  const textFreeShipping = $Q('.shipping-free');

  const barWidth = totalPrice / limitPrice * 100;
  const residuaryPrice = limitPrice - totalPrice;

  if (barWidth > 100) {
    progress.style.width = "100%";
    textProgress.style.display = "none";
    textFreeShipping.style.display = "block";
  } else {
    progress.style.width = `${barWidth}%`;
    elementTotal.innerHTML = `${residuaryPrice.toFixed()}€`;
    textProgress.style.display = "block";
    textFreeShipping.style.display = "none";
  }
}