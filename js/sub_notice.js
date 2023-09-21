window.addEventListener("load", function() {  
  // top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    topBtn.style.transform = "rotate(0deg)"
    console.log(window.scrollY);
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 99999,
        behavior: "smooth",
      });
      topBtn.style.transform = "rotate(180deg)"
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  $('.check.all').on('change', function(){
    $('.check').prop('checked', $(this).prop('checked'));
  });

  $(document).on('click', '.page-box .btn.number', function(){
    $('.page-box .btn.number').removeClass('on');
    $(this).addClass('on');
    return false;
  })
  $(".select-title").click(function(){
    $(".select-option").toggle("active")
    $(".select-option2").toggle("active")
  })


})