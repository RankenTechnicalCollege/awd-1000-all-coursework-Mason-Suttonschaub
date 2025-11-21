let email = document.getElementById("email");
let password = document.getElementById("password");
let result = document.getElementById("result");
let myForm = document.getElementById("form");

myForm.addEventListener('submit', function(event) {
   event.preventDefault();
  
  if(email.value === "admin@example.com" && password.value === "password"){
    console.log("1");
    result.innerHTML = "Welcome back Admin!";
    result.classList.add("text-success");
    result.classList.remove("text-danger");
  } else if (email.value === "" || password.value === ""){
    console.log("2");
    result.innerHTML = "You seem to have forgotten your username and password.";
    result.classList.add("text-danger");
    result.classList.remove("text-success");
  } else {
    console.log("3");
    result.innerHTML = "That email and password doesn't seem to be right. Try again.";
    result.classList.add("text-danger");
    result.classList.remove("text-success");
  }
})