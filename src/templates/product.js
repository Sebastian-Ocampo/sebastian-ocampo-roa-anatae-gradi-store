import "../scss/product.scss";
import { mountSlider } from "../components/product-slider";
import { $Q } from "../utils/query-selector";

mountSlider($Q('.swiper.main-product__slider-principal'));