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

import { openAccordion } from "../utils/accordion";
import { openDropDown } from "../components/header";
import { toggleDataActive } from "../utils/toggle-dataset";

variantOnChange(".variants");

btnAddToCart(".add-cart-js");
deleteItem();
setQuantity();
onChangeItemCart();

openAccordion();
openDropDown();
toggleDataActive("#burger-nav-js", "#nav-list-js");

