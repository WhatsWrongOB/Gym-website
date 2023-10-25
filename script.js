const changeBackground = document.querySelector('.navbar_bg_active')

window.addEventListener('scroll', () => {
              if(window.scrollY){
                changeBackground.style.backgroundColor = "black"
              }
              else{
                changeBackground.style.backgroundColor = "transparent"
              }
})

const burger = document.querySelector('.hamburger');
const menuActive = document.querySelector('.menu');
burger.addEventListener("click",()=>{
     menuActive.classList.toggle("active")
});