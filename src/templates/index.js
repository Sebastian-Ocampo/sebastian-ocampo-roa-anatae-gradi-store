import "../scss/main.scss";
import "../utils/hello";
import {openAccordion} from "../utils/accordion";
import "../components/slider-swiper";
import { filter } from "../components/filter";
import { variantOnChange } from "../components/variants-product";

filter();
variantOnChange('.variants');
openAccordion();
