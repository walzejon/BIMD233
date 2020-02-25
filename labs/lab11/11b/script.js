function myFunc() {
  var user = document.getElementById("user");
  user.textContent = "Username: " + prompt("Username", "Jon");

  var password = document.getElementById("pass");
  password.textContent = "Password: " + prompt("Password");
}