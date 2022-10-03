/**
 * @param {String} nodes - ClassList with DOM reference
 * @param {HTMLElement} parent - Parent of nodes
 * @returns {Array} Array of nodes in DOM
 */
const $Qll = (
  nodes,
  // eslint-disable-next-line no-undef
  parent) => [...(parent || document).querySelectorAll(nodes)]

/**
 *
 * @param {HTMLElement} node - ClassName with DOM reference
 * @param {HTMLElement} parent - Parent of nodes
 * @returns {Node} Node in DOM
 */
// eslint-disable-next-line no-undef
const $Q = (node, parent) => (parent || document).querySelector(node)

export {
  $Qll,
  $Q,
}
