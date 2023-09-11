// toggle class active

const navUl = document.querySelector(".navbar ul");
const menu = document.querySelector(" #hamburger-menu");
menu.addEventListener("click", function () {
  navUl.classList.toggle("aktif");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navUl.contains(e.target)) {
    navUl.classList.remove("aktif");
  }
});
