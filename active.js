const navbarCenter = document.getElementById('navbar_center');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll',function(){
  let nowScroll = document.documentElement.scrollTop
  console.log(nowScroll);
  if(nowScroll >= 100){
    navbarCenter.style.display = "none";
    navbar.style.backgroundColor = "#fcfcfc";
  }
  if(nowScroll == 0){
    navbarCenter.style.display = "flex";
    navbar.style.backgroundColor = "#131313";
  }
})