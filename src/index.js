import "./scss/style.scss";

//button operation to send page top
window.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    console.log(scrollValue);

    const breakPoint = document.getElementById('js-breakPoint').clientHeight;
    const objectTop = document.getElementById('js-breakPoint').offsetTop;
    const breakPointTotal = breakPoint + objectTop;
    console.log(breakPointTotal);

    const buttonShow = document.getElementById('js-topButton');

    if(scrollValue > breakPointTotal) {
        buttonShow.classList.add('is__show');
    }else {
        buttonShow.classList.remove('is__show');
    }
})