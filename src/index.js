import "./scss/style.scss";

//header fix --> get scroll position
window.addEventListener('scroll', function(){
    const scrollValue = window.scrollY;
    const headerHeight = document.getElementById('js-header').clientHeight;
    const scrollTotal = scrollValue + headerHeight;

    const breakPoint = document.getElementById('js-breakPoint').clientHeight;
    const objectTop = document.getElementById('js-breakPoint').offsetTop;
    const breakPointTotal = breakPoint + objectTop;

    const headerShow = document.getElementById('js-header');

    if(scrollTotal > breakPointTotal) {
        headerShow.classList.add('is-show');
    }else {
        headerShow.classList.remove('is-show');
    }
});

