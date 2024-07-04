const modalRefs = {
  openModalBtn: document.querySelectorAll(".js-open-modal"),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

const menuRefs = {
  openMenuBtn: document.querySelector(".js-open-menu"),
  closeMenuBtn: document.querySelector(".js-close-menu"),
  menuBackdrop: document.querySelector(".js-menu-backdrop"),
};

export { modalRefs, menuRefs };
