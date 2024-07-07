import { menuRefs } from "./refs.js";

menuRefs.openMenuBtn.addEventListener("click", onOpenMenu);
menuRefs.closeMenuBtn.addEventListener("click", onCloseMenu);
menuRefs.menuBackdrop.addEventListener("click", onClickBackdrop);
menuRefs.menuNavLink.forEach(function (link) {
  link.addEventListener("click", onCloseMenu);
});

function onOpenMenu(e) {
  document.body.classList.add("show-menu");
}

function onCloseMenu(e) {
  document.body.classList.remove("show-menu");
}

function onClickBackdrop(e) {
  if (e.currentTarget === e.target) onCloseMenu();
}
