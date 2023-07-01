document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Retrieve user object from localStorage
    var user = JSON.parse(localStorage.getItem("user"));
  
    // Check if user exists and credentials are correct
    if (user && email === user.email && password === user.password) {
      // Generate and store token
      var token = generateToken();
      localStorage.setItem("token", token);
  
      // Display success message or redirect to another page
      alert("Login successful!");
      // window.location.href = "dashboard.html"; // Redirect to another page
    } else {
      alert("Invalid email or password. Please try again.");
    }

    // Generate a random token
  function generateToken() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var token = "";
    for (var i = 0; i < 10; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }

  window.location.href = '/shop/index.html';

  });
  
  
  
  