import { forceNumeric } from "../utils/numeric-validation";
import { $Q } from "../utils/query-selector"

const validateForm = (e) => {

  const form = e.target.closest('form');
  const checkAccept = $Q('#validation', form);
  const fieldBefore = $Q('textarea', form);

  if (!checkAccept.checked && fieldBefore.value.length > 0) {
    $Q('.error-check-js').style.display = 'flex'
  } else {
    $Q('.error-check-js').style.display = 'none'
  }

}

export const validateFormContact = () => {
  $Q('.send-contact').addEventListener('click', validateForm);
  $Q('input[type="number"]').addEventListener('input', forceNumeric);
}

export const validateCustomerExist = () => {
  const {location: { href } } = window;
  if (href.includes('form_type=customer')) {
    $Q('.error-user-exist').style.display = 'flex';
  }
}
