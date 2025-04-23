const themeToggleButton = document.getElementById("theme-button");
const themeToggleIcon = document.getElementById("theme-icon");

function updateMode() {
  const currentMode = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  themeToggleIcon.innerText =
    currentMode === "dark" ? "Light Mode" : "Dark Mode";
  console.log(currentMode);
  return currentMode;
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggleIcon.style.color = "rgb(var(--foreground))";
}

updateMode();

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggleIcon.style.color = "rgb(var(--foreground))";

  const newMode = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  localStorage.setItem("theme", newMode);

  updateMode();
});
