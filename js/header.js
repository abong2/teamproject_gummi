$(function(){
  $(".gnb > li").mouseover(function(){        
    $(".submenu").stop().slideDown(500);  
    $(".header").addClass("on");  
});

$(".gnb > li").mouseout(function(){
    $(".submenu").stop().slideUp(100);
    $(".header").removeClass("on");  
});
})