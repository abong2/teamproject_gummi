$(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 1,
    slidesPerView: 1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        spaceBetween: 1,
        slidesPerView: 1,
      },
    
      758: {
        spaceBetween: 1,
        slidesPerView: 2,
      },
      1920: {
        spaceBetween: 1,
        slidesPerView:3,
      }
    
    }
  });
  
const slidewrap = document.querySelector(".slidewrap");
const slidescnt = document.querySelectorAll(".slide").length;
const slideContainer = document.getElementsByClassName("slides");
const slideWidth = slidewrap.offsetWidth;
let currentSlide = 0;

//슬라이드 이동 함수
function goToSlide(index){
    currentSlide = index;
    slideContainer[0].style.transition = 'transform 0.5s ease';
    slideContainer[0].style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

//CSS 삽입 함수
function AddStyle(style){
    const styleTag = document.createElement('style');
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);
}

let Autoslideactive = null ; // 슬라이드 자동 이동 호출을 변수 화
function autoslide(){
    const index = (currentSlide+1) < slidescnt ? currentSlide+1 : 0;
    goToSlide(index);
}

/*  마우스 감지 시 슬라이드 자동 멈추기

*/
function Createmousedetector(){
    //마우스가 슬라이드에 올라왔을 때
    slideContainer[0].addEventListener("mouseover",(event)=>{

        clearInterval(Autoslideactive);
    })
    //마우스가 슬라이드에서 나온 경우 다시 실행
    slideContainer[0].addEventListener("mouseout",(event)=>{

        Autoslideactive = setInterval(autoslide,3000);
    })
}
Autoslideactive = setInterval(autoslide,3000); //일정 시간마다 호출
Createmousedetector();
  
});


