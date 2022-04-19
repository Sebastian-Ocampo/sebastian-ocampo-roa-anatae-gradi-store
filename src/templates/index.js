import "swiper/css";
import "../scss/main.scss";
import "../utils/hello";
import "../components/slider-swiper";
import { variantOnChange } from "../components/variants-product";
import {
  btnAddToCart,
  deleteItem,
  onChangeItemCart,
  openCloseCart
} from "../components/cart";
import { setQuantity } from "../utils/input-quantity";

variantOnChange(".variants");

btnAddToCart(".add-product-cart");
btnAddToCart(".add-product-cart-upsell");

openCloseCart();
deleteItem();
setQuantity();
onChangeItemCart();
