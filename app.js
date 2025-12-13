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


