const shareBtn = document.querySelector('.js-shareBtn');
const modal = document.querySelector('.js-modal');
const body = document.querySelector('body');

function displayModal() {
    shareBtn.classList.add('active');
    shareBtn.setAttribute("aria-expanded", "true");
    modal.classList.remove('hide-modal');
    modal.classList.add('display-modal'); 
}

function hideModal() {
    modal.classList.remove('display-modal');
    modal.classList.add('hide-modal');
    shareBtn.classList.remove('active');
    shareBtn.setAttribute("aria-expanded", "false");
}

shareBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!shareBtn.classList.contains('active')) {
        displayModal();
    }
    else {
        hideModal();
    }
})

body.addEventListener('click', (e) => {
    if (shareBtn.classList.contains('active') && e.target !== modal && !e.target.closest('.js-modal')) {
        hideModal();
    } 
})