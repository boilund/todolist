let x = 3.97;
console.log('Our number ' + x);

//Rounding
// Rounds up from .5
let rounded = Math.round(x);
console.log('Rounded' + rounded);
// 4

// Floor - only the integer part
let floored = Math.floor(x);
console.log('Floored ' + floored);
// 3

// Ceil - 指定された数値以上の最小の整数
let ceiled = Math.ceil(x);
console.log('Ceiled ' + ceiled);
// 4


console.log('Some numbers ', 1, 2, 2.25, -3);


// Find the biggest number
let biggest = Math.max(1, 2, 2.25, -3);
console.log('Math.max', biggest);
// 2.25

// Find the smallest number
let smallest = Math.min(1, 2, 2.25, -3);
console.log('Math.min', smallest);
// -3


// Math.abs -> convert to no-negative
// remove -, always return a positive number
console.log('Math.abs(-3)',Math.abs(-3));
// 3

// Math.pow --> "to the power of / upphöjt till"　累乗
console.log('Math.pow(3,4)',Math.pow(3,4));
// 81
// 3 ** 4

// Modulus --> calculates the remain ("resten")
console.log('10 % 3', 10 % 3);
// 1
console.log('10 % 4', 10 % 4);
// 2

function even(x){
  // will return true for even integers and false for odd integers
  return x % 2 == 0;
}
console.log('even(3)', even(3)); // false
console.log('even(8)', even(8)); // true



// How to round to a specific number of decimals in JS?
// (without getting a string back...)

// If you do want a string as your result just use toFixed...

let x = 6.12812312312312313231231123;

// Oldschool
function round(num, decimals) {
  let factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
}

console.log(round(x, 2));
// 6.13


// Hipster
function roundHipster(num, decimals) {
  return num.toFixed(decimals) / 1; // /1 occur number
}

console.log(round(x,2)); // 6.13
console.log(roundHipster(x,2)); // 6.13

//console.log(typeof round(x,2)); // number
//console.log(typeof roundHipster(x,2)); // string