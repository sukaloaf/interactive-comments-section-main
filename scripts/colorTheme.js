/* This js script is for the toggle switch that changed the theme */
function toggleTheme() {
  document.getElementById("toggle").addEventListener("click", () => {
    document.getElementsByTagName("body")[0].classList.toggle("light-mode");
  });
}

toggleTheme();
