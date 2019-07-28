//the ignition point of values animation
export function valuesAnimation() {
    let animationFlag = false;
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        const headerHeight = document.getElementById('js-header').clientHeight;
        const scrollTotal = scrollValue + headerHeight;

        const objectTop = document.getElementById('values').offsetTop;

        const animation1 = document.getElementById('slideLeft');
        const animation2 = document.getElementById('slideRight');

        if(scrollTotal > objectTop) {
            if(!animationFlag) {
                animationFlag = true;
                animation1.classList.add('values__animation1');
                animation2.classList.add('values__animation2');
            }
        }else {
            animation1.classList.remove('values__animation1');
            animation2.classList.remove('values__animation2');
        }
    });
}