const header = document.getElementById("header"),
  navMenu = document.getElementById("nav-menu"),
  navOpen = document.getElementById("nav-open"),
  navClose = document.getElementById("nav-close"),
  navLinks = document.querySelectorAll(".nav__link");

/* Change header style on scroll
---------------------------------------*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// open nav menu
navOpen.addEventListener("click", () => {
  navMenu.classList.add("nav__menu--open");
});

// close nav menu
navClose.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu--open");
});

// Close the nav menu when the user clicks on each nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
  });
});

// activate nav link on scroll
function addActiveLink() {
  const section = document.querySelectorAll("section[id]");
  section.forEach((section) => {
    const scrolly = window.scrolly,
      sectionTop = section.offsetTop - 120,
      sectionHeight = section.offsetHeight,
      sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__link[href*= " + sectionId + "]")
        .classList.add("nav__link--active");
    } else {
      document
        .querySelector(".nav__link[href*= " + sectionId + "]")
        .classList.remove("nav__link--active");
    }
  });
}

window.addEventListener("scroll", addActiveLink);

/* 
ScrollReveal
----------------------------------------------*/
const sr = ScrollReveal({
  distance: "50px",
  duration: 2500,
  delay: 400,
  reset: false,
});

sr.reveal(".home__content, .home__img", { origin: "top", interval: 100 });
sr.reveal(".service__item, .newsletter__form", {
  origin: "right",
  interval: 100,
});
sr.reveal(".about__img, .about__content", { origin: "bottom", interval: 100 });
sr.reveal(".product__item, .blog__item, .footer__content", { interval: 100 });
