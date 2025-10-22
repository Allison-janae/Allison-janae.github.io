// set up DOM loading event listener 
document.addEventListener("DOMContentLoaded", function () {

    // find the dark mode button
    let darkModeButton = document.querySelector("#toggleDarkMode");

    // add a click function and handler
    darkModeButton.addEventListener("click", function (e) {
        
        // when clicked, add class to the body called "darkMode"
        document.body.classList.toggle("darkMode");
        
    });

});

<body>
    <script>
  const toggle = document.getElementById('darkModeToggle');

  // Load user's saved mode from localStorage (if any)
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
  });
</script>

</body>

