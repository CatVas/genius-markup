// Mobile menu
makeHandler({
  btnCloseClass: 'menu-btn-close',
  btnOpenClass: 'menu-btn-open',
  modalClass: 'mobile-menu',
  modalClassToggle: 'is-open',
});

// Modal
makeHandler({
  btnCloseClass: 'modal-btn-close',
  btnOpenClass: 'modal-btn-open',
  modalClass: 'backdrop',
  modalClassToggle: 'is-hidden',
});

function makeHandler({
  btnCloseClass = '',
  btnOpenClass = '',
  modalClass = '',
  modalClassToggle = '',
} = {}) {
  const modal = document.querySelector(`.${modalClass}`);
  const modalBtnClose = document.querySelector(`.${btnCloseClass}`);
  const modalBtnOpen = document.querySelector(`.${btnOpenClass}`);

  const toggleModal = () => modal.classList.toggle(modalClassToggle);

  modalBtnClose.addEventListener('click', toggleModal);
  modalBtnOpen.addEventListener('click', toggleModal);
}
