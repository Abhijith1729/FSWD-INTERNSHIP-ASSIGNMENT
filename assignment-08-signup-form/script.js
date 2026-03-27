let form = document.getElementById("userForm");

form.addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();

let message = document.getElementById("message");

if(name === "" || email === "" || password === ""){
message.innerText = "Error: All fields are required";
message.style.color = "red";
return;
}

if(!email.includes("@")){
message.innerText = "Error: Enter a valid email";
message.style.color = "red";
return;
}

if(password.length < 6){
message.innerText = "Error: Password must be at least 6 characters";
message.style.color = "red";
return;
}

message.innerText = "Success: Form submitted successfully";
message.style.color = "green";

});
