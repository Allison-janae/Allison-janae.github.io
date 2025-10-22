

// set up DOM loading event listener 
document.addEventListener("DOMContentLoaded", function () {

    // find the dark mode button
    let darkModeButton = document.querySelector("#toggleDarkMode");

    // Check localStorage for saved preference
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("darkMode");
    }

    // add a click function and handler
    darkModeButton.addEventListener("click", function (e) {
        
        // toggle the class
        document.body.classList.toggle("darkMode");

        // save preference
        let isDark = document.body.classList.contains("darkMode");
        localStorage.setItem("darkMode", isDark);
    });

});
