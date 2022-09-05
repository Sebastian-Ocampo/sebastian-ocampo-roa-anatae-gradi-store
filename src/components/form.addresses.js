import { $Q, $Qll } from "../utils/query-selector"

/**
 * Event handler form Addresses
 * @param {String} ev event
 */
const clickFormAddresse = (ev) => {
  const target = ev.target;
  const id = target.dataset.form;
  const eventType = target.dataset.event;

  return eventHandler(eventType, id);
}

/**
 * Handle form events
 * @param {String} eventType 
 * @param {String} id 
 * @returns {Function}
 */
const eventHandler = (eventType, id) => {
  let events = {
    edit: () => {
      toggleHideElement(
        '#container-addresses-list', 
        '#container-addresses-forms'
      );
      toggleHideElement(
        `.address-container[data-form="${id}"]`, 
        `.form-edit-addresse[data-form="${id}"]`
      );
    },
    new: () => {
      toggleHideElement(
        '#btn-new_addresse', 
        '#containers-new-addresse'
      );
    },
    "cancel-new": () => {
      toggleHideElement(
        '#containers-new-addresse', 
        '#btn-new_addresse'
      );
    }
  }

  if (!eventType in events) {
    let res = () => {
      toggleHideElement(
      '#container-addresses-forms', 
      '#container-addresses-list'
      );
      toggleHideElement(
        `.form-edit-addresse[data-form="${id}"]`, 
        `.address-container[data-form="${id}"]`
      );
    }
    return res();
  } 

  return events[eventType]();
}

/**
 * Hide / unhide elements
 * @param {String} hide 
 * @param {String} unhide 
 */
const toggleHideElement = (hide, unhide) => {
  $Q(hide).classList.add('hidden');
  $Q(unhide).classList.remove('hidden');
}


/**
 * Open address edit form 
 */
export const openFormEdit = () => {
  const buttonEdit = $Qll('.edit-addresse');
  for (let button of buttonEdit) {
    button.addEventListener('click', (e) => {
      clickFormAddresse(e);
    })
  }
}
