const navbarCenter = document.getElementById('navbar_center');
const navbar = document.getElementById('navbar');
const navbarLogo = document.getElementById('navbar_logo');
const navbarRight = document.getElementById('navbar_right');
const navbarMenu = document.getElementById('navbar_menu');
const searchMenu = document.getElementById('searchMenu');
const searchMini = document.getElementById('searchMini');




// scroll down event
window.addEventListener('scroll',function(){
  let nowScroll = document.documentElement.scrollTop
  console.log(nowScroll);
  if(nowScroll >= 100){

    navbarCenter.style.display = "none";
    navbar.style.backgroundColor = "var(--white-color)";
    navbarLogo.style.color = "var(--pink-color)";
    navbarRight.style.color = "var(--black-color)";
    navbarMenu.style.border = "1px solid var(--line-color)";
    searchMini.style.display = "flex";
  }
  if(nowScroll <= 78){
    navbarCenter.style.display = "flex";
    navbar.style.backgroundColor = "var(--black-color)";
    navbarLogo.style.color = "var(--white-color)";
    navbarRight.style.color = "var(--white-color)";
    searchMini.style.display = "none";
  }
})