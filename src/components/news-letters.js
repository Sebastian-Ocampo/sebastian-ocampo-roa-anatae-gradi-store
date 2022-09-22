import { $Q } from "../utils/query-selector";

export const validateRegisterCustomer = () => {
  const queryUrl = window.location.href;

  if(queryUrl.includes('form_type=customer')){
    $Q('.error-js').style.display = "block";
  }
}