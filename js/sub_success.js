window.addEventListener("load", function() {
  new Swiper('.interview_section .swiper', {    
    autoplay: {
      delay: 4000,
    },
    loop: true,
    slidesPerView: 2,
    autoHeight: true,
    pagination: {
      el: '.interview_section .swiper-pagination',
      clickable: true,
    },
    
    navigation: {
      prevEl: '.interview_section .swiper-button-prev',
      nextEl: '.interview_section .swiper-button-next',
    },
  });
});