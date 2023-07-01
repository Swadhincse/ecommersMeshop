// Write your script here
// Retrieve user object from localStorage
var user = JSON.parse(localStorage.getItem("user"));

// Check if the user is logged in
if (!user) {
  alert("Please login to access your profile.");
  // window.location.href = "login.html"; // Redirect to login page
}

// Retrieve profile section and input fields
var profileSection = document.getElementById("profileSection");
var firstNameInput = document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");

// Populate profile information
firstNameInput.value = user.firstName;
lastNameInput.value = user.lastName;

// Retrieve password section and input fields
var passwordSection = document.getElementById("passwordSection");
var oldPasswordInput = document.getElementById("oldPassword");
var newPasswordInput = document.getElementById("newPassword");
var confirmPasswordInput = document.getElementById("confirmPassword");

// Edit Profile button click event
document.getElementById("editProfileBtn").addEventListener("click", function() {
  firstNameInput.disabled = false;
  lastNameInput.disabled = false;
  passwordSection.style.display = "block";
});

// Save Password button click event
document.getElementById("savePasswordBtn").addEventListener("click", function() {
  var oldPassword = oldPasswordInput.value;
  var newPassword = newPasswordInput.value;
  var confirmPassword = confirmPasswordInput.value;

  // Check if the old password matches the stored password
  if (oldPassword !== user.password) {
    alert("Old password is incorrect.");
    return;
  }

  // Check if the new password and confirm password match
  if (newPassword !== confirmPassword) {
    alert("New password and confirm password do not match.");
    return;
  }

  // Update the user's password
  user.password = newPassword;
  localStorage.setItem("user", JSON.stringify(user));

  alert("Password updated successfully.");
});

// Logout button click event
document.getElementById("logoutBtn").addEventListener("click", function() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  alert("Logged out successfully.");
  window.location.href = "/shop/index.html"; // Redirect to login page
});
