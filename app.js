//inspect menu off
document.addEventListener("contextmenu",function(e){
    e.preventDefault();
});

//for navbar
const links = document.querySelectorAll(".navbar a");
links.forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".navbar a.active")?.classList.remove("active");
    link.classList.add("active");
  });
});