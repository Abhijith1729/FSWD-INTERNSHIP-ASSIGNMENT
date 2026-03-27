import React, { useState } from "react";
import "./styles.css";

function App() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const [success, setSuccess] = useState(false);

const handleSubmit = (e) => {

e.preventDefault();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
setMessage("Error: Enter a valid email address");
setSuccess(false);
return;
}

if(password.length < 6){
setMessage("Error: Password must be at least 6 characters");
setSuccess(false);
return;
}

setMessage("Signup successful!");
setSuccess(true);

};

return (

<div className="container">

<h2>Smart Signup Form</h2>

<form onSubmit={handleSubmit}>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>{
setEmail(e.target.value);
setMessage("");
}}
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Sign Up</button>

</form>

<p className={success ? "success" : "error"}>{message}</p>

</div>

);

}

export default App;