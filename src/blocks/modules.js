/* eslint-disable */

// Fix viewport units for height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Common
import '../blocks/modules/common/menu/menu';
import '../blocks/modules/common/form/form';
import '../blocks/modules/common/our-record/our-record';

// Pages
import '../blocks/modules/pages/index/index';
import '../blocks/modules/pages/service/service';
import '../blocks/modules/pages/about-us/about-us';