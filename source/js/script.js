var pageHeader = document.querySelector('.page-header');
var promo = document.querySelector('.promo');
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

pageHeader.classList.remove('page-header--nojs');
navMain.classList.remove('main-nav--nojs');
promo.classList.remove('promo--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    pageHeader.classList.add('page-header--menu');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageHeader.classList.remove('page-header--menu');
  }
});
