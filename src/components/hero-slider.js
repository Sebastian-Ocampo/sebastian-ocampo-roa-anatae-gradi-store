//import api from '../services/api';
import { $Q } from '../utils/query-selector';

/**
 * Get orders and concat in the hero-slider description
 */
export const getValueHeroSlider = async () => {
  let texts = '';
  for (let i = 0; i < 5; i++) {
    texts = $Q('#hero__h1');
    console.log(texts);
  }
  // if (!$Q(`#text-buttons__p`)) return;
  // const text = $Q('#text-buttons');

  // const value = await api.getOrders('http://localhost:3000/orders');

  // text.innerHTML = value.length + text.textContent;

  // //miDiv.innerHTML = 'Hola, mundo!';
  // console.log(value.length, text);
};
