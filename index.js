var navMenu = document.querySelector(".hamburger");

navMenu.addEventListener("click", function () {
    document.querySelector(".first-container").classList.toggle("active-menu");
});

var navMenuItem = document.getElementsByClassName("first-level");

for (i = 0; i < navMenuItem.length; i++) {
    navMenuItem[i].addEventListener("click", function () {
      this.classList.toggle("active-menu-item");
    });
};