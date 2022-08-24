import { stringToHTML } from '../utils/to-html';
import { $Q, $Qll } from '../utils/query-selector';
import { setQuantity } from "../utils/input-quantity";
import { deleteItem, onChangeItemCart } from "./cart";

/**
 * Update cart items section in sidecart
 * @param {string} str - String HTML of section rendeirng
 */
export const updateCartItems = (str) => {
  $Qll('.cartitems-js')
    .forEach(
      element => {
        element.innerHTML = $Q(
          '#cart-items',
          stringToHTML(str)
        ).outerHTML;
      }
    )

  setQuantity();
  deleteItem();
  onChangeItemCart();
}

/**
 * Update checkout button section in sidecart
 * @param {string} str - String HTML of section rendeirng
 */
 export const updateCartbutton = (str) => {
  const btnContainer = $Q('#cart-footer__button', stringToHTML(str));
  const domBtnContainer = $Qll('.cart-footer__button');

  domBtnContainer.forEach( element => {
    element.innerHTML = btnContainer.outerHTML;
  })
}

/**
 * Update price item for each item in cart items section
 * @param {string} str - String HTML of section rendeirng
 * @param {number} id - Product ID
 */
export const updatePriceItem = (str, id) => {

  const {
    dataset,
    outerText
  } = $Q(`#price-${id}`, stringToHTML(str));

  $Qll(`.price-${id}`).forEach(
    element => element.innerHTML = outerText
  )

  $Q('#cart-page') && updateOnCartPage(id, dataset.quantity);
}

/**
 * Chance all input value only cart page
 * 
 * @param {String} id - Variant id item cart
 * @param {String} quantity - Quantity variant by item cart
 */
 const updateOnCartPage = (id, quantity) => {

  $Qll(`.item-cart-js[id="${id}"]`).forEach(
    element => element.value = quantity
  )
}

/**
 * Update total price in cart page
 * @param {string} str - String HTML of section rendeirng
 */
 export const updatetotalPrice = (str) => {
  if ($Q(".cartpage-footer__info--price") != null) {
    return $Q(".cartpage-footer__info--price").innerHTML = $Q(
      "#total-price",
      stringToHTML(str)
    ).outerText;
  }
}
