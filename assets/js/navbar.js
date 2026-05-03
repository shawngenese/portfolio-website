const toggleMenu = document.querySelector("#toggleMenu");
const navMenu = document.querySelector(".nav-menu");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("menu-active");
});

function checkWindowSize() {
  if (window.innerWidth >= 1044) {
    navMenu.classList.remove("menu-active");
    toggleMenu.style.display = "none";
  } else {
    toggleMenu.style.display = "flex";
  }
}

window.addEventListener("resize", checkWindowSize);
checkWindowSize();
