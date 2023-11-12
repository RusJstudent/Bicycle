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