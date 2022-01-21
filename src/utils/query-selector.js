/**
* @return {array} Array of nodes in DOM
*/
const $all = (nodes) => [...document.querySelectorAll(nodes)]

/**
* @return {node} Node in DOM
*/
const $one = (node, parent) => (parent ? parent : document).querySelector(node)

export {
  $all,
  $one
}