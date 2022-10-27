export const validateRegisterCustomer = () => {
  // eslint-disable-next-line no-undef
  const queryUrl = window.location.href;

  return queryUrl.includes('form_type=customer');
}
