
const toggle = document.querySelector(".nav-toggle")
const menu = document.querySelector(".nav-menu")

toggle.addEventListener("click",()=>{

menu.classList.toggle("active")

let expanded = toggle.getAttribute("aria-expanded") === "true"

toggle.setAttribute("aria-expanded", !expanded)

})
const form = document.getElementById("contactForm");

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit",function(e){

e.preventDefault();

let valid=true;

const name=document.getElementById("name");
const email=document.getElementById("email");
const message=document.getElementById("message");

check(name);
check(message);

if(!emailPattern.test(email.value)){
showError(email);
valid=false;
}else{
removeError(email);
}

function check(field){
if(field.value.trim()===""){
showError(field);
valid=false;
}else{
removeError(field);
}
}

function showError(field){
field.parentElement.classList.add("is-invalid");
}

function removeError(field){
field.parentElement.classList.remove("is-invalid");
}

if(valid){
alert("Message Sent Successfully");
form.reset();
}

});
