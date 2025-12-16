//inspect menu off
document.addEventListener("contextmenu",function(e){
    e.preventDefault();
});
//navbar
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("main section");
function setActive(id) {
  navLinks.forEach(link => {
    const icon = link.querySelector(".nav-icon");
    const linkId = link.getAttribute("href").replace("#", "");
    if (icon) {
      icon.classList.toggle("active", linkId === id);
    }
  });
}
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href").replace("#", "");
    setActive(id);
  });
});
window.addEventListener("scroll", () => {
  let currentId = sections[0].id;
  sections.forEach(section => {
    const position = section.getBoundingClientRect();
    if (
      position.top <= window.innerHeight / 2 &&
      position.bottom >= window.innerHeight / 2
    ) {
      currentId = section.id;
    }
  });
  setActive(currentId);
});
window.addEventListener("load", () => {
  setActive(currentId);
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
//contact
let form = document.getElementById('contact-form');
        form.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("contact-form")),
            }).then(
                response => response.json()
            ).then((html) => {
                document.getElementById("span").innerHTML=" Submitted! ";
                document.getElementById("rarw").style.display="none";
                setTimeout(() =>{
                window.location.href = "#contact-r8";
                location.reload();
                } ,1000);
            });
        });