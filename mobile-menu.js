const humburger = document.querySelector(".humberger");
const navMenu = document.querySelector(".navbar-links");

humburger.addEventListener("click",() =>{
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})