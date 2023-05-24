// logic for location changing circle colours
// parallalex effect for scrolling down/up
// parallalex effect for mouse movement on home page

const nav = document.querySelector(".header-container");
const navButton = document.querySelector(".header-element");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("hidden-nav");
    // console.log("we went down");
  } else {
    nav.classList.remove("hidden-nav");
    // console.log("we went up");
  }
  lastScrollY = window.scrollY;
});

navButton.addEventListener("click", () => {
  console.log("pog");
  setTimeout(() => {
    console.log("pog");
    nav.classList.remove("hidden-nav");
  }, 2000);
});
