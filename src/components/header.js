import { closeAll } from "../utils/accordion";
import { $Q, $Qll } from "../utils/query-selector"
import { dataToggle } from "../utils/toggle-dataset";

export function openDropDown() {
  const { dataset } = $Q('#nav-list-js');

  if (dataset.event === "click") {
    $Qll('.button-dropdown-js')
    .forEach(item => (
      eventDropDown(item, dataset.event, item)
    ))
  } else {
    $Qll('.nav-item-js')
    .forEach(item => {
      eventDropDown(item, dataset.event, item.children[0])
      eventDropDown(item, 'mouseleave', item.children[0])
    })
  }
}

function eventDropDown(
  node,
  event,
  nodeOnAction
) {
  return node.addEventListener(event, function () {
    dropDownAction(nodeOnAction)
  })
}

function dropDownAction(element) {
  element.dataset.active != "true" 
    && closeAll('.nav-item-js', $Q('#nav-list-js'));

  dataToggle(element);
}