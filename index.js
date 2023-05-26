// logic for location changing circle colours
// parallalex effect for scrolling down/up
// parallalex effect for mouse movement on home page

const nav = document.querySelector(".header-container");
const navButton = document.querySelector(".header-element");

const skillContainer = document.querySelectorAll(".skill-container");
skillContainer.forEach((container) => {
  container.addEventListener("mouseenter", (e) => {
    console.log("enter");
    e.target.style.backgroundColor = "red";
    e.target.lastElementChild.classList.toggle("hidden-text");
  });

  container.addEventListener("mouseleave", (e) => {
    console.log("leave");
    e.target.style.backgroundColor = "white";
    e.target.lastElementChild.classList.toggle("hidden-text");
  });
});

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
