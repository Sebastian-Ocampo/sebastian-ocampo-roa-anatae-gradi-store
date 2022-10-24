import { $Qll } from "./query-selector";
import { dataToggle } from "./toggle-dataset";

/**
 * Loop to change all dataset active in button accordions
 *
 * @param {String} nodeAll - Reference to search in parent element
 * @param {HTMLElement} parent - Parent to valuate
 * @returns Action to change dataset active to 'false' at all buttons
 */
 export function closeAll(nodeAll, parent) {
  return $Qll(nodeAll, parent)
    .forEach((node) => {
      // eslint-disable-next-line no-param-reassign
      node.children[0].dataset.active = 'false'
    })
}

/**
 * Accordion Action
 * This function change the dataset active in
 * button element accordion (on click event)
 *
 * @param {HTMLElement} element - Button to change data active
 * @param {NodeListOf} accordions - All accordions in DOM
 */
 function accordionAction(element, accordions) {

  const EXIST_CLASS = element.classList.contains('accordion-item__button');
  if (accordions.dataset.toggle === 'true' && EXIST_CLASS) {
    closeAll('.accordion-item', accordions);
  }

  dataToggle(element);
}

/**
 * Open accordion
 * This function valuate all nodes with the class
 * ".accordions" and add new event listener
 */
export function openAccordion() {
  $Qll('.accordions').forEach(
    (accordion) => {
      $Qll('.accordion-item__button', accordion)
        .forEach((item) => {
          item.addEventListener(
            'click',
            (e) => {
              e.stopPropagation();
              accordionAction(e.target, accordion)
            },
          )
        })
    },
  )
}
