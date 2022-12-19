let BarMenu = document.querySelector(".header-nav");
let NavMenu = document.querySelector('.navbar-links');
let NavLogo = document.querySelector('.logo');

let humberger = document.querySelector('.humberger');
humberger.addEventListener('click',addMenuItems);

function addMenuItems(){
  BarMenu.classList.replace('header-nav','header-nav-expand')
  NavMenu.classList.replace('navbar-links','navbar-links-visible'); 
  NavLogo.classList.replace('logo','logo-invisible');
}
