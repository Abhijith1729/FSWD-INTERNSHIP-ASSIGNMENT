let grid = document.getElementById("productGrid");
let cartCount = 0;

function displayProducts(list){

grid.innerHTML = "";

list.forEach(product => {

let card = document.createElement("div");
card.className = "product-card";

card.innerHTML = `
<img src="${product.image}">
<h3>${product.name}</h3>
<p class="price">$${product.price}</p>
<p class="rating">${product.rating}</p>
<p class="stock">${product.stock}</p>
<button onclick="addToCart(this)">Add to Cart</button>
`;

grid.appendChild(card);

});

}

function filterProducts(category){

if(category === "all"){
displayProducts(products);
return;
}

let filtered = products.filter(p => p.category === category);

displayProducts(filtered);

}

function sortByPrice(){

let sorted = [...products].sort((a,b) => a.price - b.price);

displayProducts(sorted);

}

function addToCart(button){

cartCount++;

document.getElementById("cartCount").innerText = cartCount;

/* update button UI */
button.innerText = "Added ✔";
button.style.background = "#2ecc71";
button.disabled = true;

}

displayProducts(products);