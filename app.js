//inspect menu off
document.addEventListener("contextmenu",function(e){
    e.preventDefault();
});

//for navbar
const links = document.querySelectorAll(".navbar i");
links.forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".navbar .active")?.classList.remove("active");
    link.classList.add("active");
  });
});


// Dark/Light theme toggle
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}
function toggleTheme() {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
initTheme();
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}