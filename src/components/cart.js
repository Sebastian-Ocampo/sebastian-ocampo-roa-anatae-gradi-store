import api from "../services/api";
import { $Qll, $Q } from "../utils/query-selector";
import { toggleDataActive } from "../utils/toggle-dataset";
import { updateCartItems, updatetotalPrice } from "./update-cart";
import { updateCartbutton } from "./update-cart";
import { updatePriceItem } from "./update-cart";
import { barProgress } from "../utils/bar-progress";
import { updateUpsell } from "./update-cart";

barProgress($Q('#progress-bar-data'));

/**
 * Listen if add to cart form is submited
 * if add to cart form is submited add products in cart
 */
export const btnAddToCart = () => {
  const addForm = $Q(".add-product-cart");

  if(addForm != null ) {
    submitForm(addForm)
  }
}

export const btnAddUpsell = () => {
  const addFormUpsell = $Qll(".add-product-cart-upsell");

  if(addFormUpsell != null ) {

    addFormUpsell.forEach( element => {
      submitForm(element)
    })
  }
}

const submitForm = (form) => {

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addProducts(e);
  })
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
    sections: "side-cart"
  };

  const { sections } = await api.addToCart(cartParams);

  updateCartItems(sections["side-cart"]);
  updateCartbutton(sections["side-cart"]);
  updatetotalPrice(sections["side-cart"]);
  updateUpsell(sections["side-cart"]);
}

export const onChangeItemCart = () => {
  $Qll('.item-cart-js input').forEach(
    input => {
      input.addEventListener(
        'change',
        function () {
          updateCart(this.id, this.value);
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
export const updateCart = async (id, quantity) => {

  const cartParams = {
    id: id,
    quantity: quantity,
    sections: "side-cart",
  }
  
  const { sections } = await api.updateCart(cartParams);

  if (quantity == 0) {
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


/**
 * Delete item in cart
 * listen if delete button is clicked
 * if is clicked, update cart with quantity 0
 */
export const deleteItem = () => {
  const deleteIcon = $Qll(".item-delete");

  if( deleteIcon ) {
    deleteIcon.forEach( element => {
      element.addEventListener("click", ()=> {
        updateCart(element.dataset.id, 0)
      })
    });
  }
}


/**
* Open and close side cart with various buttons
*/
export const openCloseCart = () => {
  const cartContainer = $Q(".cart");
  cartContainer.setAttribute ("data-active", "false");

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