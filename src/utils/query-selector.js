/**
* @return {array} Array of nodes in DOM
*/
const $Qll = (nodes, parent) => {
  return [...(parent ? parent : document).querySelectorAll(nodes)];
}

/**
* @return {node} Node in DOM
*/
const $Q = (node, parent) => {
  return (parent ? parent : document).querySelector(node);
}

export {
  $Qll,
  $Q
}