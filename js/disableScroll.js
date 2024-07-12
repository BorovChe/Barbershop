import { bodyRef } from "./refs.js";

function disableScroll() {
  const lockPaddingValue = window.innerWidth - bodyRef.offsetWidth + "px";
  bodyRef.style.paddingRight = lockPaddingValue;
  bodyRef.style.overflow = "hidden";
}

function enableScroll() {
  bodyRef.style.paddingRight = 0;
  bodyRef.style.overflow = "";
}

export { disableScroll, enableScroll };
