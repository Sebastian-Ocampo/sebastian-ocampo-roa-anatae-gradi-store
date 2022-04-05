import { $Q } from "./query-selector"

/**
 * Open nodes with CSS and dataset
 * @param {String} node selector who detect click
 * @param {String} query selector with the node to open
 * @param {Object} config Obejct with attribute from config open
 * 
 * @return {Function}
 */

 export const toggleDataActive = (node, parent, config) => {
  const { overlay } = config ? config : { overlay: false }
  const toOpen = parent ? $Q(parent) : $Q(node)

  return $Q(node).addEventListener(
    'click',
    function () {
      dataToggle(toOpen, overlay)
    }
  )
}

function dataToggle (nodeToOpen, overlay) {
  const dataset = nodeToOpen.dataset.active
  const isActive = dataset != 'true' ? false : true
  
  if (!dataset) return null

  if (!isActive) {
    nodeToOpen.dataset.active = 'true'
  } else {
    nodeToOpen.dataset.active = 'false'
  }

  overlay && overlayActions({ 
    isActive,
    target: nodeToOpen
  })
}

const overlayActions = ({ isActive, target }) => {
  const id = target.getAttribute('id')

  if (!isActive) {
    const before = document.createElement('div')
    before.setAttribute('id', `overlay--${id}`)
    before.classList.add('overlay')
    target.parentNode.insertBefore(before, target)
    toggleDataActive(
      `#overlay--${id}`,
      `#${id}`,
      { overlay: true }
    )
  } else {
    target.parentNode.removeChild($Q(`#overlay--${id}`))
  }
}
