import api from "../services/api";
import { $Qll } from "../utils/query-selector";
import {
  updateCartItems,
  updatetotalPrice,
  updatePriceItem
} from "./update-cart";

const CART = "cart-page";

/**
 * Listen if add to cart form is submited
 * if add to cart form is submited add products in cart
 * 
 * @param {string} formQuery - className reference in form add-to-cart
 * 
 * To active this feature - ADD className 'add-product-cart' in form product
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
    sections: CART
  };

  const { sections } = await api.addToCart(cartParams);

  updateCartItems(sections[CART]);
  updatetotalPrice(sections[CART]);
  window.location.href = "/cart";
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
    sections: CART,
  }
  
  const { sections } = await api.updateCart(cartParams);

  if (quantity == 0) {
    updateCartItems(sections[CART]);
    updatetotalPrice(sections[CART]);
  } else {
    updatePriceItem(sections[CART], id);
    updatetotalPrice(sections[CART]);
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
    deleteIcon.forEach(
      element => {
        element.addEventListener(
          "click",
          () => {
            updateCart(element.dataset.id, 0)
          }
        )
      }
    );
  }
}
