import 'swiper/css';
import '../scss/main.scss';
import '../utils/hello';
import '../components/slider-swiper';
import { variantOnChange } from '../components/variants-product';
import { openAccordion } from '../utils/accordion';
import { openDropDown } from '../components/header';
import { toggleDataActive } from '../utils/toggle-dataset';
import { isRegisteredUser } from '../components/news-letters';
import { initTopBar } from '../components/top-bar';
import { getValueHeroSlider } from '../components/hero-slider';

isRegisteredUser();

initTopBar();
variantOnChange('.variants');
openAccordion();
openDropDown();
toggleDataActive('#burger-nav-js', '#nav-list-js');
getValueHeroSlider();
