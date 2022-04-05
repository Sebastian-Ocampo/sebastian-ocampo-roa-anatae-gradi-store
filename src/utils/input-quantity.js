import { $Qll } from "./query-selector";
import { updateCart } from "../components/cart";

/**
  * Set quantoty
  * Set item quantity with custom input,
  * Execute updateCart function
* @author Michael Ballen 
*/
export const setQuantity = () => {
  const btnLess = $Qll(".btn-less");
  const btnPlus = $Qll(".btn-plus");

  if( btnLess ) {
    changeInputValue(btnLess, "subtract")
  }

  if( btnPlus ) {
    changeInputValue(btnPlus, "add")
  }

}

/**
 * add or subtract input value
 * @param {DOM element} btn - button for change input value
 * @param {string} operation - add for ++ or subtract for --
 * @author Michael Ballen
 */
const changeInputValue = (btn, operation) => {
  btn.forEach( element => {
  
    element.addEventListener("click", ()=> {
      const inputId = element.dataset.input;
      const input = document.getElementById(inputId);
      const inputs = $Qll(`.id-${inputId}`);

      if( operation === "subtract" ) {
        if( input.value > 0 ) {
          inputs.forEach( element => {
            element.value --
          })
        }
      } else {
        inputs.forEach( element => {
          element.value ++
        })
      }

      updateCart(inputId, input.value);

    });
    
  });
}