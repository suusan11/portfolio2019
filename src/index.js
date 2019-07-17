import "./scss/style.scss";
import * as commonFiles  from './common';

//loading after read HTML
window.onload = function() {
    commonFiles.globalMenu();
    commonFiles.sendTop();
    commonFiles.smoothScroll();
};