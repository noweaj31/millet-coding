"use strict";

const mainSlider = tns({
  container: ".main-wrap .mainimg-area",
  autoplay: true,
  speed: 300,
  autoplayText: false,
  autoplayButton: false,
  // controls: true,
  // navAsThumbnails: true,
  arrowKeys: true,
  // autoplayHoverPause: true,
  // autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  // navContainer: ".main-wrap .swiper-area",
});

const mobileMainSlider = tns({
  container: ".re-main-img .reactive-mainimg-area",
  autoplay: true,
  speed: 300,
  controls: false,
  mouseDrag: true,

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

const tabContentSlider1 = tns({
  container: ".tab-contents #tab1-content .item-wrap",
  autoplay: true,
  speed: 300,
  items: 4,
  controls: false,
  gutter: 16,
  mouseDrag: true,
  responsive: {
    1024: {
      items: 4,
    },
    684: {
      items: 3,
    },
    480: {
      items: 1,
    },
    0: {
      items: 2,
    },
  },
});

const tabContentSlider2 = tns({
  container: ".tab-contents #tab2-content .item-wrap",
  autoplay: true,
  speed: 300,
  items: 4,
  controls: false,
  gutter: 16,
  mouseDrag: true,
  responsive: {
    1024: {
      items: 4,
    },
    684: {
      items: 3,
    },
    480: {
      items: 1,
    },
    0: {
      items: 2,
    },
  },
});
const tabContentSlider3 = tns({
  container: ".tab-contents #tab3-content .item-wrap",
  autoplay: true,
  speed: 300,
  items: 4,
  controls: false,
  gutter: 16,
  mouseDrag: true,
  responsive: {
    1024: {
      items: 4,
    },
    684: {
      items: 3,
    },
    480: {
      items: 1,
    },
    0: {
      items: 2,
    },
  },
});
const tabContentSlider4 = tns({
  container: ".tab-contents #tab4-content .item-wrap",
  autoplay: true,
  speed: 300,
  items: 4,
  controls: false,
  gutter: 16,
  mouseDrag: true,
  responsive: {
    1024: {
      items: 4,
    },
    684: {
      items: 3,
    },
    480: {
      items: 1,
    },
    0: {
      items: 2,
    },
  },
});
