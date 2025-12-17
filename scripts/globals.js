const theme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "light";

if (theme == "dark") {
  document.body.classList.add("dark-theme");
}

export function updateTheme(theme) {
  localStorage.setItem("theme", theme);

  if (theme == "dark") {
    document.body.classList.add("dark-theme");
  } else if (theme == "light") {
    document.body.classList.remove("dark-theme");
  }
}
