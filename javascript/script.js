const toggle = document.querySelector(".nav-toggle")
const menu = document.querySelector(".nav-menu")

toggle.addEventListener("click",()=>{

menu.classList.toggle("active")

let expanded = toggle.getAttribute("aria-expanded") === "true"

toggle.setAttribute("aria-expanded", !expanded)

})