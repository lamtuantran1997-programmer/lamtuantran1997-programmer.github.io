let modal = document.getElementById("myModal");
let img = document.querySelectorAll("main img");
const figcaption = document.querySelectorAll("main figcaption");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");


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