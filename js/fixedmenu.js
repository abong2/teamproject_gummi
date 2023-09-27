$(function(){
    $('.fixedmenu > ul > li > .podocheck').on("click",function(e){
        e.preventDefault();
    });
    $(".fixedmenu01").on("mouseenter", function() {
        $(".fixedmenu_grape").fadeOut(0);
        $(".color_fixed_grape").fadeIn(150);
    });
    $(".fixedmenu01").on("mouseleave", function() {
        $(".fixedmenu_grape").fadeIn(150);
        $(".color_fixed_grape").fadeOut(0);
    });
});
window.addEventListener("load", function () {
    // 고정메뉴 호버시
    const fixedmenu01 = document.querySelector(".fixedmenu01");
    const grape = document.querySelector(".fixedmenu_grape");
    const colorgrape = document.querySelector(".color_fixed_grape");
    const fixedmenu02 = document.querySelector(".fixedmenu02");
    const check = document.querySelector(".fixedmenu_check");
    const colorcheck = document.querySelector(".color_fixed_check");
    // fixedmenu01.addEventListener("mouseover", function() {
    //     colorgrape.style.display = "flex";
    //     grape.style.display = "none";
    // });
    // fixedmenu01.addEventListener("mouseout", function() {
    //     colorgrape.style.display = "none";
    //     grape.style.display = "flex";
    // });
    fixedmenu02.addEventListener("mouseover", function() {
        colorcheck.style.display = "flex";
        check.style.display = "none";
    });
    fixedmenu02.addEventListener("mouseout", function() {
        colorcheck.style.display = "none";
        check.style.display = "flex";
    });
    // top 버튼 스크롤 기능
    const topBtn = document.getElementById("top-btn");
    topBtn.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(window.scrollY);
        if (window.scrollY == 0) {
            window.scrollTo({
                top: 99999,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    });
    // 화살표 이미지 회전
    const topBtnImg = document.getElementById("top-btn-img");
    window.addEventListener("scroll", function (scTop) {
        scTop = this.document.documentElement.scrollTop;
        if (scTop > 0) {
            topBtnImg.classList.add("up");
        } else {
            topBtnImg.classList.remove("up");
        }
    });
});
