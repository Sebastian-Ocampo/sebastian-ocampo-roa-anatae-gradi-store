import { $Q } from "../utils/query-selector";

export const validateRegisterCustomer = () => {
  // eslint-disable-next-line no-undef
  const queryUrl = window.location.href;

  if (queryUrl.includes('form_type=customer')) {
    $Q('.error-js').style.display = "block";
  }
}
