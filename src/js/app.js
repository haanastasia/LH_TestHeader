import '../sass/styles.scss';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../userfiles/', true, /\.(png|jpe?g|svg)$/));


import $ from 'jquery';

global.jQuery = $;
global.$ = $;

var btn = document.querySelector('.header__navbar-toggler');
var btnClose = document.querySelector('.nav-mobile__item--close');

var linkParent = document.querySelector('.nav-mobile__link--parent');

linkParent.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
});

btn.addEventListener('click', function () {
    this.nextElementSibling.classList.add('active');
    this.classList.add('active');
});

btnClose.addEventListener('click', function () {
    document.querySelector('.nav-mobile').classList.remove('active');
});

 