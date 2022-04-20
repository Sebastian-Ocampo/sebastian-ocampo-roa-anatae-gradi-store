import "swiper/css";
import "../scss/main.scss";
import "../utils/hello";
import "../components/slider-swiper";
import { variantOnChange } from "../components/variants-product";
import {
  btnAddToCart,
  deleteItem,
  onChangeItemCart
} from "../components/cart";
import { setQuantity } from "../utils/input-quantity";

variantOnChange(".variants");

btnAddToCart(".add-cart-js");
deleteItem();
setQuantity();
onChangeItemCart();
