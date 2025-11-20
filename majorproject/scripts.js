// CLEAN MOBILE NAV SCRIPT — matches your CSS (nav.open)

// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {

    const burger = document.getElementById("navBurger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Toggle menu
    burger.addEventListener("click", (e) => {
        e.stopPropagation();       // Prevent click from bubbling to HTML
        nav.classList.toggle("open");
    });

    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });

    // Also close menu if user taps anywhere outside the nav
    document.addEventListener("click", (e) => {
        if (!e.target.closest("nav")) {
            nav.classList.remove("open");
        }
    });
});
