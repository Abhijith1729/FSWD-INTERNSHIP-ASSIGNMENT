let button = document.getElementById("showBtn");

button.addEventListener("click", function(){

let list = document.getElementById("projectList");

if(list.children.length > 0){
list.innerHTML = "";
button.innerText = "Show Projects";
return;
}

fetch("projects.json")
.then(response => response.json())
.then(data => {

data.forEach(project => {

let li = document.createElement("li");
li.textContent = project;

list.appendChild(li);

});

button.innerText = "Hide Projects";

});

});