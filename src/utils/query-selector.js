/**
 * @param {String} nodes - ClassList with DOM reference
 * @param {HTMLElement} parent - Parent of nodes 
 * @returns {Array} Array of nodes in DOM
 */
const $Qll = (nodes, parent) => {
  return [...(parent ? parent : document).querySelectorAll(nodes)];
}

/**
 * 
 * @param {HTMLElement} node - ClassName with DOM reference
 * @param {HTMLElement} parent - Parent of nodes
 * @returns {Node} Node in DOM
 */
const $Q = (node, parent) => {
  return (parent ? parent : document).querySelector(node);
}

export {
  $Qll,
  $Q
}