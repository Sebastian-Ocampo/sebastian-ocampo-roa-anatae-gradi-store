import { $Q } from "./query-selector"

/**
 * To validate state in dataset node
 */
 const isActive = ({ active }) => active === "true";

/**
 * Data Active toggle
 *
 * @param {String} control - ID button control
 * @param {String} node - ID modal
 * @param {Object} config - Object with overlay, closeSelector
 */
export const toggleDataActive = (control, node, config = {}) => {
  const { overlay, closeSelector } = config;

  $Q(control).addEventListener("click", function () {
    dataToggle($Q(node), overlay);
  });

  closeSelector && $Q(closeSelector).addEventListener(
    "click",
    function () {
      dataToggle($Q(node), overlay);
    }
  );
}

/**
* Data Toggle
*
* @param {HTMLElement} node - Node to manipulate
* @param {Boolean} overlay - if used to a overlay
*/
export function dataToggle (node, overlay) {
  const { dataset, id } = node;
  const active = isActive(dataset);

  if (active) {
    dataset.active = "false";
  } else {
    dataset.active = "true";
  }

  overlay && overlayActions(id, active, node);
}

/**
 *
 * @param {String} id - ID from node manipulate
 * @param {Boolean} active - If modal active
 * @param {HTMLElement} node - Node to manipulate
 */
const overlayActions = (id, active, node) => {
  const idOverlay = `overlay--${id}`;
  const parent = node.parentNode;

  if (!active) {
    const overlay = document.createElement("div");

    overlay.setAttribute("id", idOverlay);
    overlay.classList.add("overlay");

    parent.insertBefore(overlay, node);
    toggleDataActive("#" + idOverlay, "#" + id, { overlay: true });
  } else {
    parent.removeChild($Q("#" + idOverlay));
  }
}
