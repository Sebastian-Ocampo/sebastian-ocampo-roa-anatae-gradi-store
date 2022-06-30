import { $Q } from "../utils/query-selector";
import api from "../services/api"
import { stringToHTML } from "../utils/to-html"
import Swiper, { Navigation, Thumbs} from "swiper";
import { horizontalSlider, verticalSlider } from "../utils/slider-configuration";

/**
  * Section rendering to return images of the selected variant
  * 
  * @returns {Object} - main image section
  * @returns {Object} - thumbs image section
  * 
  * @author Andres Briñez
  */

export function queryVariants(){
  const variantSelected = $Q('[name="id"]').value;
  const handleVariant = $Q('[name="id"]');

  sectionHandle(handleVariant.dataset.variant, variantSelected)
}

/**
 * Captures the HTML section of the product in question and returns the node of the images, price and stock to replace
 * 
 * @param { data } handle Data element of the product to which the query will be made 
 * @param { String } variantid Id of the selected variant
 */

async function sectionHandle(handle, variantid){
  const dataHandle = `/products/${handle}`;
  const htmlResponse = await api.shopifyVariantByUrl(dataHandle,variantid);
  const variantPrice = await $Q(".regular", stringToHTML(htmlResponse));
  const variantAvailable = await $Q('[name="available"]', stringToHTML(htmlResponse));

  updatePrice(variantPrice);
  updateVariant(variantAvailable.value);
  
}

/** 
 * Inject new price node to the section
 * 
 * @param { object } variantPrice Object with the price value
 * 
 */

function updatePrice(variantPrice) {
  const sectionPrice = $Q(".regular");

  sectionPrice.innerHTML = variantPrice.innerHTML;
}

/** 
 * Show not available of the variant, depending of the stock
 * 
 * @param { object } variantAvailable Object with the stock value
 * 
 */

function updateVariant(variantAvailable) {
  const sectionAvailable = $Q('.main-product__detail--available');
  const button = $Q('.btn-add-to-cart')

  if ( variantAvailable == 'false' ) {
    button.disabled = true

    sectionAvailable.classList.remove('hidden')
  }
  else {
    button.disabled = false

    sectionAvailable.classList.add('hidden')
  }
}

