import api from "../services/api";
import { $Q, $Qll } from "../utils/query-selector";
import { dataToggle, toggleDataActive } from "../utils/toggle-dataset";
import { sliderUpsell } from "./slider-swiper";
import {
  updateCartItems,
  updatetotalPrice,
  updateUpsell,
  updateCartbutton,
  updatePriceItem,
  updateOnCartPage
} from "./update-cart";

import { barProgress } from "../utils/bar-progress";


const CART_SECTION = "side-cart,cart-page";

barProgress($Q('#progress-bar-data'));
sliderUpsell();
/**
 * Listen if add to cart form is submited
 * if add to cart form is submited add products in cart
 * 
 * @param {string} formQuery - className reference in form add-to-cart
 * 
 * To active this feature - ADD className 'add-cart-js' in form product
 * */
export const btnAddToCart = (formQuery) => {
  const addForms = $Qll(formQuery);

  if(addForms != null) {
    addForms.forEach(
      form => {
        submitForm(form);
      }
    )
  }
}

const submitForm = (form) => {
  return form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      addProducts(e);

      e.target.dataset.form != "upsell"
       && dataToggle($Q("#shopify-section-side-cart"), true);
    }
  )
}

/**
 * Add products in cart
 * @param {event} event -Event submit from add to cart form
 */
const addProducts = async (event) => {

  let itemId = 0;
  
  for(const input of event.target) {
    if(input.name === "id"){
      itemId = input.value;
    }
  }

  const cartParams = {
    items: [
      {
        id: itemId,
        quantity: 1,
      }
    ],
    sections: CART_SECTION
  };

  const { sections } = await api.addToCart(cartParams);
  if (!sections) return null;

  updateCartItems(sections["side-cart"]);
  updateCartbutton(sections["side-cart"]);
  updatetotalPrice(sections["side-cart"]);
  updateUpsell(sections["side-cart"]);
}

/**
 * Event onChange in the cart item
 */

export const onChangeItemCart = () => {
  $Qll('.item-cart-js').forEach(
    input => {
      input.addEventListener(
        'change',
        function () {
          updateCart(this.dataset.index, this.value, this.id);
        }
      )
    }
  )
}

/**
 * Update quantity for each item in cart
 * @param {number} id Product ID
 * @param {number} quantity new quantity
 */
export const updateCart = async (line, quantity, id) => {

  const cartParams = {
    line,
    quantity,
    sections: CART_SECTION,
  }

  const { sections, items } = await api.changeCart(cartParams);
  if (!sections) return null;

  if (quantity === 0) {
    updateCartItems(sections["side-cart"]);
    updateCartbutton(sections["side-cart"]);
    updatetotalPrice(sections["side-cart"]);
    updateUpsell(sections["side-cart"]);
  } else {
    updatePriceItem(sections["side-cart"], id);
    updateCartbutton(sections["side-cart"]);
    updatetotalPrice(sections["side-cart"]);
  }
}

/* const getItemAvalible = (items, id_product, quantity) => {

  const item = items.filter(e => e.id === Number(id_product.split('-')[0]));
  const element= $Q(`.item-cart-js[id="${id_product}"]`).parentElement;

  if(item[0].quantity < quantity){
    element.querySelector('[data-action="plus"]').setAttribute('disabled', 'disabled') 
    updateOnCartPage(id_product, item[0].quantity);
    return;
  }

  element.querySelector('[data-action="plus"]').removeAttribute('disabled')
  
} */


/**
 * Delete item in cart
 * listen if delete button is clicked
 * if is clicked, update cart with quantity 0
 */
export const deleteItem = () => {
  const deleteIcon = $Qll(".item-delete");

  if (deleteIcon) {
    deleteIcon.forEach(
      element => {
        element.addEventListener(
          "click",
          () => {
            updateCart(element.dataset.index, 0, element.dataset.id)
          }
        )
      }
    );
  }
}


/**
* Open and close side cart with various buttons
*/
export const openCloseCart = () => {
  const cartContainer = $Q(".cart");
  cartContainer.setAttribute("data-active", "false");

  toggleDataActive(
    ".cart-close",
    "#shopify-section-side-cart",
    { overlay: true }
  )

  toggleDataActive(
    ".button-cart",
    "#shopify-section-side-cart",
    { overlay: true }
  )
}