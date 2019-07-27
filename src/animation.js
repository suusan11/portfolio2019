//the ignition point of values animation
export function valuesAnimation() {
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        const headerHeight = document.getElementById('js-header').clientHeight; //headerの高さをとる
        const scrollTotal = scrollValue + headerHeight; //headerを含んだ高さの取得
        // console.log("scrollY " + scrollValue);

        const objectTop = document.getElementById('values').offsetTop;

        const animation1 = document.getElementById('slideLeft');
        const animation2 = document.getElementById('slideRight');

        if(scrollTotal > objectTop) {
            // console.log("koeta");
            animation1.classList.add('values__animation1');
            animation2.classList.add('values__animation2');
        }else {
            animation1.classList.remove('values__animation1');
            animation2.classList.remove('values__animation2');
        }
    });
}