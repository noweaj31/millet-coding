"use strict";

const header = document.querySelector("header");
const topArrow = document.querySelector(".button-content .top-arrow");
const reactiveBtnContent = document.querySelector(".reactive-btn-content");
const reactive = window.matchMedia("screen and (max-width: 480px)");

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

topArrow.addEventListener("click", () => {
  window.scrollTo({
    top: "0",
    behavior: "smooth",
  });
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) reactiveBtnContent.style.bottom = "-50px";
  if (window.scrollY <= 50) reactiveBtnContent.style.bottom = "0px";
});
