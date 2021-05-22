
let nav_mobile = document.querySelector("#nav_mobile");
let main_menu_mobile = document.querySelector("#main_menu_mobile");
let sub_menu_mobile = document.querySelector(".sub_menu_mobile");
let sub_menu_mobile_1 = document.querySelector(".sub_menu_mobile_1");
let nav_icon = document.querySelector("#nav_icon");
let search_mobile = document.querySelector("#search_bar_mobile");
let search_bar = document.querySelector("#search_bar");
let search_icon = document.querySelector("#search_mobile_icon");
let reset_button_icon = document.querySelector(".fa-times");
let reset_button = document.querySelector("button[name = 'reset']");
let input = document.querySelector("input");
let search = document.querySelector(".fa-search");



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
