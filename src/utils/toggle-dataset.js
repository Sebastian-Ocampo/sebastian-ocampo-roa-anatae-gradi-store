import { $Q } from "./query-selector"

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
    // eslint-disable-next-line no-undef
    const overlay = document.createElement("div");

    overlay.setAttribute("id", idOverlay);
    overlay.classList.add("overlay");

    parent.insertBefore(overlay, node);
    // eslint-disable-next-line no-use-before-define
    toggleDataActive(`#${idOverlay}`, `#${id}`, { overlay: true });
  } else {
    parent.removeChild($Q(`#${idOverlay}`));
  }
}

/**
 * To validate state in dataset node
 */
 const isActive = ({ active }) => active === "true";

/**
* Data Toggle
*
* @param {HTMLElement} node - Node to manipulate
* @param {Boolean} overlay - if used to a overlay
*/
export function dataToggle(node, overlay) {

  const { dataset, id } = node;
  const active = isActive(dataset);

  if (active) {
    dataset.active = "false";
  } else {
    dataset.active = "true";
  }

  if (overlay) overlayActions(id, active, node);
}
/**
 * Data Active toggle
 *
 * @param {String} control - ID button control
 * @param {String} node - ID modal
 * @param {Object} config - Object with overlay, closeSelector
 */
export const toggleDataActive = (control, node, config = {}) => {
  const { overlay, closeSelector } = config;

  $Q(control).addEventListener("click", () => {
    dataToggle($Q(node), overlay);
  });

  // eslint-disable-next-line no-unused-expressions
  closeSelector && $Q(closeSelector).addEventListener(
    "click",
    () => {
      dataToggle($Q(node), overlay);
    },
  );
}
