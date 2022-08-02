// INTERSECTION OBSERVER FUNCTIONALITY

const options = {
  threshold: 0.8,
};

// Function..
const addActivebar = (entries, sectionObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry.target);

      let currentActive = document.querySelector(".desktop-nav .active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }

      let newActive = document.querySelector(
        `.desktop-nav a[href="#${entry.target.getAttribute("id")}"]`
      );
      newActive.classList.add("active");
    }
  });
};

const sectionObserver = new IntersectionObserver(addActivebar, options);

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  sectionObserver.observe(section);
});

// MOBILE NAVIGATION FUNCTIONALITY
const openIcon = document.querySelector(".nav-icon i");
const closeIcon = document.querySelector(".mobile-nav__icon i");
const body = document.querySelector("body");

openIcon.addEventListener("click", () => {
  body.classList.add("open-nav");
});

closeIcon.addEventListener("click", () => {
  body.classList.remove("open-nav");
});
