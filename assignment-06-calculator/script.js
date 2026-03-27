function calculate()
{

let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);

let result = document.getElementById("result");

result.innerHTML =
"Addition: " + (num1 + num2) + "<br>" +
"Subtraction: " + (num1 - num2) + "<br>" +
"Multiplication: " + (num1 * num2) + "<br>" +
"Division: " + (num1 / num2);

}