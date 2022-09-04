// Problem 4: Given 3 numbers (all different values), print which is greatest
let a = 58;
let b = 52;
let c = 81;

// by conditional method 
// if (a > b & a > c) {
//   console.log(a, "is a greatest number");

// } else if (b > a & b > c) {
//   console.log(b, "is a greatest number");

// } else if (c > a & c > b) {
//   console.log(c, "is a greatest number");
// }

//by ternary operator 
a > b & a > c ? console.log(a, "is a greatest number")
  : b > a & b > c ? console.log(b, "is a greatest number") : console.log(c, "is a greatest number");