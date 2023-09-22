// 이미지 변경
function changeImage(newImageSrc) {
    const mainImage = document.getElementById('mainImage').querySelector('img');
    mainImage.src = newImageSrc;
}
// 숫자 변경 (웹)
document.addEventListener("DOMContentLoaded", function () {

    var spanElement = document.querySelector(".fa-solid.fa-heart span");
    
    var currentNumber = 24;
    spanElement.textContent = currentNumber.toString();
    
    spanElement.addEventListener("click", function () {
        if (currentNumber === 24) {
            currentNumber = 25;
        } else {
            currentNumber = 24;
        }
        
        spanElement.textContent = currentNumber.toString();
    });
});

// 숫자 변경 (모바일)
document.addEventListener("DOMContentLoaded", function () {
    // HTML 요소를 가져옵니다.
    var button = document.querySelector(".subscription_btn_mobile");
    var span = document.querySelector(".subscription_btn_heart");
    
    // 초기값 설정
    var currentNumber = 24;
    
    // 초기 텍스트 설정
    span.textContent = currentNumber.toString();
    
    // 클릭 이벤트를 추가합니다.
    button.addEventListener("click", function () {
        // 현재 숫자를 확인하고 토글합니다.
        if (currentNumber === 24) {
            currentNumber = 25;
        } else {
            currentNumber = 24;
        }
        
        // 텍스트를 업데이트합니다.
        span.textContent = currentNumber.toString();
    });
});