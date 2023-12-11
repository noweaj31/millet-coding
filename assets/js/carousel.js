"use strict";

const mainSlider = tns({
  container: ".main-wrap .mainimg-area",
  autoplay: true,
  speed: 400,
  autoplayButton: ".stop-btn",
  mouseDrag: true,
  nav: true,
  startIndex: 0,
  // controls: true,
  // navAsThumbnails: true,
  arrowKeys: true,
  // autoplayHoverPause: true,
  // autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  // navContainer: ".main-wrap .swiper-area",
  prevButton: ".main-wrap .btn-prev",
  nextButton: ".main-wrap .btn-next",
});

const mobileMainSlider = tns({
  container: ".re-main-img .reactive-mainimg-area",
  autoplay: true,
  speed: 400,
  autoplayButton: ".stop-btn",
  mouseDrag: true,

  startIndex: 0,
  // controls: true,
  // navAsThumbnails: true,
  arrowKeys: true,
  // autoplayHoverPause: true,
  // autoplayButtonOutput: false,
  // mouseDrag: true,
  // preventScrollOnTouch: true,
  // navContainer: ".main-wrap .swiper-area",
});
// const iteContainer = tns({
//   container: ".main-content .item-container .item-wrap",
//   autoplay: true,
//   items: 4,
//   controls: false,
//   autoplayButtonOutput: false,
//   mouseDrag: true,
//   preventScrollOnTouch: true,
//   nav: false,
// });
