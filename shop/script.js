const produtc = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};
// Function to fetch product data from the API
async function fetchProducts() {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
async function renderProducts() {
  const products = await fetchProducts();
  const itemsContainer = document.querySelector('.items');
  itemsContainer.innerHTML = '';

  if (products.length === 0) {
    itemsContainer.innerHTML = '<p>No products found.</p>';
    return;
  }

  products.forEach((product) => {
    // Create the product item element and populate its content
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');

    // Add the product image
    const imgElement = document.createElement('img');
    imgElement.src = product.imageUrl;
    imgElement.alt = product.name;
    itemElement.appendChild(imgElement);

    // Add product info
    const infoElement = document.createElement('div');
    infoElement.classList.add('info');

    // Add price and size information
    const priceElement = document.createElement('div');
    priceElement.classList.add('price');
    priceElement.textContent = `$${product.price}`;
    const sizedElement = document.createElement('div');
    sizedElement.classList.add('sized');
    sizedElement.textContent = product.sizes.join(',');
    infoElement.appendChild(priceElement);
    infoElement.appendChild(sizedElement);

    // Add color circles
    const colorsElement = document.createElement('div');
    colorsElement.classList.add('colors');
    colorsElement.textContent = 'Colors:';
    product.colors.forEach((color) => {
      const circleElement = document.createElement('div');
      circleElement.classList.add('circle');
      circleElement.style.backgroundColor = color;
      colorsElement.appendChild(circleElement);
    });
    infoElement.appendChild(colorsElement);

    // Add rating information (You can update this based on your actual rating data)
    const ratingElement = document.createElement('div');
    ratingElement.textContent = 'Rating:';
    infoElement.appendChild(ratingElement);

    // Add "Add to Cart" button
    const addBtnElement = document.createElement('button');
    addBtnElement.textContent = 'Add to Cart';
    addBtnElement.id = 'addBtn';
    itemElement.appendChild(infoElement);
    itemElement.appendChild(addBtnElement);

    itemsContainer.appendChild(itemElement);
  });
}

// Call the renderProducts function on page load or whenever needed
renderProducts();
// Modify the "Add to Cart" button event handler
document.addEventListener('click', function(event) {
  if (event.target.id === 'addBtn') {
    const item = event.target.closest('.item');

    // Retrieve product details
    const product = {
      id: item.dataset.productId,
      name: item.dataset.productName,
      price: item.dataset.productPrice
    };

    // Check if cart exists in local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product is already in the cart, you can update the quantity or any other relevant information.
      // For this example, let's assume you only allow one quantity per product.
      alert('This product is already in your cart.');
      return;
    }

    // Add the product to the cart
    cart.push(product);

    // Store the updated cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Provide feedback to the user (optional)
    alert('Product added to cart.');
  }
});


