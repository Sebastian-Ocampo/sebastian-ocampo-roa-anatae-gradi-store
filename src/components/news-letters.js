import { $Q } from "../utils/query-selector";
import { validateRegisterCustomer } from "../utils/validate-customer"

export const isRegisteredUser = () => {
  // eslint-disable-next-line no-undef
  const isRegistered = validateRegisterCustomer();

  if (isRegistered) {
    $Q('.error-js').style.display = "block";
    $Q('input[type="email"]').value = "";
  }
}
