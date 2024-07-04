var  btn = document.getElementById("off")
var hello_btn = document.getElementById("on")
var div_container= document.getElementById("div_container")

hello_btn.addEventListener("click", function () {
    // console.log(div_container.src);
    div_container.src = " image/download (1).png";
  
  });
  

  btn.addEventListener("click", function () {

    div_container.src ="image/download.png";

  });








