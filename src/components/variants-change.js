import { $Q } from "../utils/query-selector";
import api from "../services/api"
import { stringToHTML } from "../utils/to-html"

export function queryVariants(){
  const variantSelected = $Q('[name="id"]').value;
  const handleVariant = $Q('[name="id"]');

  sectionHandle(handleVariant.dataset.variant, variantSelected)
}

async function sectionHandle(handle, variantid){
  const dataHandle = `/products/${handle}`;
  const htmlResponse = await api.shopifyVariantByUrl(dataHandle,variantid);
  const variantPrice = await $Q(".regular", stringToHTML(htmlResponse));
  const variantAvailable = await $Q('[name="available"]', stringToHTML(htmlResponse));

  updateImage(variantPrice);
  updateVariant(variantAvailable.value);
}

function updateImage(variantPrice) {
  const sectionPrice = $Q(".regular");

  sectionPrice.innerHTML = variantPrice.innerHTML;
}

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

