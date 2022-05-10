const frame = document.querySelector('section');
const lists = frame.querySelectorAll('article');
const deg = 45;
let active = 0;

const len = lists.length - 1;
let i = 0;
for (let el of lists) {
    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");
    let pic = el.querySelector('.pic');

    el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(./img/member${i+1}.jpg)`;
    i++;

    play.addEventListener('click', e => {
        e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
        e.currentTarget.closest('article').querySelector('audio').play();
    });
    pause.addEventListener('click', e => {
        e.currentTarget.closest('article').querySelector('.pic').classList.remove('on');
        e.currentTarget.closest('article').querySelector('audio').pause();
    });
    load.addEventListener('click', e => {
        e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
        e.currentTarget.closest('article').querySelector('audio').load();
        e.currentTarget.closest('article').querySelector('audio').play();
    });
}
///
const prev = document.querySelector('.btnPrev');
const next = document.querySelector('.btnNext');

let num = 0;
prev.addEventListener('click', () => {
    initMusic();
    num++;
    frame.style.transform = `rotate(${deg * num}deg)`;
    
    (active == 0) ? active = len : active--;
    activation(active, lists);
});
next.addEventListener('click', () => {
    initMusic();
    num--;
    frame.style.transform = `rotate(${deg * num}deg)`;
    (active == len) ? active = 0 : active++;
    activation(active, lists);
});

const audio = frame.querySelectorAll('audio');

function initMusic() {
    for (let el of audio) {
        el.pause();
        el.load();
        el.parentElement.previousElementSibling.classList.remove('on');
    }
}

function activation(index, lists) {
    for (let el of lists) {
        el.classList.remove('on');
    }
    lists[index].classList.add('on');
}