window.addEventListener("load", function() {
  new Swiper('.visual .swiper', {    
    autoplay: {
      delay: 4000,
    },
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
      el: '.promotion .swiper-pagination',
      clickable: true,
    },
    
    navigation: {
      prevEl: '.visual .fa-chevron-left',
      nextEl: '.visual .fa-chevron-right',
    },
  });
});