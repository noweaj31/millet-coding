"use strict";

const header = document.querySelector("header");
const topArrow = document.querySelector(".button-content .top-arrow");
const reactiveBtnContent = document.querySelector(".reactive-btn-content");
const reactive = window.matchMedia("screen and (max-width: 480px)");
const reTopArrow = document.querySelector(".reactive-btn-content .top-arrow");
const scrollY = window.scrollY;
let lastScrollY = 0;

addEventListener("scroll", (e) => {
  const direction =
    scrollY > lastScrollY
      ? (reactiveBtnContent.style.transform = "translateY(50px)")
      : (reactiveBtnContent.style.transform = "translateY(0)");
  lastScrollY = scrollY;
});

document.addEventListener("scroll", () => {
  if (window.scrollY === 0) header.style.backgroundColor = "#fff";
  if (window.scrollY > 50) header.style.top = "-145px";
  if (window.scrollY <= 50) header.style.top = "0px";
  if (window.scrollY === 0) topArrow.style.display = "none";
  if (window.scrollY > 50) topArrow.style.display = "flex";
  if (window.matchMedia("(max-width: 480px)").matches) {
    header.style.top = "0px";
  }
});

function goToTop() {
  window.scrollTo({
    top: "0",
    behavior: "smooth",
  });
}
function reGoToTop() {
  window.scrollTo({
    top: "0",
    behavior: "smooth",
  });
}

topArrow.addEventListener("click", _.throttle(goToTop, 1000));
reTopArrow.addEventListener("click", _.throttle(reGoToTop, 1000));

// document.addEventListener("scroll", () => {
//   if (window.scrollY > 50) reTopArrow.style.bottom = "100px";
//   if (window.scrollY <= 50) reTopArrow.style.bottom = "-50px";
// });
