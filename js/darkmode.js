// Tilføj din JavaScript her

const html = document.querySelector(":root");
const toggleBtn = document.querySelector("#toggle");

if (sessionStorage.getItem("darkmode") === "true") {
  html.classList.add("dark");
}

function toggleTheme() {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    sessionStorage.setItem("darkmode", "true");
  } else {
    sessionStorage.setItem("darkmode", "false");
  }
}

toggleBtn.addEventListener("change", toggleTheme);
