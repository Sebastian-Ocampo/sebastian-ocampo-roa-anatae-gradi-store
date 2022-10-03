/**
* Stores all DOM elements with which it we will interact
* @return {object} Total DOM elements
*/
export const domElements = () => {
  const elements = {
    // eslint-disable-next-line no-undef
    $MainContent: document.querySelector('#MainContent'),
  };

  return elements;
}
