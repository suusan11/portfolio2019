import "./scss/style.scss";
import * as commonFiles  from './common';
import * as animationFiles from './animation';

//loading after read HTML
window.onload = function() {
    commonFiles.globalMenu();
    commonFiles.sendTop();
    commonFiles.smoothScroll();
    animationFiles.valuesAnimation();
};