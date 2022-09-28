import { forceNumeric } from '../utils/numeric-validation';
import { $Q, $Qll } from '../utils/query-selector';

/**
 * Handle form events
 * @param {String} eventType
 * @param {String} id
 * @returns {Function}
 */
const eventHandler = (currents) => {
  currents.forEach((current) => {
    const [{ dataset }, isEdit = false] = current;

    if (isEdit) {
      dataset.active = true;
    } else {
      dataset.active = false;
    }
  })
};

const addressForm = (form, parentNode, isCancel = false) => {
  if (!form) return null;

  const formById = $Q(`.address__edit[data-form="${form}"]`);
  const detailsById = $Q(`.address__detail[data-form="${form}"]`);

  if (isCancel) {
    const actionsById = $Q(`.address__actions[data-form="${form}"]`);

    return eventHandler([
      [formById],
      [detailsById, true],
      [actionsById, true],
    ]);
  }

  return eventHandler([
    [formById, true],
    [detailsById],
    [parentNode],
  ]);
}

/**
 * Event handler form Addresses
 * @param {String} ev event
 */
const clickFormAddresse = (ev) => {
  const { target } = ev;
  const {
    parentNode,
    nextElementSibling,
    dataset: { event, form },
  } = target;

  const actions = {
    edit: () => addressForm(form, parentNode),
    new: () => eventHandler([[nextElementSibling, true], [target]]),
    cancel: () => {
      if (form) {
        return addressForm(form, null, true);
      }

      return eventHandler([
        [parentNode],
        [$Q(`.address-js[data-event="new"]`), true],
      ]);
    },
  }

  return actions[event]();
};

/**
 * Open address edit form
 */
 (function initAdresses() {
  const buttonEdit = $Qll('.address-js');
  $Q('input[type=number]').addEventListener('input', forceNumeric)

  buttonEdit.forEach((button) => {
    button.addEventListener('click', (e) => {
      clickFormAddresse(e);
    });
  });
}());
