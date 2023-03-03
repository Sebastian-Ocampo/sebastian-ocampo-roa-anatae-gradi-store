import { stringToHTML } from '../utils/to-html';
import { $Q, $Qll } from '../utils/query-selector';
import { setQuantity } from "../utils/input-quantity";
import { btnAddToCart, deleteItem, onChangeItemCart } from "./cart";
import { barProgress } from '../utils/bar-progress';
import { sliderUpsell } from './slider-swiper';

/**
 * Update cart items section in sidecart
 * @param {string} str - String HTML of section rendeirng
 */
export const updateCartItems = (str) => {
  $Qll('.cartitems-js')
    .forEach(
      (element) => {
        const elementRef = element;
        elementRef.innerHTML = $Q(
          '#cart-items',
          stringToHTML(str),
        ).outerHTML;
      },
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
  const inputBarProgress = $Q('#progress-bar-data', stringToHTML(str));
  const btnContainer = $Q('.cart-footer', stringToHTML(str));
  const domBtnContainer = $Qll('#container-footer-js');

  barProgress(inputBarProgress);

  if (btnContainer) {
    domBtnContainer.forEach((element) => {
      const elementRef = element;
      elementRef.innerHTML = btnContainer.outerHTML;
    })

    return;
  }

  domBtnContainer.forEach((element) => {
    const elementRef = element;
    elementRef.innerHTML = '';
  })
}

/**
 * Chance all input value only cart page
 *
 * @param {String} id - Variant id item cart
 * @param {String} quantity - Quantity variant by item cart
 */
 const updateQuantity = (id, quantity) => {
  $Qll(`.item-cart-js[id="${id}"]`).forEach(
    (element) => {
      const elementRef = element;
      elementRef.value = quantity
    },
  )
}

/**
 * Update price item for each item in cart items section
 * @param {string} str - String HTML of section rendeirng
 * @param {number} id - Product ID
 */
export const updatePriceItem = (str, id) => {

  const {
    dataset,
    outerText,
  } = $Q(`#price-${id}`, stringToHTML(str));

  $Qll(`.price-${id}`).forEach(
    (element) => {
      const elementRef = element;
      elementRef.innerHTML = outerText
    },
  )

  updateQuantity(id, dataset.quantity);
}

/**
 * Update total price in cart page
 * @param {string} str - String HTML of section rendeirng
 */
 export const updatetotalPrice = (str) => {

  if (!$Q('.cartpage-footer')) return;
  if (!$Q("#total-price", stringToHTML(str))) {
    $Q('.cartpage-footer').style.display = 'none';
    return;
  }

  if ($Q(".cartpage-footer__info--price") != null) {
    $Q(".cartpage-footer__info--price").innerHTML = $Q(
      "#total-price",
      stringToHTML(str),
    ).outerText;
  }
}

/**
 * Update upsell section in sidecart
 * @param {string} str - String HTML of section rendeirng
 */
 export const updateUpsell = (str) => {
  if (!$Q('#upsell-js')) return;

  $Q('#upsell-js').innerHTML = $Q(
    '#cart-upsell-slider',
    stringToHTML(str),
  ).outerHTML;

  btnAddToCart(".add-product-cart-upsell");
  sliderUpsell();
}
