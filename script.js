const form = document.getElementById('product-form');
const productsContainer = document.getElementById('products-container');
let products = [];


fetch('products.json')
  .then(response => response.json())
  .then(data => {
    products = data;
    displayProducts();
  });


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;

  const newProduct = { name, price, image };
  products.push(newProduct);
  displayProducts();
});

function displayProducts() {
  productsContainer.innerHTML = '';
  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    `;
    productsContainer.appendChild(productCard);
  });
}
