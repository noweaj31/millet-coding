"use strict";

const barBtn = document.querySelector(".reactive-search .bar-btn");
const gnbWrap = document.querySelector(".gnb-wrap");

barBtn.addEventListener("click", () => {
  $(gnbWrap).toggleClass("active");
});

console.log(barBtn);
