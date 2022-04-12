import "swiper/css";
import "../scss/main.scss";
import "../utils/hello";
import "../components/slider-swiper";
import { variantOnChange } from "../components/variants-product";
import {
  btnAddToCart,
  btnAddUpsell,
  deleteItem,
  onChangeItemCart,
  openCloseCart
} from "../components/cart";
import { setQuantity } from "../utils/input-quantity";

variantOnChange(".variants");

btnAddToCart();
btnAddUpsell();
openCloseCart();
deleteItem();
setQuantity();
onChangeItemCart();
