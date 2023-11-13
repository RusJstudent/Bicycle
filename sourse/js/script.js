const burgerMenu = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');

burgerMenu.onclick = function(e) {
    menuBody.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');

    if (document.body.style.overflow === '') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

const slider = document.querySelector('.slider');
const leftSlider = slider.querySelectorAll('.slider__row')[0];
const sliderNav = document.querySelector('.slider__nav');
let currentMargin = 0;

sliderNav.onclick = function(e) {
    if (!e.target.classList.contains('slider__circle')) return;
    if (e.target.classList.contains('_active')) return;

    const navElems = Array.from(sliderNav.querySelectorAll('.slider__circle'));
    const prevIdx = navElems.findIndex(elem => elem.classList.contains('_active'));
    const currentIdx = navElems.findIndex(elem => elem === e.target);
    navElems[prevIdx].classList.remove('_active');
    e.target.classList.add('_active');

    let diff = currentIdx - prevIdx;

    currentMargin += - diff * document.documentElement.clientWidth;
    leftSlider.style.marginLeft = currentMargin + 'px';

    slider.children[currentIdx].style.height = 'auto';
    slider.children[prevIdx].style.height = 0;
}