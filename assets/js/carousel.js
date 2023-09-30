"use strict";

// main-img
const carouselWrap = document.querySelector(".main-img .img-area");
const carouselItem = document.querySelector(".main-img .img-area img");
const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");
const totalCalrousels = document.querySelectorAll(
  ".main-img .img-area img"
).length;
const calrouselWidth = carouselItem.clientWidth;
let currentCarousel = 0;
let autocarouselInterval;

const rotateCarousel = (direction) => {
  currentCarousel += direction;
  const scrollX = currentCarousel * calrouselWidth;
  carouselWrap.scrollTo({
    left: scrollX,
    behavior: "smooth",
  });
};

const startAutoCarousel = () => {
  autocarouselInterval = setInterval(() => {
    rotateCarousel(1);
  }, 3000);
};

nextButton.addEventListener("click", () => {
  rotateCarousel(1);
});

prevButton.addEventListener("click", () => {
  rotateCarousel(-1);
});

startAutoCarousel();
