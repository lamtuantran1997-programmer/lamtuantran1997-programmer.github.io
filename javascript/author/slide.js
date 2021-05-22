let slideIndex = 0;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let slides = document.querySelectorAll(".mySlides");
let dot = document.querySelectorAll(".dot");



function showSlides(n) {
    let i;
    slideIndex += n;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].className = dot[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dot[slideIndex - 1].className += " active";
  }
  
  function showSlidesAuto() {
    let i;
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
      dot[i].className = dot[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dot[slideIndex - 1].className += " active";
    setTimeout(showSlidesAuto, 3000);
  }
  showSlidesAuto();
  prev.addEventListener("click", function () {
    showSlides(-1);
  });
  next.addEventListener("click", function () {
    showSlides(1);
  });
  for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", function () {
      showSlides(i + 1 - slideIndex);
    });
  }