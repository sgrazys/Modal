'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpneModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpneModal);

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpneModal.length; i++)
  btnsOpneModal[i].addEventListener('click', showModal);


const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);