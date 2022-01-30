import { $all, $one } from '../utils/query-selector'
import { stringToHTML } from '../utils/to-html'
import api from '../services/api'

export const filter = () => {
  $all('.filter-input').forEach(
    input => {
      input.addEventListener(
        'change',
        changeFilter
      )
    }
  )
}

async function changeFilter(e) {
  if (!url_collection) return null;
  
  const url = url_collection + '/' + e.target.value;
  const newFilter = await api.shopifySectionByUrl(url, 'collection-products');
  const listOfProducts = $one('#list-products', stringToHTML(newFilter));
  
  $one('.shopify-section.collection').innerHTML = listOfProducts.outerHTML;
}