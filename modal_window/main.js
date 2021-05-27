'use strict';

const modal = document.getElementById('modal');
const show = document.getElementById('modal__show');
const clos = document.getElementById('modal__close');
const backGround = document.getElementById('modal__background');

show.addEventListener('click', ()=> {
  modal.classList.add('is-show');
  backGround.classList.add('is-show');
})

clos.addEventListener('click', ()=> {
  modal.classList.remove('is-show');
  backGround.classList.remove('is-show');
})

backGround.addEventListener('click', ()=> {
  // closをクリックしたのと一緒
  clos.click();
})

