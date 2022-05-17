const swiper = new Swiper('.wrap', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 50,
    slidesPerView: 'auto',
    grabCursor: true,
    centeredSlides: true,
    speed: 1000,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: -100,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    }
});

const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');

btnStart.addEventListener('click', () => {
    swiper.autoplay.start();
});
btnStop.addEventListener('click', () => {
    swiper.autoplay.stop();
});
