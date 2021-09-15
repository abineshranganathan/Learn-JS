'use strict';
const modal = document.querySelector('.modal');
const overylay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const showModel = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overylay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overylay.classList.remove('hidden');
};

const ese = function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
};

for (let i = 0; i < showModel.length; i++) {
  showModel[i].addEventListener('click', openModal);
}

overylay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', ese);
