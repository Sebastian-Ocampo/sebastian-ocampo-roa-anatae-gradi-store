import { forceNumeric } from "../utils/numeric-validation";
import { $Q } from "../utils/query-selector"

const validateForm = (e) => {
  e.preventDefault();
  const form = e.target.closest('form');
  const checkAccept = $Q('#validation', form);

  const requiredInputs = [...form.elements]
    .filter((tag) => tag.required)
    .every((tag) => tag.value)

  if (!checkAccept.checked || !requiredInputs) {
    $Q('.error-check-js').style.display = 'flex';
    return false;
  }

  $Q('.error-check-js').style.display = 'none';
  return form.submit();
}


export const validateFormContact = () => {
  $Q('.send-contact').addEventListener('click', validateForm);
  $Q('input[type="number"]').addEventListener('input', forceNumeric);
}
