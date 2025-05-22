let menushow = document.querySelector(".fa-bars-staggered");
let menu = document.querySelector(".menu");
let closing = document.querySelector(".fa-xmark");

menushow.addEventListener("click", function () {
  menu.style.right = "0";
});
closing.addEventListener("click", function () {
  menu.style.right = "-300px";
});
