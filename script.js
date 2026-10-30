const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;
const themeText = themeToggle.querySelector("span");

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  themeText.textContent = newTheme === "dark" ? "Dark" : "Light";
});
