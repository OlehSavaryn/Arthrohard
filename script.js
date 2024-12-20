// Burger Function

const body = document.querySelector("body");
const burgerMenu = document.querySelector(".burger-menu");
const burgerBtn = document.querySelector(".burger-btn");
const mobNavItem = document.querySelectorAll(".burger-menu");

function toggleMenu() {
  if (burgerMenu.classList.contains("show-menu")) {
    burgerMenu.classList.remove("show-menu");
    body.classList.remove("overflow-hidden");
    mobNavItem.forEach(function (menuItem) {
      menuItem.addEventListener("click", toggleMenu);
    });
  } else {
    burgerMenu.classList.add("show-menu");
    body.classList.add("overflow-hidden");
    mobNavItem.forEach(function (menuItem) {
      menuItem.addEventListener("click", toggleMenu);
    });
  }
}

burgerBtn.addEventListener("click", toggleMenu);
