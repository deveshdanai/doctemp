//for toggling the sidebar on mobile

console.log("Script loaded successfully");
const menuToggle=document.querySelector(".menu-toggle");
const sidebar=document.querySelector(".sidebar")

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-open");
});

//for highlighting the active section in the sidebar


const sections = document.querySelectorAll(
  "#goals, #schedule, #resources, #getting-started, #about"
);

const navLinks = document.querySelectorAll(".on-this-page a");
const navHeight = document.querySelector(".top-nav").offsetHeight; // 64px

window.addEventListener("scroll", () => {
  let currentId = "";

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;


    if (sectionTop <= navHeight + 10) {
      currentId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentId}`) {
      link.classList.add("active");
    }
  });
});
