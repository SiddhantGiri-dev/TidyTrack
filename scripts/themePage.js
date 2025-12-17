import { updateTheme } from "./globals.js";

const input = document.getElementById("selectTheme");

input.value = localStorage.getItem("theme");

input.addEventListener("input", () => {
  updateTheme(input.value);
});
