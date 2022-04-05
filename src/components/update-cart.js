import { stringToHTML } from '../utils/to-html';
import { $Q, $Qll } from '../utils/query-selector';
import { setQuantity } from "../utils/input-quantity";
import { deleteItem } from "./cart";
import { btnAddUpsell } from './cart';
import { barProgress } from '../utils/bar-progress';

/**
 * Update cart items section in sidecart
 * @param {string} str - String HTML of section rendeirng
 * @author Michael Ballen
 */
export const updateCartItems = (str) => {
  const listItems = $Q('#cart-items', stringToHTML(str));
  const domListItems = $Qll('.cart-items');

  domListItems.forEach( element => {
    element.innerHTML = listItems.outerHTML;
  })

  setQuantity();
  deleteItem();
}

/**
 * Update checkout button section in sidecart
 * @param {string} str - String HTML of section rendeirng
 * @author Michael Ballen
 */
export const updateCartbutton = (str) => {
  const btnContainer = $Q('#cart-footer__button', stringToHTML(str));
  const inputBarProgress = $Q('#progress-bar-data', stringToHTML(str));
  const domBtnContainer = $Qll('.cart-footer__button');

  domBtnContainer.forEach( element => {
    element.innerHTML = btnContainer.outerHTML;
  })

  barProgress(inputBarProgress);
}

/**
 * Update price item for each item in cart items section
 * @param {string} str - String HTML of section rendeirng
 * @param {number} id - Product ID
 * @author Michael Ballen
 */
export const updatePriceItem = (str, id) => {
  const priceContainer = $Q(`#price-${id}`, stringToHTML(str));
  const dompriceContainer = $Qll(`.price-${id}`);

  dompriceContainer.forEach( element => {
    element.innerHTML = priceContainer.outerText
  })
}

/**
 * Update total price in cart page
 * @param {string} str - String HTML of section rendeirng
 * @author Michael Ballen
 */
 export const updatetotalPrice = (str) => {
  const totalprice = $Q("#total-price", stringToHTML(str));
  const domtotalprice = $Q(".cartpage-footer__info--price");

  if (domtotalprice != null) {
    domtotalprice.innerHTML = totalprice.outerText
  }
}

/**
 * Update upsell section in sidecart
 * @param {string} str - String HTML of section rendeirng
 * @author Michael Ballen
 */
export const updateUpsell = (str) => {
  const upsellContainer = $Q('#cart-upsell-container', stringToHTML(str));
  const domupsellContainer = $Qll('.cart-upsell-container');

  domupsellContainer.forEach(element => {
    element.innerHTML = upsellContainer.innerHTML;
  });

  btnAddUpsell();
}
