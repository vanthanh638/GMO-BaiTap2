var slideIndex = 0;
autoSlideShow();
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var nums = document.getElementsByClassName("numSlide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (var i = 0; i < nums.length; i++) {
        nums[i].className = nums[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    nums[slideIndex-1].className += " active";
}
function autoSlideShow() {
    var slides = document.getElementsByClassName("mySlides");
    var nums = document.getElementsByClassName("numSlide");
    for (var i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (var i = 0; i < nums.length; i++) {
        nums[i].className = nums[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    nums[slideIndex-1].className += " active";
    setTimeout(autoSlideShow, 10000);
}
