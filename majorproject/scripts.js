document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const burger = document.getElementById("navBurger");
  const topItems = document.querySelectorAll("nav > ul > li");

  
  burger.addEventListener("click", () => {
    nav.classList.toggle("open"); // toggle mobile menu
  });

 
  topItems.forEach(item => {
    const submenu = item.querySelector("ul");

    if (submenu) {
      item.addEventListener("click", (e) => {
        // only toggle on mobile
        if (window.innerWidth <= 768) {
          e.preventDefault(); // prevent parent link navigation
          item.classList.toggle("open");
        }
      });
    }
  });

 
  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav")) {
      nav.classList.remove("open"); // close main menu
      topItems.forEach(item => item.classList.remove("open")); // close submenus
    }
  });

 
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove("open");
        topItems.forEach(item => item.classList.remove("open"));
      }
    });
  });
});
