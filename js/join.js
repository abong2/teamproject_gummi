window.addEventListener("load", function() {
  new Swiper('.joinswiper', {    
    autoHeight: true,
    autoplay: {
      delay: 4000,
    },
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