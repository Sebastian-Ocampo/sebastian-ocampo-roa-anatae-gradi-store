import { $Qll } from "./query-selector";
import { dataToggle } from "./toggle-dataset";

export function openAccordion() {
  $Qll('.accordions').forEach(
    accordion => {
      $Qll('.accordion-item', accordion)
        .forEach(item => {
          item.addEventListener(
            'click',
            function () {
              if (accordion.dataset.toggle === 'true') {
                allCloseAccordions('.accordion-item', accordion);
              }
              dataToggle(this);
            }
          )
        })
    }
  )
}

function allCloseAccordions (nodeAll, parent) {
  return $Qll(nodeAll, parent).forEach(
    node => {
      node.dataset.active = 'false'
    }
  )
}