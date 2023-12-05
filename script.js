document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menu");
    var menuList = document.querySelector(".list-items");
  
    menuIcon.addEventListener("click", function() {
      menuList.classList.toggle("show");
    });
  });