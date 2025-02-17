// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import './modules/hero-slider.js';

import { checkWebPSupport } from './utils/checkwebp.js';
import { initHeader } from './modules/header.js';
import { initProgramsSlider } from './modules/programs-slider.js';

checkWebPSupport();
initHeader();
initProgramsSlider();
