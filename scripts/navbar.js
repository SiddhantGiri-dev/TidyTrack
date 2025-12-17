const nav = document.querySelector("header nav");

function toggleNav(hamburger) {
  nav.classList.toggle("nav-active");
  hamburger.classList.toggle("hamburger-active");
}
