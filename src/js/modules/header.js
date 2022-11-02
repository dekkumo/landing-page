const menuBurger = document.querySelector('.header__burger');
const newMenuBurger = document.querySelector('.header__menu');

document.addEventListener('click', burgerFn);

function burgerFn(event) {
  if (event.target.closest('.header__burger')) {
    menuBurger.classList.toggle('active');
  }
  if (event.target.closest('.header__burger')) {
    newMenuBurger.classList.toggle('active');
  }
}