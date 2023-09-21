window.addEventListener("load", function() {
  AOS.init();
  new Swiper('.joinswiper', {    
    autoHeight: true,
    slidesPerView: 1,

    pagination: {
      el: '.join .swiper-pagination',
      clickable: true,
    },
    
    navigation: {
      prevEl: '.join .swiper-button-prev',
      nextEl: '.join .swiper-button-next',
    },
  });
});