'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const animation = document.querySelector('.animation')
const closeBtn = document.querySelector('.close-modal-window');
const btnModals = document.querySelectorAll('.show-modal-window');

const openWindow = function () {
    // document.querySelector('.hidden').style.display = 'block'
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.animation').style.animation = 'none';
}

const closeWindow = function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
    document.querySelector('.animation').style.animation = 'gradient 30s infinite';
}

for(let i = 0; i < btnModals.length; i++) {
    btnModals[i].addEventListener('click', openWindow)

    closeBtn.addEventListener('click', closeWindow)
    overlay.addEventListener('click', closeWindow)
}   

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modalWindow.classList.contains('.hidden')) {
            closeWindow()
        }
    }
)