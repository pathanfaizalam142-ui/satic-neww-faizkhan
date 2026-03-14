const form=document.getElementById("form");

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let message=document.getElementById("message").value.trim();

let nameError=document.getElementById("nameError");
let emailError=document.getElementById("emailError");
let messageError=document.getElementById("messageError");

nameError.textContent="";
emailError.textContent="";
messageError.textContent="";

let valid=true;

if(name===""){

nameError.textContent="Name is required";
valid=false;

}

if(email===""){

emailError.textContent="Email is required";
valid=false;

}

if(message===""){

messageError.textContent="Message is required";
valid=false;

}

if(valid){

alert("Message Sent Successfully");

form.reset();

}

});