// main.js
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;

  const nav = sidebar.querySelector("nav");
  const buttons = sidebar.querySelectorAll("nav button");

  if (buttons.length > 0) {
    buttons[0].classList.add("active");
    nav.style.setProperty("--top", "0px");
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      nav.style.setProperty("--top", `${index * 56}px`);
    });
  });
});
