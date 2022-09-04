// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let username = "Hemensan Mahilange"
let password = "@Hemensan0767"
let username_entered = "Hemensan Mahilange"
let password_entered = "Hemensan0767"

if (username === username_entered) {
  if (password === password_entered) {
    console.log("logged in");
  }
}
if (username !== username_entered) {
  console.log("wrong username");
} else if (password !== password_entered) {
  console.log("wrong password");
}

