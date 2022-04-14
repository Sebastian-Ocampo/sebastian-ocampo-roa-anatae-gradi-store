import { $Q, $Qll } from "./query-selector";

/**
  * Set quantity
  * Set item quantity with custom input,
  * Execute updateCart function
* @author Cristian Velasco
*/
export const setQuantity = () => {
  return $Qll(".quantity-label").forEach(
    labelParent => $Qll('button', labelParent)
      .forEach(btn => {
        btn.addEventListener(
          'click',
          updateQuantity
        )
      })
  )
}

/**
 * add or subtract input value
 * @author Cristian Velasco
 */
function updateQuantity() {
  let input = $Q('input', this.parentElement)

  if (this.dataset.action == "subtr") {
    input.value > 0 && input.value--
  } else {
    input.value++
  }

  return input.dispatchEvent(new Event("change"));
}
