"use strict";

const carouselWrap = document.querySelector(".main-img .img-area");
const carouselItem = document.querySelector(".main-img > img");
const totalCalrousels = document.querySelectorAll(".main-img > img").length;
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

rotateCarousel();
startAutoCarousel(); //자동시작실행
