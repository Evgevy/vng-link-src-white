const initButtons = () => {
    // const galleryButton = () => {
    //     const products = document.querySelectorAll('.gallery__item');
    //     const button = document.querySelector('.gallery__link');
    //     let hidden = true;

    //     if (products.length > 8) {
    //         for (let i = 8; i < products.length; i++) {
    //             products[i].style.display = 'none';
    //         }
    //         if (button) {
    //             button.style.display = 'block';
    //             button.textContent = 'Смотреть ещё...';

    //         }

    //     }

    //     if (button) {
    //         button.addEventListener('click', function () {
    //             for (let i = 8; i < products.length; i++) {
    //                 if (hidden) {
    //                     products[i].style.display = 'block';
    //                     button.textContent = 'Скрыть';
    //                 } else {
    //                     products[i].style.display = 'none';
    //                     button.textContent = 'Смотреть еще...';
    //                 }
    //             }
    //             hidden = !hidden;
    //         });

    //     }
    // }

    // galleryButton();

    // const eventButton = () => {
    //     const productsEvent = document.querySelectorAll('.events__item');
    //     const buttonEvent = document.querySelector('.events__button.intro__link');
    //     let hiddenEvent = true;

    //     if (productsEvent.length > 9) {
    //         for (let i = 9; i < productsEvent.length; i++) {
    //             productsEvent[i].style.display = 'none';
    //         }
    //         if (buttonEvent) {
    //             buttonEvent.style.display = 'flex';
    //             buttonEvent.textContent = 'Смотреть ещё...';

    //         }

    //     }

    //     if (buttonEvent) {
    //         buttonEvent.addEventListener('click', function () {
    //             for (let i = 9; i < productsEvent.length; i++) {
    //                 if (hiddenEvent) {
    //                     productsEvent[i].style.display = 'block';
    //                     buttonEvent.textContent = 'Скрыть';
    //                 } else {
    //                     productsEvent[i].style.display = 'none';
    //                     buttonEvent.textContent = 'Смотреть еще...';
    //                 }
    //             }
    //             hiddenEvent = !hiddenEvent;
    //         });

    //     }
    // }
    // eventButton();
    const ticker = () => {

        const marqueeBox = document.querySelector('.ticker__marquee-box');
        if (marqueeBox) {
            marqueeBox.innerHTML += marqueeBox.innerHTML;
        }



    }

    ticker();
}


export { initButtons };