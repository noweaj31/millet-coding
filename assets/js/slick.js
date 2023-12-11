// $(function () {
//   // slick.js
//   // 메인이미지
//   $(".mainimg-area")
//     .not(".slick-initialized")
//     .slick({
//       infinite: true,
//       autoplay: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplaySpeed: 2000,
//       prevArrow: $(".main-img .btn-prev"),
//       nextArrow: $(".main-img .btn-next"),
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             infinite: true,
//             autoplay: true,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplaySpeed: 2000,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             autoplay: true,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplaySpeed: 2000,
//           },
//         },

//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//       ],
//     });

//   // 반응형
//   $(".reactive-mainimg-area")
//     .not(".slick-initialized")
//     .slick({
//       infinite: true,
//       autoplay: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplaySpeed: 2000,
//       prevArrow: $(".re-main-img .btn-prev"),
//       nextArrow: $(".re-main-img .btn-next"),
//     });

//   $(".re-main-img .stop-btn").click(function () {
//     $(".reactive-mainimg-area").slick("slickPause");
//   });

//   // best-content

$(".main-content .item-wrap")
  .not(".slick-initialized")
  .slick({
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 400,
          prevArrow: false,
          nextArrow: false,
          dots: false,
        },
      },
      {
        breakpoint: 684,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 400,
          prevArrow: false,
          nextArrow: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 400,
          prevArrow: false,
          nextArrow: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
          speed: 400,
          prevArrow: false,
          nextArrow: false,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

//   $("#tab1-content .item-wrap")
//     .not(".slick-initialized")
//     .slick({
//       dots: false,
//       autoplay: true,
//       infinite: true,
//       speed: 1000,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       prevArrow: false,
//       nextArrow: false,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             infinite: true,
//             autoplay: true,
//             speed: 1000,
//             prevArrow: false,
//             nextArrow: false,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//             autoplay: true,
//             speed: 1000,
//             prevArrow: false,
//             nextArrow: false,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             infinite: true,
//             autoplay: true,
//             speed: 1000,
//             prevArrow: false,
//             nextArrow: false,
//           },
//         },
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//       ],
//     });

$(".today-content .item-wrap")
  .not(".slick-initialized")
  .slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 300,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 300,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
          speed: 300,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
          speed: 300,
          prevArrow: false,
          nextArrow: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
