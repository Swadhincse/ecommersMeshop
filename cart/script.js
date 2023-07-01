
document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cartItems');
  
    // Retrieve cart items from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Render cart items
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cart.forEach(function(product) {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
  
        const nameElement = document.createElement('div');
        nameElement.textContent = product.name;
  
        const priceElement = document.createElement('div');
        priceElement.textContent = `$${product.price}`;
  
        const removeBtnElement = document.createElement('button');
        removeBtnElement.textContent = 'Remove';
        removeBtnElement.addEventListener('click', function() {
          // Remove the product from the cart
          cart = cart.filter((item) => item.id !== product.id);
          // Update the cart in local storage
          localStorage.setItem('cart', JSON.stringify(cart));
          // Re-render the cart items
          renderCartItems();
        });
  
        itemElement.appendChild(nameElement);
        itemElement.appendChild(priceElement);
        itemElement.appendChild(removeBtnElement);
        cartItemsContainer.appendChild(itemElement);
      });
    }
  });
  
  function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; // Clear previous items
    // Call the code to render cart items here (same as the code above)
  }
  