import { $Qll } from "./query-selector";
import { dataToggle } from "./toggle-dataset";

/**
 * Open accordion
 * This function valuate all nodes with the class ".accordions" and add new event listener
 */
export function openAccordion() {
  $Qll('.accordions').forEach(
    accordion => {
      $Qll('.accordion-item__button', accordion)
        .forEach(item => {
          item.addEventListener(
            'click',
            function () {
              accordionAction(this, accordion)
            }
          )
        })
    }
  )
}

/**
 * Accordion Action
 * This function change the dataset active in button element accordion (on click event)
 * 
 * @param {HTMLElement} element - Button to change data active
 * @param {NodeListOf} accordions - All accordions in DOM
 */
function accordionAction(element, accordions) {
  if (accordions.dataset.toggle === 'true') {
    closeAll('.accordion-item', accordions);
  }

  dataToggle(element);
}

/**
 * Loop to change all dataset active in button accordions
 * 
 * @param {String} nodeAll - Reference to search in parent element
 * @param {HTMLElement} parent - Parent to valuate
 * @returns Action to change dataset active to 'false' at all buttons
 */
export function closeAll (nodeAll, parent) {
  return $Qll(nodeAll, parent)
    .forEach(node => (
      node.children[0].dataset.active = 'false'
    )
  )
}
 