import { closeAll } from "../utils/accordion";
import { $Q, $Qll } from "../utils/query-selector"
import { dataToggle } from "../utils/toggle-dataset";

/**
 * DropDown Action - if is not data active true
 * @param {HTMLElement} element - Node to change data active
 */
 function dropDownAction(element) {
  // eslint-disable-next-line no-unused-expressions
  element.dataset.active !== 'true'
    && closeAll('.nav-item-js', $Q('#nav-list-js'));

  dataToggle(element);
}

/**
 * Event dropDown
 * @param {HTMLElement} node - Event target node
 * @param {EventListener} event - Type event
 * @param {HTMLElement} nodeOnAction - Node to change data active
 * @returns Function Event
 */
 function eventDropDown(
  node,
  event,
  nodeOnAction,
) {
  return node.addEventListener(event, () => {
    dropDownAction(nodeOnAction)
  })
}

/**
 * Open dropdown menu - click / mouseentre event
 * To select type event check data-event in node#nav-list-js
 */
export function openDropDown() {
  const { dataset } = $Q('#nav-list-js');

  // eslint-disable-next-line no-undef
  if (dataset.event === 'click' || innerWidth < 800) {
    $Qll('.button-dropdown-js')
      .forEach((item) => (
        eventDropDown(item, 'click', item)
      ))
  } else {
    $Qll('.nav-item-js')
      .forEach((item) => {
        eventDropDown(item, 'mouseenter', item.children[0])
        eventDropDown(item, 'mouseleave', item.children[0])
      })
  }
}
