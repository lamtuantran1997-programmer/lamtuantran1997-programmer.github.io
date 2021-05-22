let modal = document.getElementById("myModal");
let img = document.querySelectorAll("main img");
const figcaption = document.querySelectorAll("main figcaption");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let nav_mobile = document.querySelector("#nav_mobile");
let main_menu_mobile = document.querySelector("#main_menu_mobile");
let sub_menu_mobile = document.querySelector(".sub_menu_mobile");
let sub_menu_mobile_1 = document.querySelector(".sub_menu_mobile_1");
let nav_icon = document.querySelector("#nav_icon");
let slideIndex = 0;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let slides = document.querySelectorAll(".mySlides");
let dot = document.querySelectorAll(".dot");
let search_mobile = document.querySelector("#search_bar_mobile");
let search_bar = document.querySelector("#search_bar");
let search_icon = document.querySelector("#search_mobile_icon");
let reset_button_icon = document.querySelector(".fa-times");
let reset_button = document.querySelector("button[name = 'reset']");
let input = document.querySelector("input");
let search = document.querySelector(".fa-search");

for (let i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = figcaption[i].innerHTML;
  };
  figcaption[i].addEventListener("mouseover",function(){
    figcaption[i].setAttribute("class","figcaptionAnimation");
  });
  figcaption[i].addEventListener("mouseout",function(){
    if(figcaption[i].hasAttribute("class"))
    figcaption[i].classList.remove("figcaptionAnimation");
  });
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
modal.onclick = function (e) {
  console.log(e.target);
  if (e.target.id === "myModal")
    modal.style.display = "none"
}

nav_mobile.addEventListener("click", function () {
  if (nav_icon.style.transform === "rotate(90deg)") {
    nav_icon.style.transform = null;
  } else {
    nav_icon.style.transform = "rotate(90deg)";
    nav_icon.style.transition = "0.5s";
  }
  if (main_menu_mobile.style.display === "block") {
    main_menu_mobile.style.display = "none";
    if (sub_menu_mobile_1.style.display === "block") {
      sub_menu_mobile_1.style.display = "none";
    }
  } else {
    main_menu_mobile.style.display = "block";
    search_mobile.style.display = "none";
  }
});
window.addEventListener("resize", function () {
  let w = window.innerWidth;
  if (w > 817) {
    main_menu_mobile.style.display = "none";
  }
});
sub_menu_mobile.addEventListener("click", function () {
  if (sub_menu_mobile_1.style.display === "block") {
    sub_menu_mobile_1.style.display = "none";
  } else {
    sub_menu_mobile_1.style.display = "block";
  }
});

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
search_icon.addEventListener("click", function () {
  if (search_mobile.style.display === "block") {
    search_mobile.style.display = "none";
  } else {
    search_mobile.style.display = "block";
    main_menu_mobile.style.display = "none";
    nav_icon.style.transform = "rotate(180deg)";
    nav_icon.style.transition = "0.5s";
  }
});
document.addEventListener("click", function (e) {
  console.log(e.target);
  if ((e.target !== input) && (e.target !== search) && (e.target !== reset_button_icon) && (e.target !== reset_button)) {
    input.style.width = "0";
    input.style.backgroundColor = "white";
    input.value = "";
    reset_button.style.display = "none";
  }
})

input.addEventListener("input", function () {
  if(input.value !== ""){
  reset_button.style.display = "block";
}else{
  reset_button.style.display = "none";
}
});

reset_button.addEventListener("click", function () {
  input.value = "";
  reset_button.style.display = "none";
  input.focus();
});
input.addEventListener("focus", function () {
  input.style.width = "100%";
  input.style.backgroundColor = "#FAF0E6";
});
