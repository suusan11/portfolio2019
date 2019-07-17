//global menu for mobile device
export function globalMenu() {
    const openButton = document.getElementById('js-open-menu');
    const closeButton = document.getElementById('js-close-menu');
    const linkButtons = document.getElementById('js-global-menu').getElementsByTagName('li');
    const globalMenu = document.getElementById('js-global-menu');

    openButton.addEventListener('click', function () {
        globalMenu.classList.add('active');
        globalMenu.classList.remove('remove');

        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y'); //window.scrollで取得した値を呼び出す
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}`; //スクロールポジションをスクロールしている位置にする（毎回windowのトップに動かないようにする）
        for(let i = 0; i < linkButtons.length; i++) {
            const linkButton = linkButtons[i];
            linkButton.addEventListener('click', function() {
                globalMenu.classList.remove('active');
                globalMenu.classList.add('remove');

                const scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            });
        }
    });

    closeButton.addEventListener('click', function () {
        globalMenu.classList.remove('active');
        globalMenu.classList.add('remove');
        document.body.style.position = '';

        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });

    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
}

//button operation to send page top
export function sendTop() {
    window.addEventListener('scroll', function() {
        const scrollValue = window.scrollY;

        const breakPoint = document.getElementById('js-breakPoint').clientHeight;
        const objectTop = document.getElementById('js-breakPoint').offsetTop;
        const breakPointTotal = breakPoint + objectTop;

        const buttonShow = document.getElementById('js-topButton');

        if(scrollValue > breakPointTotal) {
            buttonShow.classList.add('is__show');
        }else {
            buttonShow.classList.remove('is__show');
        }
    });
}

//smooth scroll
export function smoothScroll() {
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        header: '[data-scroll-header]'
    });
}
