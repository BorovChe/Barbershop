import { modalRefs } from "./refs.js";

modalRefs.backdrop.addEventListener("click", onClickBackdrop);
modalRefs.closeModalBtn.addEventListener("click", onCloseModal);
modalRefs.openModalBtn.forEach(function (btn) {
  btn.addEventListener("click", onOpenModal);
});

function onOpenModal(e) {
  window.addEventListener("keydown", onEscKeyDown);
  document.body.classList.add("show-modal");
  document.body.style.overflow = "hidden";
}

function onCloseModal(e) {
  window.removeEventListener("keydown", onEscKeyDown);
  document.body.classList.remove("show-modal");
  document.body.style.overflow = "";
}

function onClickBackdrop(e) {
  if (e.currentTarget === e.target) onCloseModal();
}

function onEscKeyDown(e) {
  if (e.code === "Escape") onCloseModal();
}
