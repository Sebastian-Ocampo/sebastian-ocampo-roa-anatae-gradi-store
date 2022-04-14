import { stringToHTML } from '../utils/to-html';
import { $Q, $Qll } from '../utils/query-selector';
import { setQuantity } from "../utils/input-quantity";
import { deleteItem, onChangeItemCart } from "./cart";
import { btnAddUpsell } from './cart';
import { barProgress } from '../utils/bar-progress';

/**
 * Update cart items section in sidecart
 * @param {string} str - String HTML of section rendeirng
 * @author Michael Ballen
 */
export const updateCartItems = (str) => {
  $Qll('.cartitems-js')
    .forEach(
      element => {
        element.innerHTML = $Q('#cart-items', stringToHTML(str))
          .outerHTML;
      }
    )

  setQuantity();
  deleteItem();
  onChangeItemCart();
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
  return $Qll(`.price-${id}`).forEach(
    element => {
      element.innerHTML = $Q(
        `#price-${id}`,
        stringToHTML(str)
        ).outerText;
    }
  )
}

/**
 * Update total price in cart page
 * @param {string} str - String HTML of section rendeirng
 * @author Michael Ballen
 */
 export const updatetotalPrice = (str) => {
  if ($Q(".cartpage-footer__info--price") != null) {
    
    return $Q(".cartpage-footer__info--price")
      .innerHTML = $Q("#total-price", stringToHTML(str))
      .outerText;
  }
}

/**
 * Update upsell section in sidecart
 * @param {string} str - String HTML of section rendeirng
 * @author Michael Ballen
 */
export const updateUpsell = (str) => {
  $Qll('.upsell-js')
    .innerHTML = $Q('.cart-upsell-container', stringToHTML(str));
  btnAddUpsell();
}
